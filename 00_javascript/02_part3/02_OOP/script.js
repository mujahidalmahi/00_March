// OOP in JS:::::::
    // Ekbar blueprint bana doo ki har object keyse dekhaga and hum log naye naye objects with different values bana payenge, yahi upar upar se pora kaam hain oops maain

// Constructor Functions and Prototypes:::::
    {
        function CreatePencil(name, price, color) {
            console.log(this);
            this.name =  name;
            this.price =  price;
            this. color = color;
            //this. company = company;
            this.write = function (message) {
                let h1 = document.createElement("h1");
                h1.textContent = message;
                h1.style.color = color;
                document.body.append(h1);
            }
        }
        CreatePencil.prototype.company = "Akruno";
        // agar tumhara constructor function koi field apne prototype par attach karle to us constructor se banne waale sabhi new instances yaani ki objects ke pass wo field automatically chali jaati hai
        let pencil1 = new CreatePencil("Nataraj", 10, "black");
        let pencil2 = new CreatePencil("Doms", 15, "red");
        pencil1.write("Keyse Hoon Vai?");
        pencil2.write("Accha hoon vai!");
        console.log(pencil1.company);
    }

// Classes::::
    {
        class CreatePencil {
            constructor(name, company, price, color) {
                this.name =  name;
                this.price =  price;
                this. color = color;
                this.company = company;
            }
            write(message) {
                let h1 = document.createElement("h1");
                h1.textContent = message;
                h1.style.color = this.color;
                document.body.append(h1);
            }
        }
        let pencil1 = new CreatePencil("Natraj", "Natraj", 10, "blue");
        let pencil2 = new CreatePencil("Apsara", "Apsara", 20, "red");
        pencil1.write("Hello, Samir");
        pencil2.write("Hi, Anaya!");
    }

// Extends and Super:::::::
    {
        class User {
            constructor(name, address, username, email) {
                this.name = name;
                this.address = address;
                this.username = username;
                this.email = email;
                this.role = "user";
            }

            write(message) {
                let h1 = document.createElement("h1");
                h1.textContent = `${this.name}: ${message}`;
                document.body.append(h1);
            }
        }
        class Admin extends User {
            constructor(name, address, username, email) {
                super(name, address, username, email);
                this.role = "admin";
            }
            remove() {
                document.querySelectorAll("h1").forEach((e)=>{
                    e.remove();
                })
            }
        }
        let u1 = new User("Mahi", "narayanganj", "mahi2006", "mujahidmahi26@gmail.com");
        let u2 = new User("Iham", "dhaka", "iham6002", "iham@gmail.com");
        let a1 = new Admin("Jack", "New York", "jack111", "jack@gmail.com");
        u1.write("Hello Iham");
        u2.write("Hello Mahi");
        a1.remove();
        a1.write("I am the final boss!");
    }

// Classical Classes Vs Prototype Inheritance::::
    // Classical => class -> class; Prototype => object -> object
    {
        // classcial example above(extends)
        // prototype inheritance example:
        let coffee = {
            name: "Nescafe",
            drink: function () {
                console.log("gut gut gut");
            }
        }
        let latte = Object.create(coffee);
        console.log(latte);
    }

// Encapsulation::::
    // # or closures
    {
        class Dog {
            #name; // private property
            set setDogName(name) { // setter method
                this.#name = name;
            }
            get getDogName() { // getter method
                return this.#name;
            }
        }
        let brian =  new Dog();
        brian.setDogName = "Brian"; // setter without paranthesis
        console.log(brian.getDogName); // getter without paranthesis
        // cannot access name directly
    }
    //  could have added constructor as well to set values;
    // Closures are also by default encapsulated but not in oop