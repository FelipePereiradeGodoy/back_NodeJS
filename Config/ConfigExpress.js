const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

module.exports = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    consign().include('Controllers').into(app);

    return app;
}
