// Loops:::
    // It makes code run without repeating code again and again

// for loop:::
    {
        for(let i = 1; i < 6; i++) {
            console.log(i);
        }
    }

// while loop::::
    // condition is checked before running, for unpredictable conditions
    {
        let i = 1;
        while(i < 6) {
            console.log(i);
            i++;
        }
    }

// do-while loop::::
    // Loop runs at least once, even if the condition if false
    {
        let i = 10;
        do {
            console.log(i);
        } while(i < 5);
    }

// Break and Continue::::
    // Break exits the loop completely and continue skips the current value and moves to the next
    {
        for(let i = 1; i < 10; i++) {
            if(i === 5) continue; // no 5
            if(i === 8) break; // exit
        }
    }

// for-of loop:::
    // It is used in arrays and strings for iteration, it works on anything which is iterable
    {
        for(let i of "Mahi") {
            if(i === "a") continue;
            console.log(i);
        }
    }

// forEach loop::::
    // It is used in arrays, it doesn't return any value, cannot break/continue
    {
        let arr = [1,2,3,4,5];
        arr.forEach((e) => {
            console.log(e);
        })
    }

// for-in loop::::
    // It is used in objects, it goes over keys in objects
    {
        let user = {
            name: "Mahi",
            age: 20,
            isEnrolled: true
        }
        for(let key in user) {
            console.log(key, user[key]);
        }
    }