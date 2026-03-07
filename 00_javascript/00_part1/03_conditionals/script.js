// Conditioanls or Control Flow:::::
    // Sets different conditions for codes to execute

// if..else if..else:::::
    {
        let age = 19;
        if(age > 65) {
            console.log("You are too old to drive a car!");
        } else if(age > 18) {
            console.log("You can drive cars!");
            // else if chain works top-down — order matters
        } else {
            console.log("Get to Study child");
        }
    }

// switch cases::::
    {
        let grade = "A";
        switch(grade) {
            case "A": 
                console.log("You got a great result");
                break;
            case "B":
                console.log("You got a good result, Try more");
                break;
            case "C": 
                console.log("Not good. Next time do well");
                break;
            case "D":
                console.log("Very bad, you need to study more");
                break;
            default:
                console.log("You literally failed in the exam mf!!!!");
        }
    }

// Early return pattern:::::
    // Used in functions to exit if the condition fulfils
    {
        const func = (age) => {
            if(age > 60) return "Old";
            if(age > 18) return "Adult";
            return "Child";
        }
        console.log(func(10));
    }