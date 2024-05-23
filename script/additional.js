// Check if the current URL matches the unwanted pattern
console.log(window.location.href)
var url2 = window.location.href;

console.log("hi"); 
const url = require('url'); 

const domain = url2.match(/^https?:\/\/([^/]+)/)[1];
console.log(domain); 
console.log(url.domainToUnicode(domain)); 
