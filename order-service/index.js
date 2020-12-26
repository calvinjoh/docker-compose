var express = require('express');
var app = express();
const redis = require('redis');

const host = process.env.REDIS_HOST

const port = process.env.REDIS_PORT

const name = process.env.SERVICE_NAME

//Connecting redis client
var client = redis.createClient(port,host)

client.on('connect', function () {
    console.log("Redis Connected")
});

client.on('error', function (err) {
    console.log(err)
});

app.listen(80, function () {
    console.log(name+' Service Running');
});