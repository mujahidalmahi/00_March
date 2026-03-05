// browser main page par koi bhi harkat karo event raise hoo jayega
// kuch screen par ho aur aapko reaction dena hoo to use waqt aapko event handle karna ana cahiye
// event matlab hota hai koi action hua
// event listener ka matlab hua koi action kaa reaction dena

let h1 = document.querySelectorAll("h1");
let p = document.querySelectorAll("p");
let input = document.querySelectorAll("input");
let select = document.querySelectorAll("select");
let device = document.querySelector("#device");
let btn = document.querySelector("#btn");
let form = document.querySelectorAll("form");
let div = document.querySelectorAll("div");
let ul = document.querySelector("ul");

// Event Binding: addEventListener, removeEventListener
h1[0].addEventListener("click", () => {
    h1[0].style.color = "Red";
});
let mouseover = () => {
    p[0].style.backgroundColor = "Grey";
};
p[0].addEventListener("mouseover", mouseover);
p[0].addEventListener("dblclick", () => {
    p[0].style.color = "purple";
});
p[0].removeEventListener("mouseover", mouseover);

// Common Events: click, input, change, submit, mouseover, keyup
h1[0].addEventListener("click", () => {
    h1[0].style.fontFamily = "Sans-serif";
})
input[0].addEventListener("input", (e) => {
    if(e.data !== null) {
        console.log("Typed: " , e.data);
    }
})
// change event tab chalta hain jab input select yaa textarea main koi change hojaaye
select[0].addEventListener("change", (e) => {
    device.textContent =  `${e.target.value} selected`;
})
window.addEventListener("keydown", (e) => {
    if(e.key === " ") {
        h1[1].innerText = "SPACE";
    } else {
        h1[1].innerText += `${e.key}`;
    }
})
btn.addEventListener("click", () => {
    input[1].click();
})
input[1].addEventListener("change", (e) => {
    // if(e.target.files[0]) {
    //     btn.innerText = `${e.target.files[0].name}`;
    // }
    btn.innerText = `${e.target.files[0].name}`;
})
form[0].addEventListener("submit", (e) => {
    e.preventDefault();
    p[1].innerHTML = input[2].value;
    p[2].innerHTML = input[3].value;
    p[3].innerHTML = input[4].value;
    p[4].innerHTML = input[5].value;
})
p[0].addEventListener("mouseover", () => {
    p[0].style.backgroundColor = "grey";
})
p[0].addEventListener("mouseout", () => {
    p[0].style.backgroundColor = "white";
})
window.addEventListener("mousemove", (e) => {
    div[3].style.top = `${e.clientY}px`;
    div[3].style.left = `${e.clientX}px`;
})

// Event Objects: target, type, preventDefault()
// The element which was evented, type is which event was occured, preventDefault() is used to pause default behaviour of html

// Event Bubbling and Capturing
// jispe event aayega agar uspar listener nehi hua to humara event uske parent par listener dhundega aur aisa karte karte upar ki taraf move karega
document.querySelector("#nav").addEventListener("click", () => {
    console.log("clicked"); // button main bhi kaam karega
})
document.querySelector(".d").addEventListener("click", () => {
    console.log("button clicked");
})
document.querySelector(".a").addEventListener("click", () => {
    console.log("a clicked");
}, true)
document.querySelector(".b").addEventListener("click", () => {
    console.log("b clicked");
})
document.querySelector(".c").addEventListener("click", () => {
    console.log("c clicked");
}, true // capture phase
)
// jab bhi aap click karte hoo yaa koi bhi event raise karte hoon to apka jo hain woska event flow do phases main chalta hain: 
// phase 01(capture phase): event top level element sain nechee ki taraf aayega
// phase 02(bubbling phase): event rasied element see parent ki taraf jaayega
// aur pehle phase 1 hoti hain
// humesha phase 1 hi pehle hoti hain par vo by default off rahti hain, agar hum usey on kar dein to pehle phase 1 ka ans milega

// Event Delegation: 
ul.addEventListener("click", (e) => {
    e.target.style.textDecoration = "line-through";
}); // parent's event will be provided to the childs

// Live Character Counter
input[7].addEventListener("input", () => {
    document.querySelector("span").innerText = input[7].value.length;
})