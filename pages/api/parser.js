const fs = require("fs");

/**
 * In this file we parse the raw email json intake.
 * This parsing consists of creating a mapping from
 * each user to their messages. These messages are
 * stored in an array, and each cell contains
 * multiple attributes about the message: subject,
 * body, date.
 */

// We use Strategy pattern to implement parsing
// for different input methods: SMS, DMs, Emails,

// Define the strategy classes
class InputSMS {
  parse() {
    return;
  }
}

class InputDMs {
  parse() {
    return;
  }
}

class InputEmail {
  parse() {
    fs.readFile("raw_emails.json", (error, data) => {
      if (error) {
        console.error("Error reading messages file: ", error);
      } else {
        const messagesArray = JSON.parse(data);
        const userMessagesMap = {};

        messagesArray.forEach((message) => {
          const user = message.from;
          const messageData = {
            date: message.date,
            subject: message.subject,
            body: message.body,
          };

          if (userMessagesMap[user]) {
            userMessagesMap[user].push(messageData);
          } else {
            userMessagesMap[user] = [messageData];
          }
        });

        console.log(userMessagesMap);
      }
    });
    userMessagesMap;
    return;
  }
}

// Define the context class
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  executeStrategy() {
    return this.strategy.parse();
  }
}

// Export the function that uses the Strategy pattern
export function performParse(strategyType) {
  let strategy;

  switch (strategyType) {
    case "SMS":
      strategy = new InputSMS();
      break;
    case "DM":
      strategy = new InputDMs();
      break;
    case "EMAIL":
      strategy = new InputEmail();
      break;
    default:
      throw new Error("Invalid strategy type.");
  }

  const context = new Context(strategy);
  return context.executeStrategy();
}
