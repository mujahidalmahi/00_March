// design patterns:::::

// Module Pattern(IIFE)::::
    // module pattern ek design patter hai jisme hum aaapna code ek self executing function(IIFE) ke andar likhte hain, taki variables aur functions private rahen
    // iske andar se hum sirf wahi cheezein return karte hain jo bahar use karni hain
    // Is pattern kaa main fayda hai data hiding(encapsulatiuon) aur clean structure, taaki code scure, reusable aur manageable ban saake
    {
        let Bank = (()=>{
            let bankBalance = 1200;
            function checkBalance() {
                return bankBalance;
            }
            function setBalance(val) {
                bankBalance = val;
            }
            function withdraw(val) {
                if(val <= bankBalance) {
                    bankBalance -= val;
                }
            }
            function credit(val) {
                bankBalance += val;
            }
            return {
                checkBalance,
                setBalance,
                withdraw,
                credit
            }
        })();
        console.log(Bank);
    }

// Revealing Module Pattern::::
    {
        let Bank = (()=>{
            let bankBalance = 1200;
            function checkBalance() {
                return bankBalance;
            }
            function setBalance(val) {
                bankBalance = val;
            }
            function withdraw(val) {
                if(val <= bankBalance) {
                    bankBalance -= val;
                }
            }
            function credit(val) {
                bankBalance += val;
            }
            return {
                check: checkBalance,
                set: setBalance,
                draw: withdraw,
                cred: credit
                // we can choose the name here
            }
        })();
        console.log(Bank);
    }

// Factory function pattern::::
    // EK function banate ho jo objects create karta hain (factory = object banane ki machine)
    // Facotry function pattern ek aisa design pattern hai jisme hum ek simple function likhte hain jo naye objects banakar return karta hain, bina class ya new keyword use kiye
    // Is pattern kaa main idea hai -> object creation ko ek function ke through control karna. 
    // Har baar jab tum factory function call karte hoon, tumhe ek naya object milta hai jisme apne methods aur (agar chaho to) private data hoio saktaa hai
    {
        function createProduct (name, price) {
            let stock = 10;
            return {
                name,
                price,
                buy(qty) {
                    if(qty <= stock) {
                        stock -= qty;
                        console.log(`booked - ${stock} pieces left`);
                    } else {
                        console.error("out of stocks, we don't have so much product left");
                    }
                },
                refil(qty) {
                    stock += qty;
                    console.log(`Refilled the stock- ${stock} pieces now`)
                }
            }
        }
        let iphone = createProduct("Iphone", 70000);
        iphone.buy(23);
    }

// Observer Pattern:::::
    // class 
    {
        class YoutubeChannel {
            constructor() {
                this.subscribers = [];
            }
            subscribe(user) {
                this.subscribers.push(user);
                user.update("You have subscribed to the channel");
            }
            unsubscribe(user) {
                this.subscribers = this.subscribers.filter((sub) => {
                    return (sub !== user);
                })
            }
            notify(message) {
                this.subscribers.forEach((user) => {
                    user.update(message);
                })
            }
        }
        class User {
            constructor(name) {
                this.name = name;
            }
            update(data) {
                console.log(data);
            }
        }
        let Akruno =  new YoutubeChannel();
        let mahi = new User("Mahi");
        let iham = new User("Iham");
        Akruno.subscribe(mahi);
        Akruno.unsubscribe(mahi);
        Akruno.subscribe(iham);
        Akruno.notify("please watch the videos");
        console.log(Akruno.subscribers);
    }