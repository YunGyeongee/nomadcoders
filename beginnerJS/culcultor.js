const calculator = {
    add : function(a, b) {
        console.log(a + b);
    },
    minus : function(a, b) {
        console.log(a - b);
    },
    divide : function(a, b) {
        console.log(a / b);
    },
    powerOf : function(a, b) {
        console.log(a ** b);
    }
}

calculator.add(15, 2);
calculator.minus(15, 2);
calculator.divide(15, 2);
calculator.powerOf(15, 2);