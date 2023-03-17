/**
 * In this file we parse the raw email json intake.
 * This parsing consists of creating a mapping from
 * each user to their messages. These messages are
 * stored in an array, and each cell contains
 * multiple attributes about the message: subject,
 * body, date.
 */

const fs = require("fs");

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
