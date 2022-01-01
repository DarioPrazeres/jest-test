calculator = (() => {
    const sum = (a, b) => a + b;
    const subctract = (a, b) => a - b;
    const mult = (a, b) => a * b;
    const div = (a, b) => a / b;
    return{
        sum,
        subctract,
        mult,
        div,
    }; 
})();

module.exports = calculator;