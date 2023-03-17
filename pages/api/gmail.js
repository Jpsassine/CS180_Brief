function loadGmailApi() {
  return new Promise(function (resolve, reject) {
    gapi.load("client", function () {
      gapi.client.load("gmail", "v1").then(
        function () {
          resolve();
        },
        function (error) {
          reject(error);
        }
      );
    });
  });
}

export function readInboxEmails(token) {
  // Load the Gmail API
  loadGmailApi()
    .then(function () {
      // Set the access token for the API
      gapi.auth.setToken({ access_token: token });

      // Request a list of messages from the user's inbox
      gapi.client.gmail.users.messages
        .list({
          userId: "me",
          labelIds: ["INBOX"],
          maxResults: 10, // Change this number to get more or fewer emails
        })
        .then(function (response) {
          // Process the list of messages
          var messages = response.result.messages;
          if (messages && messages.length > 0) {
            for (var i = 0; i < messages.length; i++) {
              var messageId = messages[i].id;

              // Get the message details
              gapi.client.gmail.users.messages
                .get({
                  userId: "me",
                  id: messageId,
                })
                .then(function (messageResponse) {
                  // Extract the message data
                  var message = messageResponse.result;
                  var headers = message.payload.headers;
                  var from, subject, date, body;

                  // Get the relevant headers
                  for (var j = 0; j < headers.length; j++) {
                    var header = headers[j];
                    if (header.name === "From") {
                      from = header.value;
                    } else if (header.name === "Subject") {
                      subject = header.value;
                    } else if (header.name === "Date") {
                      var date = new Date(header.value);
                      var now = new Date();
                      var hoursSince =
                        (now - date) / (1000 * 60 * 60); // Calculate the number of hours since the message was sent
                      if (hoursSince <= 24) {
                        // Check if the message was sent within the last 24 hours
                        var formattedDate = date.toISOString();
                      }
                    } else if (header.name === "Body") {
                      var body = header.value;
                    }

                    if (from && subject && formattedDate && body) {
                      const messageDict = {
                        from,
                        subject,
                        date: formattedDate,
                        body,
                      };
                      messagesArray.push(messageDict);
                      from = null;
                      subject = null;
                      formattedDate = null;
                      body = null;
                    }
                  }
                  // Convert the object to JSON and log it to the console
                  const messagesJSON = JSON.stringify(messagesArray);
                  console.log(messagesJSON);
                  fs.writeFile(
                    "raw_emails.json",
                    messagesJSON,
                    (error) => {
                      if (error) {
                        console.error(
                          "Error writing message to file: ",
                          error
                        );
                      } else {
                        console.log("Message written to file");
                      }
                    }
                  );
                });
            }
          } else {
            console.log("No messages found.");
          }
        });
    })
    .catch(function (error) {
      console.error(error);
    });
}
