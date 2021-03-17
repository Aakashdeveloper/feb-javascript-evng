var palindrome = (data) => {
    var rem,temp,final=0;
    temp=data;
    while(data>0){
        rem = data%10;
        data = parseInt(data/10)
        final = final*10+rem
    }
    if(final ==temp){
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is not a palindrome`)
    }
}

palindrome(12345)
VM168:12 Number 12345 is not a palindrome
undefined
palindrome(1234554321)
VM168:10 Number 1234554321 is palindrome
undefined