hconst accountId = 14435;
let accountemail = "siddhantbhatnagar11@gmail.com";
let accountpassword = "2233";
let accountcity = "jaipur";

// accountId = 2  // ❌ not allowed (const cannot be reassigned)

console.log(accountId);

// ✅ fixed variable name (no spaces)
accountemail = "siddhant@123";
accountpassword = "6678877";
accountcity = "sambhal";

// ✅ use an object for a clean console.table output
console.table([
  { accountId, accountemail, accountpassword, accountcity }
]);
