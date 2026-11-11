url="http://localhost:3000/student/123"

fetch(url,
    {
        "method":"Delete"
    }).then((res)=>{
        if(res.ok){
            console.log(res.status,res.statusText)
        }else{
            console.log("nothing to delete")
        }
    })