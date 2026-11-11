const url="https://dummyjson.com/quotes"

fetch(url).then((res)=>res.json())
    .then((data1)=>{
        for(i=0;i<data1.quotes.length;i++){
            console.log(data1.quotes[i].quote);
        }
    })