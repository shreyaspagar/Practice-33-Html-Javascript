let greet = "hello"; //global scope

function changeGreet() { //function scope
    let greet  = "namaste";
    console.log(greet);

    function innerGreet() {
        console.log(greet); //lexical scope
    }

    innerGreet();

}

console.log(greet);
changeGreet();