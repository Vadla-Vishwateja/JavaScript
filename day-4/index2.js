const url="https://dummyjson.com/todos";

fetch(url).then((res)=>res.json())
    .then((res)=>{
        for(i=0;i<res.todos.length;i++){
            console.log(res.todos[i].todo);
        }
    })