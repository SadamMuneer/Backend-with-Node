var slugify = require("slugify"); // slugify converts the string into slug

let a = slugify("some string"); // some-string
console.log(a);

// if you prefer something other than '-' as separator
let b = slugify("some string", "_"); // some_string
console.log(b);
