# HTTP server - Hello World

Every request -> handler function -> response

The handler function can be asynchronous - it may return a Promise

To start the server on the default port, call Deno.serve() with the handler

Run this example locally using the Deno CLI:

`deno run -N https://docs.deno.com/examples/scripts/http_server.ts`

 deno .\http-server.ts
┏ ⚠️  Deno requests net access to "0.0.0.0:8000".
┠─ Requested by `Deno.listen()` API.
┠─ To see a stack trace for this prompt, set the DENO_TRACE_PERMISSIONS environmental variable.
┠─ Learn more at: https://docs.deno.com/go/--allow-net
┠─ Run again with --allow-net to bypass this prompt.
┗ Allow? [y/n/A] (y = yes, allow; n = no, deny; A = allow all net permissions) >

```
/**
 * @title HTTP Server: Hello world
 * @difficulty intermediate
 * @tags cli, deploy
 * @run -N <url>
 * @resource {https://docs.deno.com/api/deno/~/Deno.serve} Doc: Deno.serve
 * @resource {https://developer.mozilla.org/en-US/docs/Web/API/Response} MDN: Response
 * @playground https://dash.deno.com/playground/example-helloworld
 * @group Network
 *
 * An example of a HTTP server that serves a "Hello World" message.
 */

// HTTP servers need a handler function. This function is called for every
// request that comes in. It must return a `Response`. The handler function can
// be asynchronous (it may return a `Promise`).
function handler(_req: Request): Response {
  return new Response("Hello, World!");
}

// To start the server on the default port, call `Deno.serve` with the handler.
Deno.serve(handler);
```

---

## Deno API

// todo