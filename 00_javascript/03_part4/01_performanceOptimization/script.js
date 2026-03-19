// Debouncing ---> aap koi action kar rahe ho and aaap ye nehi chahte har action par kuch ho, jab bhi mere actions ke beech main koi specific gap aajayee to fir reaction perform

function debounce(fnc, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...args);
        }, delay);
    }
}
let input = document.querySelector("input");
input.addEventListener("input", debounce(() => {
    console.log("hey");
}, 2000));

// debounce -> ek delay bataaoge tum utna delay jab bhi aayega action kaa reaction milega


// throttle -> Interval par chalunga, action agar hota raha and aapne ek interval bataya tio utne interval main aapka event chalega
function throttle(fnc, delay) {
    let timer = 0;
    return function(...args) {
        let now = Date.now();
        if(now - timer >= delay) {
            timer = now;
            fnc(...args);
        }
    }
}

input.addEventListener("input", throttle(() => {
    console.log("throttle");
}, 2000));


// lazy loading -> load only the things which are visible within the viewing area

let imgs = document.querySelectorAll("img");
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if(entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    })
}, {root: null, threshold: 0.1});
imgs.forEach((img) => {
    observer.observe(img);
})


// Code Spliting with Dynamic Import
const btn = document.querySelector("#btn");
btn.addEventListener("click", async () => {
    let heavyFunction = await import("./heavy.js");
    heavyFunction.veryHeavy();
})

// Avoiding Unnecessary reflows and repaints
const ul = document.querySelector("ul");
const space = document.createDocumentFragment();
for(let i = 0; i < 100; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    space.appendChild(li);
};
ul.appendChild(space);

// Memory leaks: timers, event listeners
let count = 0;
const int = setInterval(() => {
    if(count < 10) {
        count++;
        console.log(count);
    } else {
        clearInterval(int);
    }
}, 2000);