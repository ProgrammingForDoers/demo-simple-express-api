var express = require('express')
var app = express()

app.use(express.json())

app.get("/", async function(request, response) {
  /**
   * Route: / ("Root Route")
   *
   * Response: Text, Static (will be the same every time)
   *
   * URL Example: http://localhost:3000
   */

  response.end("Welcome to my API")
})

app.get("/hello", async function(request, response) {
  /**
   * Route: /hello
   *
   * Response: Text, Static (will be the same every time)
   *
   * URL Example: http://localhost:3000/hello
   */

  response.end("Hello. How are you?")
})

app.get("/john-greeting", async function(request, response) {
  /**
   * Route: /john-greeting
   *
   * Response: Text, Static (will be the same every time)
   *
   * URL Example: http://localhost:3000/john-greeting
   */

  var name = "John"
  var greeting = "Hello, " + name + ", how are you?"
  response.end(greeting)
})

app.get("/random-greeting", async function(request, response) {
  /**
   * Route: /random-greeting
   *
   * Response: Text, Dynamic
   *
   * URL Example: http://localhost:3000/random-greeting
   */

  var names = ["John", "Jane", "Chad"]
  var randomIndex = Math.floor(Math.random() * 3)
  var name = names[randomIndex]

  var greeting = "Hello, " + name + ", how are you?"
  response.end(greeting)
})

app.get("/users/:userId", async function(request, response) {
  /**
   * This endpoint shows how to access URL Path Parameters
   *
   * Route: /users/:userId
   *
   * Response: Text, Dynamic
   *
   * URL Example: http://localhost:3000/users/1
   *
   * # GET Request Object Structure w/ Path Params:
   * var request = {
   *   query: {
   *     userId: "1",
   *   }
   * }
   */
  var id = request.params.userId

  var greeting = "Hello, your user ID is: " + id
  response.end(greeting)
})

app.get("/get-req-greeting", async function(request, response) {
  /**
   * This endpoint shows how to access URL Query Parameters
   *
   * Route: /get-req-greeting
   *
   * Response: Text, Dynamic
   *
   * URL Example: http://localhost:3000/get-req-greeting?name=John&age=25&extra-stuff=Meow
   *
   * # GET Request Object Structure:
   * var request = {
   *   query: {
   *     name: "John",
   *     age: 25,
   *     extra-stuff: "Meow",
   *   }
   * }
   */

  var name = request.query["name"]
  var age = request.query["age"]
  var extraStuff = request.query["extra-stuff"]

  var greeting = "Hello, " + name + ", who is " + age + "years old. How are you? " + extraStuff
  response.end(greeting)
})

app.post("/users", async function(request, response) {
  /**
   * This endpoint shows how to access JSON data in the POST Request body
   *
   * NOTE: This will not work unless requests contain the
   * Content-Type header configured as follows:
   *   "Content-Type: application/json"
   *
   * Route: /users
   *
   * Response: Text, Dynamic
   *
   * URL Example: http://localhost:3000/users
   *
   * # POST Request Object Structure:
   * # Assuming JSON body: { name: "John", age: 25, extraStuff: "Meow" }
   * var request = {
   *   body: {
   *     name: "John",
   *     age: 25,
   *     extraStuff: "Meow",
   *   }
   * }
   */

  var name = request.body["name"]
  var age = request.body["age"]
  var extraStuff = request.body["extra-stuff"]

  var greeting = "Hello, " + name + ", who is " + age + "years old. How are you? " + extraStuff
  response.end(greeting)
})

app.listen(3000, function() {
  console.log("App listening on port 3000")
})

module.exports = app
