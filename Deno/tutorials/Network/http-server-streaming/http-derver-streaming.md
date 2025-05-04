# [HTTP server: Streaming][def]

an HTTP server which streams a response back to the client.

Set up a variable to store
    a timer ID   and
    the ReadbleStream

When the stream is first created, start an interval timer which will emit a chunk every second containing the current time

If the stream is closed - the client disconnects, cancel the interval timer.

Return a response with the stream as response body.


Call `Deno.serve` with the handler function with the handler.

Run this example locally using the Deno CLI:

deno run -N https://docs.deno.com/examples/scripts/http_server_streaming.ts


[http_server_streaming.ts](https://github.com/denoland/docs/blob/main/examples/scripts/http_server_streaming.ts)

```ts
/**
 * @title HTTP server: Streaming
 * @difficulty intermediate
 * @tags cli, deploy
 * @run -N <url>
 * @resource {/examples/http_server} Example: HTTP Server: Hello World
 * @resource {https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream} MDN: ReadableStream
 * @playground https://dash.deno.com/playground/example-streaming
 * @group Network
 *
 * An example HTTP server that streams a response back to the client.
 */

function handler(_req: Request): Response {
  // Set up a variable to store a timer ID, and the ReadableStream.
  let timer: number | undefined = undefined;
  const body = new ReadableStream({
    // When the stream is first created, start an interval that will emit a
    // chunk every second containing the current time.
    start(controller) {
      timer = setInterval(() => {
        const message = `It is ${new Date().toISOString()}\n`;
        controller.enqueue(new TextEncoder().encode(message));
      }, 1000);
    },
    // If the stream is closed (the client disconnects), cancel the interval.
    cancel() {
      if (timer !== undefined) {
        clearInterval(timer);
      }
    },
  });

  // Return a response with the stream as the body.
  return new Response(body, {
    headers: {
      "content-type": "text/plain",
      "x-content-type-options": "nosniff",
    },
  });
}

// To start the server on the default port, call `Deno.serve` with the handler.
Deno.serve(handler);
```





[def]: https://docs.deno.com/examples/http_server_streaming/