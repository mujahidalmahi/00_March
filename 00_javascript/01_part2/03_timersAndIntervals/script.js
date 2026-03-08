// setTimeout and clearTimeout; one execution
let tm = setTimeout(()=>{
    console.log("SetTimer");
}, 5000);
clearTimeout(tm);

// setInterval and clearInterval; multiple execution
let int = setInterval(()=>{
    console.log("Set Interval");
}, 2000);
clearInterval(int);
let count = 10;
let inte = setInterval(()=> {
    if(count >= 2) {
        count--;
        console.log(count);
    } else {
        clearInterval(inte);
    }
},2000)