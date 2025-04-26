function handler(req: Request): Response {
  return new Response("Hello World", {
    headers: { "content-type": "text/plain" },
  });
}

Deno.serve(handler, { port: 8000 });
console.log("Server running on http://localhost:8000/");    