// koi bhi code js main line by line execute hota hain aur ye natural pattern bhi hota hain ki code line by line chale, but kabhi kabhi kabar aise cases aata hain life mein jaha par aapka code wait karta hain and utni der mein agla code chaal jaata hain

// Sync Async::::::
    // aisa code jo line by line chale hota hain sync code
    // aisa code jo jab chalne ke liye ready hoo jaaye tab chale wo hai async

// Callback hell:::::
    // ek function ko agar aap ek aur function bhej dee rahe hoo parameter main, to wo parameter wala function kehlata hain callback
    {
        function func (fnc) {
            setTimeout(fnc, 2000)
        }
        func(() => {
            console.log("Hello world");
        });
    }
    // Callback hell ->
    {
        function func(username, cb) {
            setTimeout(()=>{
                console.log(`Profile fetched of ${username}`);
                cb({__id: 1111, username, age: 20, email: "mahi@gmail.com"});
            }, 2000);
        }
        function func2 (id, cb) {
            setTimeout(() => {
                cb({__id: id, posts: ["hwllo", "Good Morning"]})
            }, 3000);
        }
        function func3 (id, cb) {
            setTimeout(()=>{
                cb({__id: id, savedPost: ["Man go", "Man Live"]});
            }, 4000);
        }
        func("harsh", (profileData)=> {
            console.log(profileData);
            func2(profileData.__id, (posts) => {
                console.log(posts);
                func3(profileData.__id, (sPosts) => {
                    console.log(sPosts);
                })
            })
        })
    }

// Promises: Resolve, Reject, then, catch::::::
    // promise: aap ek promise banate hoon joo ki do states mein sain ek state me jaa sakta hai and wo yaa to resolve hoga yaa to reject hoga ab wo kya hoga yee to waqt bataayega, paar humain to do state ke liyei code likhna padega
    {
        let pr =  new Promise((res, rej) => {
            setTimeout(()=> {
                let rn = Math.floor(Math.random() * 10);
                if(rn > 5) {
                    res(rn);
                } else {
                    rej(rn);
                }
            }, 3000);
        })
        console.log(pr);
        pr.then((val) => {
            console.log("Promise resolved");
            console.log(val);
        }).catch((val) => {
            console.log("Promise rejected");
            console.log(val);
        })
        // Promise chaining
        function getData(dataId) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res("Data ID:" + dataId);
                }, 2000);
            })
        };
        console.log("fetching data 1....")
        getData(1).then((val) => {
            console.log(val);
            console.log("Fetching data 2....")
            return getData(2);
        }).then((val) => {
            console.log(val);
            console.log("Fetching data 3....")
            return getData(3);
        }).then((val) => {
            console.log(val);
            console.log("Fetching data 4....")
            return getData(4);
        }).then((val) => {
            console.log(val);
            console.log("Successful");
        })
    }

// Async-await::::::
    // 
    {
        let pr = new Promise((res, rej) => {
            setTimeout(() => {
                let rn = Math.floor(Math.random() * 10);
                if(rn > 5) {
                    res("Resolved with: " + rn);
                } else {
                    rej("Rejected with: " + rn);
                }
            }, 2000);
        })
        async function abcd() {
            try {
                let val = await pr;
                console.log(val);
            } catch(err) {
                console.log(err);
            }
        }
        abcd();
    }