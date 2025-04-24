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
