// Задание 1

const calculateBonus = (starts, percent, prices) => {
    let sumValue = 0;
    for (let sum of prices) {
        sumValue += sum;
    }
    let bonusStart = sumValue - starts;
    return Math.round(bonusStart * percent / 100);
}

let prices = [200, 550, 4000, 23, 58, 5000, 485, 711];
let starts = 10000;
let percent = 5;

console.log(`Бонус составил ${calculateBonus(starts, percent, prices)} игровых баллов!`);

// Задание 2

const showBalance = (string, value) => {
    this.string = string;
    let result;
    if (Number(String(value).slice(-1)) === 0 || Number(String(value).slice(-1)) > 4) {
        result = " баллов"
    } else if (Number(String(value).slice(-1)) === 1) {
        result = " балл"
    } else {
        result = " балла"
    }
    return `${string[0]}${value}${result}`
}
const value = 1;
const output = showBalance`Ваш баланс: ${value}`;
console.log(output);

// Задание 3

let pointsArray = [74989, 74990, 74990, 62000, 58480, 61800];

let pointsArraySorted = pointsArray.sort(function cmpNum(a, b) {
  return b - a;
});

let winnerPoints = pointsArraySorted[0];

let medallistAverage =
  pointsArraySorted.slice(0, 3).reduce(function sum(a, b) {
    return a + b;
  }) / 3;

medallistAverage = medallistAverage.toFixed(2);

console.log("Наивысший балл: " + winnerPoints);
console.log("Средний балл призёров: " + medallistAverage);

