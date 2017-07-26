var express = require('express');
var router = express.Router();
var http = require('http');
var rp = require('request-promise');

module.exports = router;

var weatherOptions = {
    uri: 'https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02',
    json: true
}

var weatherList;

rp(weatherOptions)
    .then(function (weather) {
        weatherList = weather;
        console.log(weather);
    })
    .catch(function (err) {
        console.log(err);
    });

router.get('/', function(req, res, next) {
    res.render('embla', {
        title: 'Test',
        weatherList:weatherList
    });
});