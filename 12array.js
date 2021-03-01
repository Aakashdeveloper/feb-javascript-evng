array is collection of similar datatype

var a = [1,2,4,55,66,34,23,56] (array of number)
var b = ['sd','ged','geg','gdg'] (array of string)
var c = [true,false,false,true,true] (array of Boolean)

var d = [5345,"fbf",true,false,"efe","ger",324,"#$",343];

var city = ["London","Paris","NewYork","Delhi"]
undefined
typeof(city)
"object"
city.length
4
city[0]
"London"
city[2]
"NewYork"
typeof(city[2])
"string"
city[city.length-1]
"Delhi"

var city = ["London","Paris","NewYork","Delhi"]
city.push('Amsterdam')
5
city
(5) ["London", "Paris", "NewYork", "Delhi", "Amsterdam"]
city.push('Venice','Boston')
7
city
(7) ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice", "Boston"]
city.pop()
"Boston"

var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice", "Boston"]
city.pop(3)
"Boston"
city.pop(787867)
"Venice"
var city = ["London", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice", "Boston"]
city.shift()
"London"
city.unshift("Hongkong")
7
city
(7) ["Hongkong", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice", "Boston"]

push> add in the end of the array
pop> remove in the last value of the array
unshift> add in the begining of the array
shift > remove in the first value of the array

var city = ["Hongkong", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice", "Boston"]
undefined
city.slice(1)
(6) ["Paris", "NewYork", "Delhi", "Amsterdam", "Venice", "Boston"]
city.slice(2,5)
(3) ["NewYork", "Delhi", "Amsterdam"]
city
(7) ["Hongkong", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice", "Boston"]

var city = ["Hongkong", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice", "Boston"]
city.splice(index,deleteCount,values);

var city = ["Hongkong", "Paris", "NewYork", "Delhi", "Amsterdam", "Venice", "Boston"]
undefined
city.splice(3,0,'Mumbai','Pune')
[]
city
(9) ["Hongkong", "Paris", "NewYork", "Mumbai", "Pune", "Delhi", "Amsterdam", "Venice", "Boston"]
city.splice(2,2)
(2) ["NewYork", "Mumbai"]
city.splice(4,1,'Nice')
["Amsterdam"]
city
(7) ["Hongkong", "Paris", "Pune", "Delhi", "Nice", "Venice", "Boston"]

var a = [1,2,3]
var b = [4,5,6]
undefined
a+b
"1,2,34,5,6"
a.concat(b)
(6) [1, 2, 3, 4, 5, 6]


var myarr = ["London","Paris",[1,2,['audi','Bmw','Merc'],3,4],'Amsterdam','Newyork']
undefined
myarr[0]
"London"
myarr[2]
(5) [1, 2, Array(3), 3, 4]
myarr[2][1]
2
myarr[2][2]
(3) ["audi", "Bmw", "Merc"]
myarr[2][2][1]
"Bmw"

var myarr = ["London","Paris",[1,2,['audi','Bmw','Merc'],3,4],'Amsterdam','Newyork']
undefined
myarr.flat()
(9) ["London", "Paris", 1, 2, Array(3), 3, 4, "Amsterdam", "Newyork"]
myarr.flat(2)
(11) ["London", "Paris", 1, 2, "audi", "Bmw", "Merc", 3, 4, "Amsterdam", "Newyork"]

var myarr = ["London", "Paris",false, 1, 2, "audi", "Bmw",true, 3, "Delhi", "venice"]
myarr.sort()
(11) [1, 2, 3, "Bmw", "Delhi", "London", "Paris", "audi", false, true, "venice"]


var myarr = ["London", "Paris",false, 1, 2, "audi", "Bmw",true, 3, "Delhi", "venice"]
undefined
myarr.indexOf('Bmw')
6
myarr.indexOf('Delhi')
9
myarr.indexOf('Mumbai')
-1
myarr.indexOf('Kia')
-1

var a ="Hi"
undefined
Array.isArray(a)
false
Array.isArray(myarr)
true