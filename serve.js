"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1)();
app.use(express_1.static("/srv"));
app.get("/*", function (req, res) {
    res.sendFile("/srv/index.html");
});
app.listen(3000, function () { return console.log("serving ..."); });
