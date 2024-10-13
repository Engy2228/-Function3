function getDivisorsCount(number) {
    if (typeof number !== 'number') {
      return NaN;
    }
  
    if (number <= 0 || !Number.isInteger(number)) {
      alert('number должен быть целым числом и больше нуля!');
      return; // Выходим из функции, если число не подходит
    }
  
    let count = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        count++;
      }
    }
  
    return count;
  }
  
  // Примеры использования
  console.log(getDivisorsCount(4)); // Вернет 3
  console.log(getDivisorsCount(5)); // Вернет 2
  console.log(getDivisorsCount(12)); // Вернет 6
  console.log(getDivisorsCount(30)); // Вернет 8
  
  console.log(getDivisorsCount(-5)); // Выведет предупреждение и вернет undefined
  console.log(getDivisorsCount(3.5)); // Выведет предупреждение и вернет undefined
  console.log(getDivisorsCount('abc')); // Вернет NaN