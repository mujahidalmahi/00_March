// localStorage -> aapke browser ke andar data store karna jo ki browser band hone par bhi delete nehi hoga
// localStorage -> store kese kare, data fetch kese kare, remove kese kare, update keyse kare
localStorage.setItem("name", "Mahi"); // store
localStorage.setItem("name", "Iham"); // update
let val = localStorage.getItem("name"); // fetch
localStorage.removeItem("name"); // remove
localStorage.clear();
console.log(val);
// localStorage only saves strings
localStorage.setItem("friends", JSON.stringify(["Akash", "Amit", "Sumit"]));
let arr = JSON.parse(localStorage.getItem("friends"));
console.log(arr);

// sessionStorage -> yee aapka data temporarily store karta haain matlab ki tab band hua aur gaya
// sessionStorage -> same methods as localStorage
sessionStorage.setItem("name", "Mahi"); // store
sessionStorage.setItem("name", "Iham"); // update
let value = sessionStorage.getItem("name"); // fetch
localStorage.removeItem("name");
localStorage.clear();
console.log(value);

// cookies -> yee bhi data store karta hain and aapka data browser ke cookies naam ki property mein save hota hain and yee cookie concept kaam data yaa light data ke liye hota hain
// page reload hone par automatically cookies data server par jayeega
let cook1 = document.cookie = "name: Mujahid Al Mahi";
console.log(cook1);