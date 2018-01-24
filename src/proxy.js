var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
import {API_URL} from '../src/config';

app.use(cors());
app.use(bodyParser.json());

app.get('/auth', function(req, res, next) {
    var authRequest = function() {
        let username = req.body.username;
        let password = req.body.password;
        let options = {
            url : API_URL,
            headers: {
                
            }
        }
    }
})