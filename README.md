# Nagarro-Todo-List_Project (Nodejs)
This application allows users to keep track of tasks. These tasks include a description. Every task can be edited or deleted.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

## Nodejs 
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world

### install Nodejs
  1. Download the Windows installer from https://nodejs.org/en/ .
  2. Run the installer (the .msi file you downloaded in the previous step.)
  3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default            installation settings). (see image here : http://blog.teamtreehouse.com/wp-content/uploads/2015/01/installer.png )
  4. Restart your computer. You won’t be able to run Node.js® until you restart your computer.
  
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


