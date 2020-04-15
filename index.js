const express = require("express");
const AWS = require("aws-sdk");
const base64Img = require("base64-img");
const app = express()

require("dotenv").config()

const port = process.env.port || 5000

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: "eu-west-2"

});

const rekognition = new AWS.Rekognition();

const fs = require('fs');
const file = './test-images/test-image.jpg';
const bitmap = fs.readFileSync(file);
const buffer = new Buffer.from(bitmap, 'base64')

let params = {
   Image: {
     Bytes: buffer
   },
   "MaxLabels": 10,
   "MinConfidence": 77
};

rekognition.detectLabels(params, (err, data) => {
    if (err) { 
        console.log(err)
    } else {
        console.log(data);
    }
})


app.listen(port, () => console.log(`Connected on port ${port}`))