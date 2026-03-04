// dom -> body

// html se element select karna
// text badalna
// html badalna
// css badalna
// attribute
//event listeners

console.log("Hello world");

// Selector Elements: getElementById, getElementByClassName, querySelector, querySelectorAll

let abcd = document.getElementById("abcd");
console.dir(abcd);
let aaa = document.getElementsByClassName("aaa"); // returns HtmlCollection of aaa
console.dir(aaa);
let qs = document.querySelector("h1"); // select the first h1
console.dir(qs);
let qsa = document.querySelectorAll("h1"); // select all the h1
console.dir(qsa);


// Text/Content access: innerText, textContent, innerHTML

qsa[0].innerText = "First Heading index 0";
qsa[1].textContent = "Second Heading index 1";
qsa[2].innerHTML = "<del>Third Heading index 2 </del>";

// Attribute Manipulationm: getAttribute, setAttribute, removeAttribute

console.log(qsa[4].getAttribute("class"));
qsa[3].setAttribute("hidden", "");
qsa[3].removeAttribute("hidden");

// Dynamic DOM Manipulation: createElement, appendChild, removeChild, prepend

let section = document.createElement("section");
let p = document.createElement("p");
p.textContent = "New paragraph was added!";
document.body.prepend(section);
document.querySelector("section").prepend(p);
//p.remove();
document.querySelector("section").removeChild(p);

// Style updates via .style and classList(add,remove,toggle)

qsa[0].style.color = "purple";
qsa[0].style.fontFamily = "Sans-serif";
qsa[0].classList.add("first-heading");
qsa[3].classList.remove("aaa");
qsa[1].classList.toggle("remove-add");// haata dega agar pehle sain hain to warna add kar dega