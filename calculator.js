class Calculator {

    validateInput(a,b){
        if(typeof a !== 'number' || typeof b !== 'number'){
            throw new Error('Invalid input: inputs must be numbers');
        }
    }

    add(a, b) {
        this.validateInput(a,b)
        return a + b;
    }

    subtract(a, b) {
        this.validateInput(a, b);
        return a < b ? b - a : a - b;
    }

    multiply(a,b){
        this.validateInput(a,b);
        return a*b;
    }

    divide(a,b){
        this.validateInput(a,b);
        if(b==0){
            throw new Error('Cannot divide by zero');
        }
        return a/b;
    }

    exponentiate(base, power){
        this.validateInput(base, power);
        return Math.pow(base, power)
    }
    
  }
  
  module.exports = Calculator;