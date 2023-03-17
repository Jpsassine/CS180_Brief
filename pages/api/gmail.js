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
                  var from, subject, date;

                  // Get the relevant headers
                  for (var j = 0; j < headers.length; j++) {
                    var header = headers[j];
                    if (header.name === "From") {
                      from = header.value;
                    } else if (header.name === "Subject") {
                      subject = header.value;
                    } else if (header.name === "Date") {
                      date = header.value;
                    }
                  }

                  // Display the email data
                  console.log("From:", from);
                  console.log("Subject:", subject);
                  console.log("Date:", date);
                  console.log("---");
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
