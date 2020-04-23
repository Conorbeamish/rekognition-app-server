const express = require("express");
const AWS = require("aws-sdk");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const cors = require("cors")

app.use(bodyParser.json())

app.use(cors())

require("dotenv").config()

const port = process.env.port || 5000

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: "eu-west-2"

});

const rekognition = new AWS.Rekognition();

//Routes



app.post("/api", (req, res, next) => {
    const url = req.body.url
    const maxLabels = req.body.maxLabels
    const minConfidence = req.body.ImageminConfidence
    return axios
        .get(url, {
            responseType: 'arraybuffer'
        })
        .then(response => new Buffer.from(response.data, 'base64'))
        .then(encodedResponse => {
            let params = {
                Image: {
                  Bytes: encodedResponse
                },
                "MaxLabels": maxLabels,
                "MinConfidence": minConfidence
             };
            rekognition.detectLabels(params, (err, data) => {
                if (err) { 
                    res.status(400).send({message: "Not a valid image URL"});
                } else {
                    res.send(data);
                }
            })

        })
        .catch(err => {
            res.status(400).send({message: "Not a valid image URL"});
        });
})


app.listen(port, () => console.log(`Connected on port ${port}`))