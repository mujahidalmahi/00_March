// Data Types::::::
    // In js, every value has a data type, there are mainly two catagories of data types: 1. Primitive Data type, 2. Reference Data type

// Primitive Data Types:::::
    // Primitive datas are stored directly. String, Number, BigInt, Boolean, Undefined, Null, Symbol
    {
        let a = "Mahi"; // String → Text
        let b = 123; // Number → Any numeric value
        let c = 11111111111n; // BigInt → Very large integers
        let d = true; // Boolean → True or false
        let e;  // Undefined → Variable declared but not assigned
        let f = null; // Null → Intentional empty value
        let g = Symbol("name"); // Symbol → Unique identifier (rarely used)
    }

// Reference Data Types:::::
    // These are stored as memory reference. Array, Object, Funtions
    {
        let obj = {}; // Object
        let arr = []; // Array
        let func = () => {}; // Function
        let obj2 = obj;
        let arr2 = arr;
        let func2 = func;
        obj2.name = "Mahi";
        arr2[0] = "Mahi";
        func2 = () => {
            return "Mahi";
        }
        console.log(obj);
        console.log(obj2);
        console.log(arr);
        console.log(arr2);
        console.log(func());
        console.log(func2());
    }

// typeof Operator:::::
    // To check the type of a data, js uses typeof operator
    {
        console.log(typeof "Mahi"); // string
        console.log(typeof 20); // number
        console.log(typeof true); // boolean
        console.log(typeof null); //object // It's type is object which a bug of js
        console.log(typeof undefined); // undefined
        console.log(typeof 11n); // bigInt
        console.log(typeof Symbol("name")); // symbol
        console.log(typeof []); // object
        console.log(typeof {}); // object
        console.log(typeof function(){}); // function
    }

// Type Coercion(Auto-Conversion) and Loose vs Strict Comparision::::::::
    // Js automatically converts data types, and loose comparision is checking without data type but strict comparision is checking with data types
    {
        console.log("5" + 1);
        console.log("5" - 1);
        console.log(true + 1);
        console.log(null + 1);
        console.log(undefined + 1);
        console.log("5" == 5);
        console.log("5" === 5);
    }

// NaN and Truthy and Falsy values::::::
    // NaN -> Not a number(0/0, undefined, strings etc), Truthy -> seems true, falsy -> seems false
    {
        console.log(0/0);
        console.log(typeof NaN); // still a number
        if(undefined || "" || 0 || null || NaN || undefined) { // falsy values
            console.log("true");
        } else {
            console.log("False");
        }
        if("0" && 1 && [] && {} && function(){}) { // truthy values
            console.log("True");
        } else {
            console.log("false");
        }
    }

// Practice Zone:::::
    // Problem 1:
    console.log(true + false);
    // Problem 2:
    let isEmpty = (x) => {
        if(typeof x === "object") {
            return "null";
        } else if(typeof x === "undefined") {
            return "undefined";
        } else {
            return `""`;
        }
    }
    console.log(isEmpty(null));
    console.log(isEmpty(undefined));
    console.log(isEmpty(""));