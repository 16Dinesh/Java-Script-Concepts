let todo = [];
let req = prompt("Enter your Request");
while (true){
    if (req == "quit"){
        console.log("Exited from Todo app");
        break;
    }
    if (req == "list"){
        console.log("-----------");
        for (i=0 ; i < todo.length ; i++){
            console.log(i , todo[i])
        }
        console.log("-----------")
    }else if ( req == "add"){
        let task = prompt("what task needed to add");
        todo.push(task);
        console.log("task is added");
    }else if ( req == 'delete'){
        let idx = prompt("what index needed to be deleted");
        idx = parseInt(idx)
        todo.splice(idx , 1);
        console.log("task is deleted");
    }else {
       console.log("wrong request");
    }
    req = prompt("enter your request ")
}


