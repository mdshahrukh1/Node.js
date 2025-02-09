function hello(){
    console.log("Hello World");
}

function calculate(num1, num2){
    const a = num2 + num2;
    const b = num1 + num2;
    return a + b;
}

hello();
console.log(calculate(1, 3));