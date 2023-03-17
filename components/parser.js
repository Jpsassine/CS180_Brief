const fs = require("fs");

fs.readFile("messages.json", (error, data) => {
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
