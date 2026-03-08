// Variable Scope: global, block, functional:::::::
    // scope hain ke aap apne created variables and functions kaha tak use kar sakte hoon
    // function scope -> funtion kaa andar use hoon sakta hain
    // global scope -> poore code main use hoon sakta hain
    // block scope -> {} curly braces mein hi use hoon sakta hain
    // agar aapka code koi bhi braces kee andar nehi hoon to woh global scope hain

// Execution content: memory creation & execution phase::::::
    // js sabse pehle jayse hii aapka function dekhta haain sabse pahle js banata hain execution context, yee ek process hai jo ki do different phases main chalta hai, memory phase and doosre kaa nam hai execution phase

// Lexical Scope vs Dynamic Scope::::::
    // js main sirf lexical scoping chalta hain-> ki aap kaha par physically available ho yee pori tareeke se depend karta hain hi aap kya access kar paaoge
    // dynamic scoping -> kaha se call kar rehe hoo uspe depend karega ki kya value milega

// Closure Defination and how variables are presearved::::
    // closure hota hain functions jo ki kisi parent function kaa andar hoon aur andar wala function return hoo raha hoon and returning function use kare parent function kaa koi variable
    {
        function abcd() {
            let a = 12;
            return function () {
                console.log(a);
            }  
        }
    }
    // faayda nuskaaan: private variables, global pollution
    // yee sach hain function khatam hone pee aapka function aur uske variables khatam hoon jata hain, par jab bhi closure banta hain to aapka function uske variables kaa ek backlink banaya jata hain aur uske hota hai o [[environment]]

// Use Cases: Private Counters, Encapsulation
    // Private counters:
    {
        function countForMe() {
            let c = 0;
            return function () {
                c++;
                console.log(c);
            };
        };
        let counter = countForMe();
        counter();
        counter();
    }
    // Encapsulations:
    {
        function clickLimiter() {
            let click = 0;
            return function () {
                if(click < 5) {
                    click++;
                    console.log(`clicked: ${click} times`);
                } else {
                    console.error("Limit exceded, try after some time");
                }
            }
        }
        let func = clickLimiter();
        func();
        func();
        func();
        func();
        func();
        func();
    }