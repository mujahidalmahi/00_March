let input = document.querySelectorAll("input");
let form = document.querySelectorAll("form");
let small = document.querySelectorAll("small");

// Reading values from input, textarea, select
form[0].addEventListener("submit", (e) => {
    e.preventDefault();
    if(input[0].value.length <= 2) {
        document.querySelector("small").style.display = "initial";
    } else {
        document.querySelector("small").style.display = "none";
    }
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%-]+\.[a-zA-z]{2,}$/;
    let ans = regex.test("aaa@aaa.c");
    console.log(ans);
})

// Email, Password Validator
form[1].addEventListener("submit", (e) => {
    e.preventDefault();
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%-]+\.[a-zA-z]{2,}$/;
    const password_regex = /^(?=. *\d)(?=. *[A-Z])(?=. *[a-z])(?=. *[^\w\d\s:])([^\s]){8,16}$/;
    let email_ans = email_regex.test(input[3].value);
    let pass_ans = password_regex.test(input[4].value);
    if(!email_ans) {
        small[1].textContent = "Email is incorrect";
    }
    if(!pass_ans) {
        small[2].textContent = "Password is incorrect";
    }
})