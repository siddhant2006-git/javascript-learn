// stack(primitive), heap(non - primitive)

let mychannel = "siddhant ";
let another = mychannel;
another = "krish";
console.log(another);
console.log(mychannel);

let userone = {
  email: "user@gmail.com",
  bank: "user@ybl",
};
let usertwo = userone;

usertwo.email = "siddhant@123";

console.log(userone);
console.log(usertwo);

//consolelog('hello my name is ${name} and my repo count is ${surname}');
