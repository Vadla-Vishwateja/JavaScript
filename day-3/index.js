console.log("start");

setTimeout(() => {
    console.log("first callback")
}, 3000);

for (i=0; i <=50000; i++) {
    console.log("i")
}
setTimeout(() => {
    console.log("Second callback")
}, 1000);
