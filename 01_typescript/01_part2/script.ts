{
    // OOP
        // Introduction
    class Device {
        name = "lg";
        price = 12000;
        category = "digital";
    }

    let d1 = new Device();
        // Constructors
    class BottleMaker {
        constructor(public name :string, public price :number = 1200) {}
    }
    let b1 = new BottleMaker("Milton");
    // private, public, protected access modifier
    class Student {
        constructor(private name: string, protected id: number, public discipline : string) {};
        setName(name: string) {
            if(name !== " ") {
                this.name = name;
            }
        }
        getName() {
            return this.name;
        }
        // private -> accessible within same class
        // protected -> accessible within the same class and sub class
        // public -> accessible within everywhere
        // same as java
    }
    let std1 = new Student("Mujahid Al Mahi", 250234, "CSE");
    //std1.name = "Iham La Dihajum"; // error as it's private
    std1.setName("Iham La Dihajum");
    console.log(std1.getName());
}

{
    // Readonly Property:::::
    class User {
        constructor(public readonly name: string) {};
        changeName() {
            //this.name = "Iham"; // cannot change the value
        }
    }
    let u1 = new User("Mahi");
    u1.changeName();
    // Optional Property::::::
    class Users {
        constructor(public name: string, public age: number, public gender?: string) {};
    }
    let u2 =  new Users("Mahi", 20, "Male");
    // Parameter Property::::::
    class Userss {
        public name: string | undefined;
        public age: number | undefined;
        constructor(name?: string, age?: number) {
            this.name = name;
            this.age = age;
        }
    }
}

{
    // getters and setters:::::
    class User {
        constructor(private name: string) {};
        get userName() : string {
            return this.name;
        }
        set userName(name: string) {
            this.name = name;
        }
    }
    let u1 = new User("Mahi");
    u1.userName = "Iham";
    console.log(u1.userName);
}

{
    // Static members::::::::
    class Hero {
        static name: string = "Loki";
        set heroName(name: string) {
            Hero.name = name;
        }
        get heroName() : string {
            return Hero.name;
        }
    }
    let hero =  new Hero;
    hero.heroName = Hero.name;
    console.log(hero.heroName);
}

{
    // Abstract classes and methods::::::
    // abstraction -> cannot create instances
    class PaymentEssentials {
        constructor(protected amount?: number, protected account?: number) {
            console.log("")
        };
    }
    class Bkash extends PaymentEssentials {
        constructor(protected amount?: number, protected account?: number) {
            super(amount, account);
            console.log("parent constructor");
        }
    }
    let transition = new Bkash(2000, 212122232);
    let payment = new PaymentEssentials(2000, 223313143231);
    console.log(transition);
}

{
    // Interfaces::::::
    interface Student {
        name: string;
        id: number;
        getInfo() : string | number
    }
    class Mahi implements Student {
        name = "Mahi";
        id = 250234;
        getInfo() {
            return this.name + this.id;
        }
    }
    let mahi = new Mahi();
    console.log(mahi);
}