// Objects:::::
    // Object is a collection of key-value pair
    {
        const obj = {
            name: "Mahi"
        };
        obj.age = 21;
        console.log(obj);
    }

// Key-Value Structures:::::
    // Keys are by default strings, it can be numerical string or any type but values can be string, number, boolean, function, array, object etc
    {
        const obj = {
            name: "Mahi",
            age: 21 
            // cannot put direct numbers here as a key
        };
        obj[2] = "Checking whether number can be a key or not!";
        console.log(obj);
    }

// DOT VS BRACKET notations::::::
    // Dot for fixed key names, brackets for dynamic or multi word keys
    {
        const obj = {
            name: "Mahi",
            age: 21
            // Cannot make multi word keys here
        };
        let key = "name";
        console.log(obj[key]);
        obj["Full Name"] = "Mujahid Al Mahi";
        console.log(obj["Full Name"]);
        console.log(obj.age);
    }

// Nested Objects and deep access + Object Destructuring::::
    // Objects can have objects inside and can be accessed deeply
    {
        const obj = {
            name: "Mahi",
            age: 21,
            location: {
                postalCode: 1410,
                city: "Narayanganj"
            }
        }
        let {name,age, location} = obj;
        let {location:{city}} = obj;
        console.log(obj.location.postalCode);
        console.log(name, age, location);
        console.log(city);
    }

// Looping through objects::::::::
    // By for-in loops we can loop through the objects, object.keys(), object.values(), object.entries()
    {
        const obj = {
            name: "Mahi",
            age: 20,
            isEnrolled: true
        }
        for(let key in obj) {
            console.log(obj[key]);
        }
        console.log(Object.keys(obj));
        console.log(Object.values(obj));
        console.log(Object.entries(obj));
    }

// Copying Objects:::::
    // We can copy an object by spead operator or by JSON
    {
        let obj = {
            name: "Mahi",
            age: 20,
            courses: {
                ownDisciplinary: {
                    firstTerm: "Structured Programming",
                    SecondTerm: "OOP"
                }
            }
        }
        let obj2 = {...obj}; // one level deep
        let obj3 = JSON.parse(JSON.stringify(obj)); // nested levels
        // Note: JSON-based copy works only for plain data (no functions, undefined, etc.)
        let obj4 = Object.assign({isEnrolled: true}, obj); // one-level deep
        console.log(obj2);
        console.log(obj3);
        console.log(obj4);
    }

// Optional Chaining and Computed properties:::::
    // Optional chaining helps to reduce error if a key is not found in deep accessing, Computed properties are variable keys
    {
        let key = "isHere";
        const obj = {
            name: "Mahi",
            age: 20,
            [key]: false
        };
        console.log(obj?.isEnrolled); // instead of error, it will give undefinded
        console.log(obj);
    }