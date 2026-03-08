// Arrays:::: 
    // It is like a row of boxes which store multiple values
    
// Creating & Accessing Arrays:::::::
    // indexing starts from 0, can access, update, or overwrite values by index
    {
        let marks = [90, 100, 88];
        console.log(marks[1]); // access
        marks[2] = 98; // update
        marks[3] = 92; // overwrite
    }
    
// Common Array Methods:::::
    // Modifiers-> Change original array
    {
        let arr = [1, 2, 3, 4];
        arr.push(5); // add to end
        arr.pop(); // remove last
        arr.unshift(0); // add to start
        arr.shift(); // remove first
        arr.splice(1, 2); // removes 2 items starting from index 1
        arr.splice(1,0, 2, 3) // adds 2,3 after index 1
        arr.reverse(); // reverse order
        console.log(arr);
    }
    // Extractors -> Don't modify original array
    {
        let arr = [2, 1, 4, 3];
        let newArr1 = arr.slice(1,3); // copying from index 1 to index 3
        console.log(newArr1);
        let newArr2 = arr.sort((a,b) => {
            return b-a; // descending sort
        }); // ascending sort by default -> converts to string
        console.log(newArr2);
    }

// Iteration Methods::::::
    // map() -> returns a new array with modified values
    {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8];
        let newArr = arr.map((e)=> {
            return e += 2;
        })
        console.log(newArr);
    }
    // filter() -> filters out elements based on a condition
    {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8];
        let newArr = arr.filter((e) => {
            if(e > 4) return e;
        })
        console.log(newArr);
    }
    // reduce() -> reduces the array to a single value
    {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8];
        let reducedArr = arr.reduce((acc,val) => {
            return acc + val;
        }, 10); // acc = 10
        console.log(reducedArr);
    }
    // forEach() -> performs action on each element but returns undefined
    {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8];
        arr.forEach((e) => {
            console.log(e * 2);
        })
    }

// find(), some(), every():::::
    {
        let arr = [1, 2, 2, 3, 4, 4, 5, 6, 7, 8];
        let find = arr.find(e => e > 4); // first match
        let some = arr.some(e => e > 7); // at least one true
        let every = arr.every(e => e < 5); // all true
        console.log(find);
        console.log(some);
        console.log(every);
    }

// Destructuring and Spread:::::
    {
        let arr = [1, 2, 3, 4];
        let [first, ,third] = arr; // destructuring
        let newArr = [...arr, 5, 6, 7, 8]; // spreading
        console.log(first);
        console.log(third);
        console.log(newArr);
    }