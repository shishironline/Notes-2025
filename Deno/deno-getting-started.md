[Getting Started](https://docs.deno.com/runtime/)



Introduction to Deno
Dino is an open- Source runtime for
JavaScript typescript and web assembly
projects that's built on VA and rust
it's modern it's fast it's flexible and
it's secure by default Dino was created
by Ryan dah the creator of node.js and
in 2018 he gave a famous talk at JS
comyu about regrets that he had about
node and Dino provides solutions to all
of them with the hindsight of experience
Deno's Key Features
and eyes on the future Dino gives us a
runtime that's thought a lot about the
details details like typescript support
by default you can run or import
typescript without installing anything
more than the doo CLI details like
linting formatting and testing Doo is an
all-in-one tool chain that you can use
to get started with your project without
having to use all of your finite time on
Earth having to configure it details
like web standards Dino is built on web
standards that you might recognize like
Fetch and websockets so you don't have
to learn anything new to use them Dino
Security in Deno
is secure by default you have to
specifically enable permissions for
sensitive apis like the network the file
system environment access Dino has you
opt into these permissions like you
would to opt into geolocation in the
browser in this course we're going to
Course Overview and Hands-On Activities
experiment with the latest features of
Dino with Hands-On activities whether
whether you've experimented with Dino in
the past or this is all new to you I
think you're going to like it here

## to initiate a project

deno init my_project

will create a folder my_project with 3 files in it:

1. deno.json - for project configuration

2. main.ts - main code of project

3. main_test.ts - test code of project

Run these commands to get started

  cd my_project

  # Run the program
  deno run main.ts

  # Run the program and watch for file changes
  deno task dev

  # Run the tests
  deno test

