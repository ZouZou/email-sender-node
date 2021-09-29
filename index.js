require('dotenv').config();
const express = require('express');
const app = express();

// error handlers
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// mail routes
const mails = require("./routes/email");

// static assets
app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use routes
app.use("/api/v1", mails);

// use middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const PORT = process.env.PORT || 5000;
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

// start server
start();