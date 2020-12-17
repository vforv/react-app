const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const axios = require("axios");
var { google } = require("googleapis");

app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

// Load the service account key JSON file.
var serviceAccount = require("./service.json");

// Define the required scopes.
var scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/firebase.database",
];

// Authenticate a JWT client with the service account.
var jwtClient = new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    scopes
);

app.get("/token/:gToken", (req, res) => {
    axios
        .get(
            `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${req.params.gToken}`
        )
        .then((user) => {
            console.log(user.data);
            jwtClient.authorize(function (error, tokens) {
                if (error) {
                    console.log(
                        "Error making request to generate access token:",
                        error
                    );
                } else if (tokens.access_token === null) {
                    console.log(
                        "Provided service account does not have permission to generate access tokens"
                    );
                } else {
                    var accessToken = tokens.access_token;
                    res.json({
                        token: accessToken,
                        user: user.data,
                    });
                }
            });
        });
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3000, () => {
    console.log("Listen to port 3000");
});
