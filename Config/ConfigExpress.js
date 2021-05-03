import express from 'express';
import bodyParser from 'body-parser';
import consign from 'consign';

module.exports = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    consign().include('Controllers').into(app);

    return app;
}
