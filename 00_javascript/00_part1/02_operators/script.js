// Operators::::::
    // Operators perform operations on data. There are arithmetic operator, logical operator, relational operator, unary operator, assignment operator, comparision operator

// Arithmetic Operator:::: 
    // They perform addition, multiplication, substraction, division, modulus, power etc
    {
        console.log(2 + 3); // Addition
        console.log(2 - 3); // Substraction
        console.log(2 * 3); // Multiplication
        console.log(2 / 3); // Division
        console.log(2 % 3); // Modulus
        console.log(2 ** 3); // Power
    }

// Assignment Operator:::::
    // They assign values to variables
    {
        let a = 3;
        a += 2; // 5
        a -= 1; // 4
        a *= 5; // 20
        a /= 4; // 5
        a **= 2; // 25
        a %= 3; // 1
        console.log(a);
    }

// Comparision Operator::::::
    // They compare values
    {
        console.log(1 == "1"); // true
        console.log(1 === "1"); // false
        console.log(1 > 2); // false
        console.log(3 >= 3); // true
        console.log(3 < 4); // true
        console.log(3 <= 4); // true
        console.log(3 !== "3"); // true
        console.log(3 != "3"); // false
        console.log(!!0); // !! turns anything into boolean
    }

// Logical Operator:::::
    // They are used to combine multiple conditions
    {
        console.log(6 > 2 || 3 < 2); // Or -> one true then true
        console.log(4 > 2 && 5 < 7); // And -> all true then true
        console.log(! 5 > 2); // Not -> if false then true
    }

// Unary Operators:
    // Used when there is only one operand
    {
        let a = 5;
        console.log(typeof + "5"); // typeof and +(converts into number)
        console.log(-"5"); // negates(-)
        console.log(a++); // post increment
        console.log(++a); // pre increment
        console.log(a--); // post decrement
        console.log(--a); // pre decrement
    }

// Ternary Operator(Conditional):::::
    // Shorthand if..else
    {
        let ans = (3 > 2) ? "Right" : "Wrong";
        console.log(ans);
    }