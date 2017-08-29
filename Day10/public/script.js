const RESPONSE_DONE=4;
const STATUS_OK=200;
const TODOS_LIST_ID = "todos_list_div";

function add_todo_elements(id, todos_data_json){
    var parents=document.getElementById(id);
    parent.innerText=todos_data_json;
}

function getTodosAJAX(){
    //AJAX -xmlhttprequest object
    //make requests to the server
    //1. Without reloading the webpage
    //2. asynchronously

    var xhr=new XMLHttpRequest(); // xhr-> JS object for making requests to server via js
    xhr.open("GET","/api/todos", true); // definition of xhr object

    xhr.onreadystatechange = function(){
        //Write Code here that needs to be
        //executed after response

        //Has Response been received
        if(xhr.readyState == RESPONSE_DONE){
            //Is Response OK?
            // Status Code == 200

            if(xhr.status == STATUS_OK){
                                // xhr.response // xhr.responseText
                                 console.log(xhr.responseText);
                                 add_todo_elements(TODOS_LIST_ID, xhr.responseText);
                          }

        }
    }
    xhr.send(data=null);
}
