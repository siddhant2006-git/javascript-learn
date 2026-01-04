
function saymyname(){
    console.log("s");
console.log("d");
console.log("i");
console.log("e");
}
saymyname()



//(number1or number line is parameters)

//function addtwonumber(number1, number2){

  // console.log( number1+ number2) 
//addtwonumber(3,2)  // argument


function addtwonumber(number1, number2){
    let result=number1+number2
   
   // console.log("siddhant")
     return result
}

const result= addtwonumber(33,37)

console.log("result",result)


function loginuser(usename=0){
    if(!usename===undefined);{
        console.log("please enter the no");
            return
        

    }
    return '${username} just logged in'

}
loginuser("siddhant")
console.log(loginuser)     
function price(val1,val2,...num1) {     // ...=rest operator
     return num1
    
}

 console.log(price(200,300,400))


 // object pass in function

const user={
    username:"siddhantbhatnagar",
    price:199,

 }
function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `)


}
handelobject(user)

// array pass through the function


arrays=[33,4884,34989393,39839]

function newsecondvalue(newarray){
    return arrays[1]

}
console.log(newsecondvalue(arrays))




