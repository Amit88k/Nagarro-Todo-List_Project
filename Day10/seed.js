
    var STATUSENUMS={
        ACTIVE : "ACTIVE",
        COMPLETE : "COMPLETE",
        DELETED : "DELETED"
    }

var todos={
    1: {title : "Learn JavaScript", status: STATUSENUMS.ACTIVE},
    2: {title : "Git Tutorial", status: STATUSENUMS.ACTIVE},
    3: {title : "Git Interactive", status: STATUSENUMS.ACTIVE}
}

var next_todo_id=4;

module.exports={
    STATUSENUMS : STATUSENUMS,
    todos:todos,
    next_todo_id:next_todo_id
} 
 
