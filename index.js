"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/revrec", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.reports
      ? req.body.result.parameters.reports
      : "Seems like some problem. Speak again.";
  return res.json({
    
      "conversationToken": "",
      "expectUserResponse": true,
      "expectedInputs": [
          {
              "inputPrompt": {
                  "richInitialPrompt": {
                      "items": [
                          {
                              "simpleResponse": {
                                  "textToSpeech": "Howdy! I can tell you fun facts about almost any number, like 42. What do you have in mind?",
                                  "displayText": "Howdy! I can tell you fun facts about almost any number. What do you have in mind?"
                              }
                          }
                      ],
                      "suggestions": []
                  }
              },
              "possibleIntents": [
                  {
                      "intent": "actions.intent.TEXT"
                  }
              ]
          }
      ]
  
  
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
