function add(num1, num2) {
    console.log(isNaN(num1));
    if (num1 === null || num2 === null || isNaN(num1) || isNaN(num2)) {
        return null; 
    }
    return num1 + num2;
}


export {
    add
};