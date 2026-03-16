"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // TypeScript Setup::::
    // Setting up a TypeScript project
    // Configuring tsconfig.json
    // Compiling TypeScript
}
{
    // Introduction::::::
    // Basic Types::::
    // Primitive Types (number, string, boolean)
    // Arrays
    // Tuples
    // Enums
    // Any, Unknown, Void, Null, Undefined, Never
    // Primitive Data Types:::::
    let a = 12;
    //a = "Mahi"; // error => only store numbers
    let b = "Mahi";
    let c = true;
    // Arrays::::
    let arr1 = [1, 2, 3, 4];
    let arr2 = ["Mahi", "Adarsh"];
    let arr3 = [true, false];
    // Tuples::::::
    let arr4 = ["Mahi", 20];
    // Enums::::::
    let UserRoles;
    (function (UserRoles) {
        UserRoles["ADMIN"] = "admin";
        UserRoles["GUEST"] = "guest";
        UserRoles["SUPER_ADMIN"] = "super_admin";
    })(UserRoles || (UserRoles = {}));
    // Any, Unknown, Void, Null, Undefined, Never
    let d; // any
    let e;
    e = "harsh";
    e = 12;
    if (typeof e === "string") {
        e.toUpperCase();
    }
    function abcd() {
        console.log(a, b, c, d, e);
        console.log(arr1, arr2, arr3, arr4);
        console.log(UserRoles);
    }
    ;
    abcd();
    let f; // f cannot have any value
    let g;
    function abc() {
        while (true) { }
        ;
    }
    abc(); // no endpoints
    console.log("Hello world"); // never executes
}
{
    // Introduction to Type Inference & Type Annotations
    let a = 12; // a automatically becomes number (inference)
    let b = 12; // b explicitly becomes number (annotations)
}
{
    const obj1 = {
        name: "Mahi",
        email: "mujahidmahi26@gmail.com",
        password: "mujahidmahi26"
    };
    function getDataOfUser(obj) {
        obj.name = "Mahi";
        obj.email = "mujahidmahi26@gmail.com";
        obj.password = "mujahidmahi26";
    }
    ;
    getDataOfUser(obj1);
    const obj2 = {
        name: "Iham",
        email: "ihamladihajum@gmail.com",
        password: "ihamladihajum",
        admin: true
    };
    function getDataOfAdmin(obj) {
        console.log(obj);
    }
    ;
    getDataOfAdmin(obj2);
    ;
    const obj3 = {
        name: "Mahi",
        age: 20
    };
    function abcd(obj) {
        console.log(obj3);
    }
    ;
    abcd(obj3);
    let a = true;
    a = 12;
    a = "Mahi";
    function abc(a) {
        a.getDetails("mahi");
    }
    ;
}
//# sourceMappingURL=script.js.map