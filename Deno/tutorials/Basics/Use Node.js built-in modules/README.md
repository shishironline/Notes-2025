# Use Node.js built-in modules

Deno supports most built-in Node.js modules natively - you can include them in your code using "node:" specifiers in your imports.

Import the core module 'os' from Node to get opearting system info

`import os from "node:os";`

Use it the same way as in Node:

`console.log("Current architecture is:", os.arch());`

`console.log("Home directory is:", os.homedir());`

Run this example locally using the Deno CLI:

`deno run --allow-env node_built_in.ts`

---

Deno is secure by default, and for any insecure operation, you have to permit it explicitly:

 deno .\node_builtin.ts
Current architecture is: x64
┏ ⚠️  Deno requests sys access to "homedir".
┠─ Requested by `node:os.homedir()` API.
┠─ To see a stack trace for this prompt, set the DENO_TRACE_PERMISSIONS environmental variable.
┠─ Learn more at: https://docs.deno.com/go/--allow-sys
┠─ Run again with --allow-sys to bypass this prompt.
┗ Allow? [y/n/A] (y = yes, allow; n = no, deny; A = allow all sys permissions) >

---

Let us delve deeper into both the 'os' module, environmental variable DENO_TRACE_PREMISSIONS and '--allow-sys' options.

---

## How to set environmental variables in Deno

[Security and permissions](https://docs.deno.com/runtime/fundamentals/security/#system-information)

Deno is secure by default and you have to explicitly grant permission for any insecure operation.

The security model is enforced by the Deno runtime, and is not dependent on the underlying operating system.

### Permissions

By default, access to most system I/O is denied, to enable these operations, you must explicitly grant permission to the Deno runtime, by passing the following flags:

 --allow-read, 
 
 --allow-write, 
 
 --allow-net, 
 
 --allow-env, and 
 
 --allow-run 
 
 flags to the deno command.