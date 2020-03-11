let calculator = {
  //read
  read: function calcRead (a, b){
    calculator.a = a;
    calculator.b = b;
  },

  //sum
  sum: function calcSum() {
    return Number(calculator.a) + Number(calculator.b);
  },

  //mul
  mul: function calcMul() {
    return Number(calculator.a) * Number(calculator.b);
  },
};

calculator.read(3, 5);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
