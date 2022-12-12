'use strict';

// importing AWS sdk
const AWS = require('aws-sdk');
const config = require("./config.json");

// Instatiating the SES from AWS SDK
let ses = new AWS.SES();

// The function to send SES email message
module.exports.sendMail = (event, context) => {
  let bccEmailAddresses = config.bccEmailAddresses;
  let ccEmailAddresses = config.ccEmailAddresses;
  let toEmailAddresses = config.toEmailAddresses;
  const { name, email, phone, comments } =  event.body.bodyData;
  let bodyCharset = event.body.bodyCharset;
  let subjectdata = event.body.subjectdata;
  let subjectCharset = event.body.subjectCharset;
  let sourceEmail = config.sourceEmail;
  let replyToAddresses = config.replyToAddresses;

// The parameters for sending mail using ses.sendEmail()
  let emailParams = {
    Destination: {
      BccAddresses: bccEmailAddresses,
      CcAddresses: ccEmailAddresses,
      ToAddresses: toEmailAddresses
    },
    Message: {
      Body: {
        Text: {
          Data: `name: ${name}\nemail: ${email}\nphone: ${phone}\ncomments: ${comments}`,
          Charset: bodyCharset
        }
      },
      Subject: {
        Data: subjectdata,
        Charset: subjectCharset
      }
    },
    Source: sourceEmail,
    ReplyToAddresses: replyToAddresses
  };

// the response to send back after email success.
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Mail sent successfully'
    }),
  };

  // The sendEmail function taking the emailParams and sends the email requests.
  ses.sendEmail(emailParams, err => {
    if (err) {
      context.fail(err.stack, 'Internal error!');
    } else {
      context.done(null, response);
    }
  });
};
