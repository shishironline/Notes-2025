# Hello, world!

By tradition, it is the first program in any language ever since it's first appearence in "The C Programming Language" by Denis Ritchie and Brian Kernighan in 1978 which revolutionized the programming ecosphere forever.

`console.log("Hello, World!");`

Run this example locally using the Deno CLI:

deno run https://docs.deno.com/examples/scripts/hello_world.ts

The following is the original excerpt:

Chapter 1 - A Tutorial Introduction

...

1.1 Getting Started 

The only way to learn a new programming language is by writing programs in it. The first
program to write is the same for all languages:
Print the words
hello, world
This is a big hurdle; to leap over it you have to be able to create the program text somewhere,
compile it successfully, load it, run it, and find out where your output went. With these
mechanical details mastered, everything else is comparatively easy.
In C, the program to print ``hello, world'' is
 #include <stdio.h>
 main()
 {
 printf("hello, world\n");
 }

 ---

 [Hello World](https://github.com/denoland/docs/blob/main/examples/scripts/hello_world.ts)

 /**
 * @title Hello world
 * @difficulty beginner
 * @tags cli, deploy, web
 * @run <url>
 * @resource {https://docs.deno.com/runtime/manual/getting_started/installation} Deno: Installation
 * @resource {https://docs.deno.com/runtime/manual/getting_started/setup_your_environment} Manual: Set up your environment
 * @group Basics
 * @sortOrder 0
 * The one and only line in this program will print "Hello, World!" to the console. Run this file with the Deno CLI and the run command.
 */

// Log "Hello, World!" to the console.
console.log("Hello, World!");

