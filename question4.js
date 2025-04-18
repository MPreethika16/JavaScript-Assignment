let username = "Preethika";
function greet() {
    let greeting = "Hello";
    console.log(greeting + ", " + username); // Hello,Preetika
    //Variable Shadowing
    let username = "Preethi"; 
    console.log(greeting + ", " + username); // Hello,Preethi
    //Block Scope
    if (true) {
        let mood = "Happy";
        console.log(mood); //Happy
    }
}
greet();

console.log("global scope " + username); // global scope Preethika

