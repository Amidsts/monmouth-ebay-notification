'use strict'

const express = require("express")
const app = express()

const dotenv = require("dotenv")
const config = require("./config.json")
const constants = require("./constant.js")
const EventNotificationSDK = require("event-notification-nodejs-sdk")

const environment = "PRODUCTION"

app.use(express.json())


dotenv.config()
const port = process.env.PORT


app.post('/webhook', (req, res) => {
    EventNotificationSDK.process(
        req.body,
        req.headers[constants.X_EBAY_SIGNATURE],
        config,
        environment
    ).then((responseCode) => {

        if (responseCode === constants.HTTP_STATUS_CODE.NO_CONTENT) {

            console.log(`Message processed successfully for: \n- Topic: ${req.body.metadata.topic} \n- NotificationId: ${req.body.notification.notificationId}\n`);

        } else if (responseCode === constants.HTTP_STATUS_CODE.PRECONDITION_FAILED) {

            console.error(`Signature mismatch for: \n- Payload: ${JSON.stringify(req.body)} \n- Signature: ${req.headers[constants.X_EBAY_SIGNATURE]}\n`);

        }

        res.status(responseCode).send();

    }).catch((ex) => {

        console.error(`Signature validation processing failure: ${ex}\n`);

        res.status(constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send();

    });
});



app.get('/webhook', (req, res) => {

    if (req.query.challenge_code) {
        try {

            const challengeResponse = EventNotificationSDK.validateEndpoint(
                req.query.challenge_code,
                config);

            res.status(200).send({
                challengeResponse: challengeResponse
            });
            
        } catch (e) {

            // eslint-disable-next-line no-console
            console.error(`Endpoint validation failure: ${e}`);
            res.status(constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send();

        }
    } else {

        res.status(constants.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send();

    }
});

app.get("/", (req, res) => {
    res.status(200).send({message :"hello world"})
})

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening at http://localhost:${port}`);
});