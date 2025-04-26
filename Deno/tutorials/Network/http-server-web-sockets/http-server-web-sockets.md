# [HTTP server:WebSockets](https://docs.deno.com/examples/http_server_websocket/)

A http server which handles websocket requests

Call `Deno.serve` with the handler to start the server on the default port.

---
Deno.serve
function Deno.serve
unstable
Overload 1
serve(handler: ServeHandler<Deno.NetAddr>): HttpServer<Deno.NetAddr>
Serves HTTP requests with the given handler.

The below example serves with the port 8000 on hostname "127.0.0.1".

Deno.serve((_req) => new Response("Hello, world"));

---


First, we verify if the client is negotiating to upgrade to websockets.

If not, we can give a dtstud of 501 to specify we don't support plain http 
requests.

[501 Not Implemented](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/501)

The HTTP 501 Not Implemented server error response status code means that the server does not support the functionality required to fulfill the request.

We can then upgrade the request to a websocket.

We now have an access to a standard websocket object.

Handle the **'open'** event

We can also handle messages in a similar way.

Set up a simple ping / pong example.

Lastly we return the response created from upgradeWebSocket

Run this example locally using the Deno CLI:

`deno run -N https://docs.deno.com/examples/scripts/http_server_websocket.ts`

---

[http_server_websocket.ts](https://github.com/denoland/docs/blob/main/examples/scripts/http_server_websocket.ts)

```
/**
 * @title HTTP server: WebSockets
 * @difficulty intermediate
 * @tags cli, deploy
 * @run -N <url>
 * @resource {/examples/http_server} Example: HTTP Server: Hello World
 * @resource {https://developer.mozilla.org/en-US/docs/Web/API/WebSocket} MDN: WebSocket
 * @group Network
 *
 * An example of a HTTP server that handles websocket requests.
 */

// To start the server on the default port, call `Deno.serve` with the handler.
Deno.serve((req) => {
  // First, we verify if the client is negotiating to upgrade to websockets.
  // If not, we can give a status of 501 to specify we don't support plain
  // http requests.
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 });
  }

  // We can then upgrade the request to a websocket
  const { socket, response } = Deno.upgradeWebSocket(req);

  // We now have access to a standard websocket object.
  // Let's handle the "open" event
  socket.addEventListener("open", () => {
    console.log("a client connected!");
  });

  // We can also handle messages in a similar way. Here we set up
  // a simple ping / pong example.
  socket.addEventListener("message", (event) => {
    if (event.data === "ping") {
      socket.send("pong");
    }
  });

  // Lastly we return the response created from upgradeWebSocket.
  return response;
});

```