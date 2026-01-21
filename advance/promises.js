const promisesOne = new promises(function () {
  //do an async task
  //database, cryptography, network call
  setTimeout(function () {
    console.log(" async task is complete");
  },1000)
})

promisesOne.then(function{
  console.log("promise consume ")
})