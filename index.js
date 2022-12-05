let useIdentity = require("./information.js");
let cowsay = require("cowsay");

console.log(cowsay.say({
    text : useIdentity.identity.myName + " " + useIdentity.identity.myCampus,
    e : "oO",
    T: "U"
}));