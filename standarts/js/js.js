// Задание 1

const calculateBonus = (starts, percent, prices) => {
    let sumValue = 0;
    for (let sum of prices) {
        sumValue += sum;
    }
    let bonusStart = sumValue - starts;
    return Math.round(bonusStart * percent / 100);
}

console.log(`Бонус составил ${calculateBonus(10000, 5, [200, 550, 4000, 23, 58, 5000, 485, 711])} игровых баллов!`);

// Задание 2

const showBalance = (value) => {
    let result;
    if (Number(String(value).slice(-1)) === 0 || Number(String(value).slice(-1)) > 4) {
        result = " баллов"
    } else if (Number(String(value).slice(-1)) === 1) {
        result = " балл"
    } else {
        result = " балла"
    }
    const string = "Ваш баланс: "
    return `${string}${value}${result}`
}

console.log(showBalance(523));
console.log(showBalance(6000));
console.log(showBalance(5001));

// Задание 3

function _toConsumableArray(arr) { 
    if (Array.isArray(arr)) { 
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { 
        arr2[i] = arr[i]; 
    } 
    return arr2; 
    } else { 
        return Array.from(arr); 
    } 
}

function findTop(value) {
    var sort = Math.max.apply(Math, _toConsumableArray(value));
    return sort;
}

console.log("Самый лучший балл: " + findTop([74989, 74990, 74990, 62000, 58480, 61800]) + "!");


function findTop3(value) {
    function sortArray(a, b) {
        return a - b;
    }
    var top3Array = value.sort(sortArray).splice(-3);
    var sum = 0;
    for (var i = 0; i < top3Array.length; i++) {
        sum += top3Array[i];
    }
    return sum / 3;
}

console.log("Средний балл из топ-3: " + Math.round(findTop3([74989, 74990, 74990, 62000, 58480, 61800])) + "!");

