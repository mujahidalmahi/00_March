// Functions:::::
    // It's a code block of reusable logic

// Function Declarations:::::
    // define it once, call it whenever needed
    {
        function greet() {
            console.log("Hello world");
        }
        greet()
    }

// Parameters vs Arguments:::::
    // input in function declaration is parameter and the input in function call is agrument
    {
        greet("Hoisted"); // checking hoisting
        function greet(name) {
            console.log(`Hello ${name}`);
        }
        greet("Mahi");
    }

// Return Values::::::
    // 'return' returns a value wherever a function is called, after 'return' function exits
    {
        function greet(name) {
            return `Hello ${name}`;
        }
        let greetings = greet("Mahi");
        console.log(greetings);
    }

// Function Expression::::::
    // Functions stored in variables and cannnot be hoisted(cannot call them before they are defined)
    {
        //greet(); // will be an error because it's not hoisted as it is a function expression
        const greet = function() {
            console.log("Hello world in function expression!");
        }
        greet();
    }

// Array Functions
    // No own 'this', no 'arguments' object, cannot be hoisted as well
    {
        //greet();
        const greet = (name) => {
            console.log(`${name} Sir`);
        }
        greet("Iham");
    }

// Default + Rest + Spread:::::
    // Default -> default value of parameter; Rest -> ... in parameter; Spread -> ... in argument
    {
        const defaultFunc = (a = 1, b = 2) => {
            console.log(a * b);
        }
        let sum  = 0;
        const restSpreadFunc = (...arr) => {
            arr.forEach((e) => {
                sum += e;
            })
            console.log(sum);
        }
        let arr = [1,2,3,4,5,6];
        defaultFunc();
        restSpreadFunc(...arr);
    }

// First Class Functions::::::
    // JS treats functions as values -> we can assign it to variables, pass it as argument, return it from other functions
    {
        const greet = (message) => {
            return message;
        }
        const func = (greeting, name) => {
            return greeting("Hello World,") + ` I am ${name}`;
        }
        let greetings = func(greet, "mahi");
        console.log(greetings);
    }

// Higher-Order Functions(HOF):::::
    // Functions that accept other functions or return functions
    {
        const greet = (message) => {
            return (name) => {
                return `${message} ${name} Sir!`;
            }
        }
        let greetMessage = greet("Good Morning"); // outer argument
        console.log(greetMessage("Mahi")); // inner argument
    }

// Closures & Lexical Scope::::::
    // Closures = when a function remembers its parent scope, even after the parent has finished
    {
        const outer = () => {
            let count = 0;
            return () => {
                count++;
                console.log(count);
            }
        }
        let counter = outer();
        counter();
        counter();
        // even after 'outer' is done, counter still remembers count
    }

// IIFE -> Immediately Invoked Function Expression:::::
    // Used to create private scope instantly
    {
        (() => {
            console.log("Runs IIFE");
        }) ();
    }