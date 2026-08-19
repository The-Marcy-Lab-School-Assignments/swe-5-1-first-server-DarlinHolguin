# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

---

## Question 1: Server Basics

What does it mean for a server to be "listening"? In your answer, explain the roles of **host**, **port**, and **localhost**.

**Your answer here**:

What it means for a server to be "listening" is that it is waiting for an incoming request on a specific **port**.

The **host** is the address of the machine running the server, **localhost** is a name to be able to identify the users computer. So if you visited `localhost:8080` you would be requesting information from your own machine.

For a port imagine your computer is an apartment complex, every apartment is a port number in your computer. So if you were to request from a port `localHost:8080` you would essentially be knocking on apartment 8080.

---

## Question 2: req and res

In the callback passed to `http.createServer((req, res) => { ... })`, what are `req` and `res`? Give at least one example of a property or method from each, and explain what it does.

**Your answer here**:

In the callback passed to `http.createServer((req, res) => { ... })`, `req` is short for **request** which is what the client sends to the server, it contains information about what is being asked for. For example `req.method` tells you the HTTP method being used (GET, POST, etc.)

`res` is what we send back after the request has been received. It is short for **response** which means its how your server replies to the client. For example `res.end()` sends the response body back and closes the connection.

---

## Question 3: Routing

What is **routing** in the context of a server, and how do you implement it using `node:http`? Why is it important to use `return` after calling `res.end()`?

**Your answer here**:

**Routing** in the context of a server is essentially the process of how a server responds and decides what to do with a request based on its **URL** and **method**.

To implement routing using `node:http`, it would usually be done manually when checking for things like `req.method` & `req.url`.

It is important to use `return` after calling `res.end()` because it stops the code from running, if you weren't to use `return` after calling `res.end()` then other code in the callback could run after the response has been sent. In the case that code in the callback continues to run after the response is sent, it could potentially cause errors like trying to send headers twice, which would crash the server.
