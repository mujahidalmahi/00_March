// this keyword special keyword hai, kiyoki jaise ki baaki sare keyword ki value ya wonka nature same rehta hainm this ki value yaa nature baadal jaata hai iss baaat sain ki aap use kaha use kar rehe hoon

// this in global scope, function, method, event handler, class::::
    // global scope ->
    {
        console.log(this);
        // we get window, window hai pradhan mantri
    }
    // function scope ->
    {
        function abcd () {
            console.log(this);
            // window as well
        }
        abcd();
    }
    // method ->
    {
        let obj = {
            name: "mahi",
            sayName: function () {
                console.log(this);
                // object
            }
        }
        obj.sayName();
    }
    // event handler ->
    {
        let h1 = document.querySelector("h1");
        h1.addEventListener("click", function () {
            console.log(this.style.color = "red");
        })
    }
    // class ->
    {
        class Abcd {
            a = 12;
            constructor() {
                this.a = 10;
                console.log("heye")
                console.log(this);
                // blank object
            }
        }
        let val  = new Abcd();
        console.log(val);
    }
    // key things/ important things
    {
        let obj = {
            name: "Mahi",
            method: () => {
                console.log(this); 
                // arrow function kaa andar this humesha windows return karta hain
            },
            newMethod: function () {
                function abc() {
                    console.log(this);
                    // nested function main bhi this humesha windows return karta hain
                }
                abc();
            },
            newerMethod: function () {
                let newFunc = () => {
                    console.log(this); 
                    // this will return object now
                }
                newFunc();
            }
        }
        obj.method();
        obj.newMethod();
        obj.newerMethod();
    }
    // Summery ->
    {
        // global -> window
        // es5 function -> window
        // method with es5 function -> object
        // method with es6 arrow function -> window
        // es5 function inside es5 method -> window
        // arrow function inside es5 method -> object
        // event handler -> element
        // class -> blank object
    }

// Manual Binding: bind, call, apply::::::
    // call apply bind
    // function ko call karte waqt aap set kar sakte hoon this ki value keya hogi
    {
        let obj = {
            name: "mahi",
            age: 21
        }
        function abcd(a,b,c) {
            console.log(this);
            console.log(this.name);
        }
        //abcd.call(obj,1,2,3); // function humesha call hota hain
        //abcd.apply(obj, [1,2,3]); // doo hi argument lega
        let fnc = abcd.bind(obj, 1,2,3); // neya function return karega; new copy banata hain
        fnc();
    }