var a = 10
var b = 20
a+b
30

function
method
arrow
IFFI
Generator
//////////

function------

function add(a,b){
    return a+b
}

add(1,2)


function add(a,b){
    return a+b
}
undefined
add(1,2)
3
add(4,5)
9
add('a','b')
"ab"

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `${userInput} is even`
    }else{
        out = `${userInput} is odd`
    }
    return out
}
undefined
isEven(10)
"10 is even"
isEven(9)
"9 is odd"

//////method///////
var add = function(a,b){
    return a+b
}

add(1,2);

///arrow/////
let add = (a,b) => {return a+b}

add(1,2)