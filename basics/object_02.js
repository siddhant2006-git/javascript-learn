//const tinderuser=new Object() // singleton object hai
const tinderuser2={}   // not singleton object 


console.log(tinderuser2);

tinderuser2.id="27734@saw",
tinderuser2.name="siddhant",
tinderuser2.isloggin=false

const regularuser={
    email:"siddhant@123",
    fullname:{
        userfullname:{
            firstname:"siddhant",
            lastname:"bhatnagar"

        }
    }
}
console.log(regularuser.fullname.userfullname.lastname);

const obj1= {1:"sidd",2:"bhatnagar"}
const obj2= {3: "bro",4: "siddhant"}

//const obj3={obj1,obj2}

// assign operator-is used to copy a target object
//{}- target of object

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);

const users=[
    {
        id:1,
        Email:"siddhant bhatmagar@123"

    }
]

console.log(users[0].Email);
console.log(tinderuser2);
console.log(Object.keys(tinderuser2))


// hasOwnPropert-used to check the value which are present in program
console.log(tinderuser2.hasOwnProperty("isloggin"));

// courseinstructor

// object destructure object  - to apply to variable to rename themselves

const couse ={
    coursename: "js in hindi",
    price:"999",
    courseinstrutor: "siddhant",
    
   // const {courseinstructor}= course,
   // console.log()


}

// json 



