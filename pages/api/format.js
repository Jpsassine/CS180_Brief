import { Configuration, OpenAIApi } from "openai";

/**
 * In this file we create formatted strings that contain the
 * subject+body + prompt engineering for each message. These
 * are then sent to the openAI API and correct summaries
 * are sent back. Then a final mapping is created. This
 * mapping is from user to a 2D array containing formatted
 * string and summary string in each cell.
 *
 * ( user => { ["formatted_string", "summary_string"], [...], ... })
 *
 *  */

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generation(in_message) {
  console.log("entered gen", in_message);
  if (!configuration.apiKey) {
    return {
      error: {
        message: "OpenAI API key not configured",
      },
    };
    return;
  }

  const inbound_msg = in_message || "";
  if (inbound_msg.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid inbound message.",
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(inbound_msg),
      temperature: 0.6,
    });
    return { result: completion.data.choices[0].text };
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return;
    } else {
      console.error(
        `Error with OpenAI API request: ${error.message}`
      );
      return {
        error: {
          message: "An error occurred during your request.",
        },
      };
    }
  }
}

function generatePrompt(inbound_msg) {
  return `Summarize the content of this email into two sentences. It distinguishes the subject and body for you, but do not include these keywords. Make it as simple as possible while retaining context.
    Break the sentences up into two bullet points. The following is how the output should be.
  
     Full email:${inbound_msg}
     Summary:`;
}

async function createUserToMessageMap(inputMap) {
  function generateMessage(subject, body) {
    return `Subject: ${subject}\nBody: ${body}`;
  }

  async function createMessageArray(messages) {
    return messages.map(async ({ subject, body }) => {
      console.log("SUB_BODY", subject, body);
      const message = generateMessage(subject, body);
      console.log("message", message);
      const response = await generation(message);
      console.log("response", response);

      //   if (response.status !== 200) {
      //     throw (
      //       data.error ||
      //       new Error(`Request failed with status ${response.status}`)
      //     );
      //   }
      console.log("create arraay", message, response.result);
      return [message, response.result];
    });
  }

  const userToMessages = {};
  for (const [user, messages] of Object.entries(inputMap)) {
    console.log("entered loop", user, messages);
    const messageArray = await createMessageArray(messages);
    console.log("loops", messageArray);
    userToMessages[user] = messageArray;
  }
  return userToMessages;
}

module.exports = {
  createUserToMessageMap,
};
