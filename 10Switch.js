//multiple condition and multiple output use(if else)
//one condition and multiple output use(switch)
//one condition one output use(ternary)

var name = "Eva"

switch(name){
    case 'Aakash':
        console.log('You are user')
        break;
    case 'Eva':
        console.log('You are admin')
        break;
    default:
        console.log('i dont know')
}

switch(new Date().getDay()){
    case 0:
        console.log("iTs Sunday");
        break;
    case 1:
        console.log("iTs Monday");
        break;
    case 3:
        console.log("iTs wednesday");
        break;
    default:
        console.log("wrong input");
}