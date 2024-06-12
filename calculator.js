class Calculator {

    validateInput(a,b){
        //console.log(typeof a, typeof b)
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
    
  }
  
  module.exports = Calculator;