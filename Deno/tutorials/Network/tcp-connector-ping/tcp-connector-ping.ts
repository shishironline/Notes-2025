const encoder = new TextEncoder();

const conn = await Deno.connect({
    hostname: "127.0.0.1",
    port: 8080,
    transport: "tcp",
});


});