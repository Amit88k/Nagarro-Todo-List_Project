# Todo-List_Project (Nodejs)
This App lets you to organise your work in more efficient manner. By using this app you can add a todo, delete a todo or mark it as a complete. These tasks include a description. Every task can be edited or deleted. 

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

## Nodejs 
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world (https://nodejs.org/en/).

### install Nodejs
  1. Download the Windows installer from https://nodejs.org/en/ .
  2. Run the installer (the .msi file you downloaded in the previous step.)
  3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default            installation settings). (see image here : http://blog.teamtreehouse.com/wp-content/uploads/2015/01/installer.png )
  4. Restart your computer. You won’t be able to run Node.js® until you restart your computer.
  
### npm : https://www.npmjs.com/ 
  
## Test it!
Make sure you have Node and NPM installed by running simple commands to see what version of each is installed and to run a simple test program:

### Test Node
To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool, and type node -v. This should print a version number, so you’ll see something like this v0.10.35.
### Test NPM
To see if NPM is installed, type npm -v in Terminal. This should print NPM’s version number so you’ll see something like this 1.4.28
### Create a test file and run it. 
A simple way to test that node.js works is to create a JavaScript file: name it hello.js, and just add the code console.log('Node is installed!');. To run the code simply open your command line program, navigate to the folder where you save the file and type node hello.js. This will start Node and run the code in the hello.js file. You should see the output Node is installed!.

### express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications (https://expressjs.com/).
#### install express : $ npm install express --save
#### API : var express = require('express')

### body-parser
Parse incoming request bodies in a middleware before your handlers, available under the req.body property. Learn about the anatomy of an HTTP transaction in Node.js. This does not handle multipart bodies, due to their complex and typically large nature (https://www.npmjs.com/package/body-parser). 
#### install body-parser : $ npm install body-parser
#### API : var bodyParser = require('body-parser')

#### res-error
This package adds a super flexible res.error() method to express that logs an error and sends the correct JSON response to the client (https://www.npmjs.com/package/res-error).
#### install : $ install res-error --save

#### nodemon
Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development (https://nodemon.io/).
#### install : npm install -g nodemon

## Installing
run the appa using the command : node index.js or nodemon index.js 
run the app in browser as : localhost:3000

## Built With
* [JavaScript](https://www.javascript.com/) - full-fledged dynamic programming language
* [Nodejs](https://nodejs.org/en/) - The web framework used
* [Express](https://expressjs.com/) - Node.js web application framework
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. 
* [HTML](http://html.com/) - standard markup language for creating web pages and web applications.
* [AJAX](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) - a set of Web development techniques using many Web technologies on the client side to create asynchronous Web applications.

## Steps to Run the App
1. Download the soure code
2. inside nagarro-Todo-List_Project-master 
	got to -> Nagarro-Todo-List_Project-master -> App 

3. then follow the following commands in terminal 
	-> install npm 
	-> node index.js
4. now in browser -> localhost:3000
## Authors
* [Amit Khandelwal](https://github.com/Amit88k)

## Acknowledgments

* Thanks to [Ankit Malik](https://github.com/malikankit) sir for his guidance.







