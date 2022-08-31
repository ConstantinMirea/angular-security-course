

import * as express from 'express';
import {Application} from "express";
import * as fs from 'fs';
import * as https from 'https';
import {readAllLessons} from "./read-all-lessons.route";
import {createUser} from "./create-user.route";
import {getUser} from "./get-user.route";
import {logout} from "./logout.route";
import {login} from "./login.route";
<<<<<<< HEAD
import { retrievedUserIdFromRequest } from './get-user.middleware';
=======
import { retrieveUserIdFromRequest } from './get-user.middleware';
import {checkIfAuthenticated} from "./auth.middleware"
import { checkCsrfToken } from './csrf.middleware';
>>>>>>> 26188b3ae2a32c9e6aa39afe2cf513235f7835a8
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app: Application = express();
app.use(retrievedUserIdFromRequest)
app.use(cookieParser());
app.use(retrieveUserIdFromRequest);
app.use(bodyParser.json());


const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'secure', type: Boolean,  defaultOption: true },
];

const options = commandLineArgs(optionDefinitions);


// REST API

//checkIfAuthenticated, this does not look good rechek it
app.route('/api/lessons')
    .get(readAllLessons);

app.route('/api/signup')
    .post(createUser);

app.route('/api/user')
    .get(getUser);

app.route('/api/logout')
    .post(checkCsrfToken, logout);

app.route('/api/login')
    .post(login);


if (options.secure) {

    const httpsServer = https.createServer({
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    }, app);

    // launch an HTTPS Server. Note: this does NOT mean that the application is secure
    httpsServer.listen(9000, () => console.log("HTTPS Secure Server running at https://10.0.0.28:" + httpsServer.address().port));

}
else {

    // launch an HTTP Server
    const httpServer = app.listen(9000,"10.0.0.28", () => {
        console.log("HTTP Server running at https://10.0.0.28:" + httpServer.address().port);
    });

}








