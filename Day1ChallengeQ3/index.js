"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "Shaoor Ahmed";
var lowercasename = name.toLowerCase();
console.log("LowerCase:", lowercasename);
var uppercasename = name.toUpperCase();
console.log("UpperCase:", uppercasename);
var titlecasename = name.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
console.log("Title Case:", titlecasename);
