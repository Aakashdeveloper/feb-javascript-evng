var city = "london"
undefined
city.toUpperCase()
"LONDON"
var city = "AmsteRDAM"
undefined
city.toLowerCase()
"amsterdam"

var city = "london"
undefined
city.length
6
city[0]
"l"
city[1]
"o"
city.charAt(0)
"l"
city.charAt(1)
"o"

var name = "   Aakash  "
undefined
name.length
11
name.trim()
"Aakash"
var name = "   Aakash . "
undefined
name.trim()
"Aakash ."


var a = "John"
var b = "John"

a ==b
true
var a = "John"
var b = "john"

a ==b
false
a.toLowerCase() == b.toLowerCase()
true

var city = "aMstEDam"

undefined
city.charAt(0)
"a"
city.charAt(0).toUpperCase()
"A"
city.slice(1)
"MstEDam"
city.slice(2)
"stEDam"
city.slice(3)
"tEDam"


var city = "aMstErDam"
undefined
city.charAt(0).toUpperCase()
"A"
city.slice(1).toLowerCase()
"mstedam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

var city = "Amsterdam"
var city = "Amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2)
"sterdam"
city.slice(2,5)
"ste"
city.slice(1,4)
"mst"
city.slice(-1)
"m"
city.slice(-2)
"am"
city.slice(4,-2)
"erd"
city.slice(-2,4)
""
city.slice(-2,-1)
"a"
city.slice(-4,-1)
"rda"
city.slice(-1,-4)
""


var a = "i am learning javascript"
a.replace('javascript','js')
"i am learning js"
var a = "javascript i am learning javascript"
a.replace('javascript','js')
"js i am learning javascript"
var a = "javascript i am learning javascript"
a.replace(/javascript/g,'js')
"js i am learning js"
var name = "   Aakash . "
undefined
name.replace(/ /g,'')
"Aakash."
name.replace(/ /g,'').toUpperCase()
"AAKASH."

var url = "https://github.com/Aakashdeveloper/Angular5-Seed"
undefined
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "Angular5-Seed"]0: "https:"1: ""2: "github.com"3: "Aakashdeveloper"4: "Angular5-Seed"length: 5__proto__: Array(0)
url.split('/')[4]
"Angular5-Seed"
var out = url.split('/')
undefined
out[out.length-1]
"Angular5-Seed"

var a = "javascript"
undefined
a.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

var a = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
undefined
a.toString()
"j,a,v,a,s,c,r,i,p,t"
a.toString().replace(/,/,'')
"ja,v,a,s,c,r,i,p,t"
a.toString().replace(/,/g,'')
"javascript"