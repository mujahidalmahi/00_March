// Dom ka code and logic kaa code alag rehna cahiye, it's called separation of concerns

const btn =  document.querySelector("button");
function add(n1, n2) {
    return n1+n2;
}
btn.addEventListener("click", () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    let result = add(num1, num2);
    let li = document.createElement("li");
    li.textContent = result;
    const ul = document.querySelector("ul");
    ul.appendChild(li);
})


// Custom Utilities
    // map -> ek array ke top pain chalta hain, aur us array ke har ek member us map function ke andar aata hain and map function ek neya array return karta hain aur us array main joo bhi map ne kya hoga wahi placed hota hain

const arr = [1,2,3,4];
function myMap(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
}
let ans = myMap(arr, num => num + 2);
console.log(ans);


// Deepclone => watch separate video of sheriyans coding school


// How js works in browser

    // Call stack (Execution Stack)
    // Js single-threated hai -> ek time par ek hi kaam karta hain
    // Jab tum function call karte hoo -> wo stack ke top pe chala jata hain
    // function complete hone kee baad stack se nikal jata hain (pop hoo jata hain)

function a() {
    console.log("a");
}
function b() {
    a();
    console.log("b");
}
function c() {
    b();
    console.log("c");
}
function d() {
    c();
    console.log("d");
}
d();

// Web apis
    // console, setTimeout, setInterval alert prompt
    // js kaa part nehi hoti hain, browser kaa part hain

// Event loops
    // two types of code -> synchronous and asynchronous
setTimeout(() => {
    console.log("hey1");
}, 1000);
setTimeout(() => {
    console.log("hey2");
}, 1400);
setTimeout(() => {
    console.log("hey3");
}, 500);
setTimeout(() => {
    console.log("hey4");
}, 100);
setTimeout(() => {
    console.log("hey5");
}, 2000);