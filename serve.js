"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1)();
app.use(express_1.static(path_1.join(__dirname, '/srv')));
app.get('/*', function (req, res) {
    res.sendFile(path_1.join(__dirname, '/srv', 'index.html'));
});
app.listen(3000, function () { return console.log('serving ...'); });
