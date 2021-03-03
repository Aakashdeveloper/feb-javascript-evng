RegExp
regular expression

var a = "hi";

^$

var a = "hi";
undefined
a.match("^([a-z])$")
null
a.match("^([a-z]{2})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]
var a = "hii";
undefined
a.match("^([a-z]{2})$")
null
a.match("^([a-z]{3})$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]

a.match("^([a-z]+)$")

var a = "Hii"

var a = "Hii"
undefined
a.match("^([a-z]+)$")
null
a.match("^([A-Za-z]+)$")
(2) ["Hii", "Hii", index: 0, input: "Hii", groups: undefined]
var a = "Hii0"
undefined
a.match("^([A-Za-z]+)$")
null
a.match("^([A-Za-z0-9]+)$")
(2) ["Hii0", "Hii0", index: 0, input: "Hii0", groups: undefined]


var a = 8757483928
a.match("^([0-9]{10})$")
VM128:2 Uncaught TypeError: a.match is not a function
    at <anonymous>:2:3
(anonymous) @ VM128:2
a.toString()
"8757483928"
a.toString().match("^([0-9]{10})$")
(2) ["8757483928", "8757483928", index: 0, input: "8757483928", groups: undefined]

var email = "a@a.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "@a.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null

var str ="This is hat hot het heet heej"
var ptt = /h.t/g;
undefined
str.match(ptt)
(3) ["hat", "hot", "het"]
var str ="This is hat hot het heet heej"
var ptt = /h..t/g;
undefined
str.match(ptt)
["heet"]

