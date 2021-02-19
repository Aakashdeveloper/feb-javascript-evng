= assignment
== compare the data
=== compare data and datatype

var a = 10
var b = '10'

a ==b 
a===b

var a = 10
var b = '10'

a==b
true
a===b
false

10<5
false
10<=4
false
10>=4
true
10=>4
VM276:1 Uncaught SyntaxError: Malformed arrow function parameter list
10!=5
true
10!="10"
false
10!=="10"
true

negation
var a = true
!a
false
var a = false
undefined
!a
true

var a = 1
!a
false
var a = 0
undefined
!a
true

var a = -1
!a
!a
false

truthy > any number excpet 0, +ve or -ve, any string , true
falsy > 0, false, null, undefined

all comparistion operator will return boolean

10 == "10"

10 != "10"   (10 == "10")
10 !== "10"   (10 === "10")