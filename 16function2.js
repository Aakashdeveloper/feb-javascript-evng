/*function sayHi(){
    console.log("Hiii")
}

sayHi()*/

(function(){
    console.log("hii")
}())



function loop(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}
loop(5)
0
1
2
3
4


function * loop(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}

var data = loop(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}