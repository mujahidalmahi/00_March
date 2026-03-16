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
    let a :number = 12;
    //a = "Mahi"; // error => only store numbers
    let b :string = "Mahi";
    let c :boolean = true;
    // Arrays::::
    let arr1 :number[] = [1,2,3,4];
    let arr2 :string[] = ["Mahi", "Adarsh"];
    let arr3 :boolean[] = [true, false];
    // Tuples::::::
    let arr4 :[string, number] = ["Mahi", 20];
    // Enums::::::
    enum UserRoles {
        ADMIN = "admin",
        GUEST = "guest",
        SUPER_ADMIN = "super_admin"
    }
    // Any, Unknown, Void, Null, Undefined, Never
    let d; // any
    let e :unknown;
    e = "harsh";
    e = 12
    if(typeof e === "string") {
        e.toUpperCase();
    }
    function abcd() :void {
        console.log(a,b,c,d,e);
        console.log(arr1, arr2, arr3, arr4);
        console.log(UserRoles);
    }; abcd();
    let f :null; // f cannot have any value
    let g :undefined;
    function abc() :never {
        while(true) {};
    } abc(); // no endpoints
    console.log("Hello world"); // never executes
}

{
    // Introduction to Type Inference & Type Annotations
    let a = 12; // a automatically becomes number (inference)
    let b :number = 12; // b explicitly becomes number (annotations)
}

{
    // Introduction to Interfaces & Type Aliases
        // Defining interfaces
        // Using interfaces to define object shapes
        // Extending interfaces
    // Type aliases
        // Intersection types
    interface User {
        name :string,
        email :string,
        password :string,
        gender ?:string // optional
    }
    const obj1 :User = {
        name: "Mahi",
        email: "mujahidmahi26@gmail.com",
        password: "mujahidmahi26"
    }
    function getDataOfUser(obj :User) {
        obj.name = "Mahi";
        obj.email = "mujahidmahi26@gmail.com";
        obj.password = "mujahidmahi26";
    }; getDataOfUser(obj1);
    interface Admin extends User {
        admin :boolean; // all properties of User is present in Admin
    }
    const obj2 :Admin = {
        name: "Iham",
        email: "ihamladihajum@gmail.com",
        password: "ihamladihajum",
        admin: true
    }
    function getDataOfAdmin(obj :Admin) {
        console.log(obj);
    }; getDataOfAdmin(obj2);
    interface Abcd {
        name :string
    };
    interface Abcd {
        age :number
    }
    const obj3 :Abcd = {
        name: "Mahi",
        age: 20
    }
    function abcd(obj :Abcd) {
        console.log(obj3);
    }; abcd(obj3);

    type songkha = number | string | boolean;
    let a :songkha = true; 
    a = 12;
    a = "Mahi";
    type Users = {
        name :string,
        email :string
    }
    type Admins = Users & {
        getDetails(user :string) :void;
    }
    function abc(a :Admins) {
        a.getDetails("mahi");
    };
}