import { addPayment } from "./other";
import Payment from "./other"; // { not needed }

export {getDetails, addPayment} from "./other";

// Functions:::::
    // Function Types
    // Optional and Default parameters
    // Rest parameters
    // Overloads

{
    function abcd(name: string, age: number = 0, cb: (value: string) => void, gender?: string) {
        cb("hello");
    }
    abcd("Mahi", 20,  (args: string) => {
        console.log(args);
    })

    function abc(...args: number[]) { // rest parameter
        console.log(args);
    };
    let arr = [1,2,3,4,5];
    abc(...arr);

    function ab(a: string): void;
    function ab(a: string, b: number): number;
    function ab(a: any, b?: any): void | number {
        if(typeof a === "string" && typeof b === undefined) {
            console.log("Hey")
        } else if (typeof a === "string" && typeof b === "number") {
            return 123;
        } else throw new Error("something is wrong!");
    }
    console.log(ab("hey", 2334));
}

// Generics::::::
    // Generic functions
    // Generic interfaces
    // Generic classes

    // hum ek function ko use karte waqt bata sakte hai ki function argument ko kis type se treat kare 

{
   function abcd <T> (a: T) {
        console.log(a);
   }
   abcd<string>("Mahi");
   abcd<number>(12);
   abcd(true); // still okay

   interface Halua <T> {
        name: string;
        age: number;
        key: T
   }
   function abc(obj: Halua <string>) {
        obj.key = "sadasda";
        console.log(obj.key);
   }
   
   class BottleMaker <T> {
        constructor(public key: T) {};
   }
   let b1 = new BottleMaker <string> ("Ice");
   let b2 = new BottleMaker <number> (100);

   function aabb <T> (a: T, b: T) : T {
        if(typeof a === "string") {
            a.toUpperCase();
        }
        return "Hey" as T;
        // return <T> "Hey";
   }
}

// Modules
    // Exporting and importing modules
    // Default exports

{
    addPayment(12);
    let payment = new Payment(1000);
}

// Type Assertions::::::
    // Type casting
    // Non-null assertion operator
    // type assertion kaa matlab batana ts ko ki particular cheej kaa type kya hain, yee aap tab karte ho jab aap ts see jaada us value kaa type jaante hoon

{
    let a: any = 12;
    let d = (a as string).toLowerCase;
    (<number> a).toString();

    let b = Number("12"); // type casting
    b.toFixed();

    let c: null | undefined | string;
    c = "hey";
    c!.search("e"); // null - undefined nehi aayega for sure
}

// Type guards and Typescript Utility Types::::
    // Using typeof and instanceof
    // partial, required, readonly

    // type guards -> type narrowing

{
    function abcd(args: string | number | any) {
        if(typeof args === "string") {
            console.log(args.toUpperCase());
        } else if(typeof args === "number") {
            console.log(args.toFixed());
        } else {
            console.error("paagaal hoon geya keya vaai???");
        }
    }
    abcd("hello vai");
    abcd(12.55);
    abcd(true);

    class TvRemote {
        switchoff() {
            console.log("switching of tv");
        }
    }
    class CarRemote {
        switchoff() {
            console.log("switching off car");
        }
    }
    const tv = new TvRemote();
    const car = new CarRemote();
    function switchOffKaro(device: TvRemote | CarRemote) {
        if(device instanceof TvRemote) {
            device.switchoff();
        } else if(device instanceof CarRemote) {
            device.switchoff();
        }
    }
    switchOffKaro(car);
}