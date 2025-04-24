let url = new URL("https://deno.land/manual/introduction");

let url2 = new URL("/manual/introduction", "https://deno.land");

console.log(""); //empty line for better readability
console.log("The full URL is: ");
console.log(url.href); // https://deno.land/manual/introduction
console.log(url2.href); // https://deno.land/manual/introduction
console.log("");    //empty line for better readability

console.log("The URL host is: ");
console.log(url.host);
console.log(url2.host); // deno.land
console.log("");    //empty line for better readability

console.log("The URL origin is: ");
console.log(url.origin);
console.log(url2.origin); // https://deno.land
console.log("");    //empty line for better readability

console.log("The URL pathname is: ");
console.log(url.pathname);
console.log(url2.pathname       ); // /manual/introduction
console.log("");    //empty line for better readability

console.log("The URL protocol is: ");
console.log(url.protocol);
console.log(url2.protocol); // https://deno.land
console.log("");    //empty line for better readability

url = new URL("https://docs.deno.com/api/deno?s=Deno.readFile");
url2 = new URL("/api/deno?s=Deno.readFile", "https://docs.deno.com");

// console.log("The first search parameter is: ");
// console.log(url.searchParams.get("s")); // Deno.readFile   
// console.log("");    //empty line for better readability

// console.log("Is there a search parameter: ");
// console.log(url.searchParams.has("s")); // true
if (url.searchParams.has("s")) {
    console.log("There is a search parameter. It is: ");
    console.log(url.searchParams.get("s")); // Deno.readFile
    }
console.log("");    //empty line for better readability

/*
console.log("What is the second search parameter: ");
console.log(url.searchParams.get("s2")); // null
console.log("");    //empty line for better readability

console.log("Is there any second search parameter: ");
console.log(url.searchParams.has("s2")); // false
console.log("");    //empty line for better readability
*/

if (url2.searchParams.has("s2")) {
    console.log("There is a second search parameter. It is: ");
    console.log(url.searchParams.get("s2")); // Deno.readFile
    }
else {
    console.log("There is no second search parameter.");
    }
console.log("");    //empty line for better readability

url.host = "deno.com";
url.protocol = "http:";

console.log("Changed the URL host and protocol: ");
console.log(url.href); // http://deno.com/api?s=Deno.readFile
console.log("");    //empty line for better readability