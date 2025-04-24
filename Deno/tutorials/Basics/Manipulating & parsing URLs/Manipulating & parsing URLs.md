# Manipulating & parsing URLs

We can create a new object in a variety of ways.

In the most simple case, we can simply just write the whole url

`let url = new URL("https://deno.land/manual/introduction");`

Alternatively, we can pass a relative url which will be resolved to an absolute url

`url = new URL("/manual/introduction", "https://deno.land");`

To get the full url out of an object, we can check the href property

`console.log(url.href);`

We are also able to get various other properties from the url.

```markdown
console.log(url.host); // deno.land
console.log(url.origin); // https://deno.land
console.log(url.pathname); // /manual/introduction
console.log(url.protocol); // https:
```
When parsing a url, we aoften need to read the search parameters

`url = new URL("https://docs.deno.com/api/deno?s=Deno.readFile");`

`console.log(url.searchParams.get("s"));`

We are able to manipulate any of these parameters on the fly.

```markdown
url.host = "deno.com";
url.protocol = "http:";

console.log(url.href); // http://deno.com/api?s=Deno.readFile
```
Run this example locally using the Deno CLI:

`deno run https://docs.deno.com/examples/scripts/url_parsing.ts`

Let us see how many properties / parameters are there

