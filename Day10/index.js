var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var todos_db = require("./seed.js");
console.log(todos_db);

// serve the static assets i public directory
app.use("/", express.static(__dirname + "/public")); // serve html file
app.use(".",bodyParser.urlencoded({extended:false}));
// What all interactions ?
/*
1) get all todos
2) add a todo
3) complete a todo (modifying)
4) delete a todo
 */

// HW : RESTful APIs
// Let's you put some structure to your API

//ENSPOINT - that denpts a noun
// Request MEthod - action you want to take

//1. get all todos
// http://localhost:4000/todos/ GET

// GET /todos
// Return a JSON object of all of these todos

app.use("/",function(req,res,next){
    console.log("Request");
        console.log(req.url);
         console.log(req.method);


         next();

});

//API part of this serever
app.get("/api/todos", function(req, res){
    res.json(todos_db.todos);
})

// ---------*****---------

//2. delete a todo (with some id:id)
// http://localhost:4000/todos/:id DELETE

app.delete("/api/todos/:id", function(req,res){
    // todos_db
    // todos_db.data = {id : {title:, status:}, id:{title:, status}

    var del_id = req.params.id; // accessing id element of the id
    var todo = todos_db.todos[del_id];

    // if this todo doesn't exist
    // then send approaite response to consumer

    if(!todo){
        res.status(400).json({err : "Todo doesn't exists"});
    }
    else{
        todo.status = todos_db.STATUSENUMS.DELETED;
        res.json(todos_db);
    }

});


//3. add a todo
// http://localhost:4000/todos POST
/*
app.post("/api/todos", function(req,res){

    var todo = req.body.todo_title;

    if(!todo || todo=="" || todo.trim()==""){
        res.send(400).json({error: "TODO Title Can't be Empty"});
    }else
    {
        var new_todo_object = {
            title : req.body.todo_title,
            status : todos_db.STATUSENUMS.ACTIVE
        }
        todos_db.todos[todos_db.next_todo_id++] = new_todo_object;
    }

});

// 4. modifying

app.put("/api/todos/:id", function(req, res){
    // todos_db
    var mod_id = req.req.params.id;
    var todo = todos_db.todos[mod_id];
    if(!todo){
        res.status(400).json({error: "Can't modify a todo that doesn;t exist"});
    }
    else{
        // Modify it

        var todo_title = req.body.todo_title;
        if(todo_title && todo_title!="" && todo_title.trim()!=""){
            todo.title = todo_title;
        }

        var todo_status = req.body.todo_status;

        if(todo_status &&
            (todo_status == todos_db.STATUSENUMS.ACTIVE ||
            todo_status == todos_db.STATUSENUMS.COMPLETE)
        ){
            todo.status = todo_status;
        }
        res.json(todos_db.todos);
    }
})
*/
app.listen(4000);