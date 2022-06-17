//1

let cars = [
    { model: "Jeep", price: 50000, carMileage: 40000 },
    { model: "Audi", price: 46000, carMileage: 80000 },
    { model: "BMW", price: 32000, carMileage: 340000 },
    { model: "Kia", price: 67500, carMileage: 70000 },
    { model: "Geely", price: 22000, carMileage: 49000 },
];


function getAverageCarPrice(arr) {
    let i = 0;
    let sum = arr
        .filter(({ carMileage }) => carMileage < 50000)
        .reduce((acc, { price }) => {
            i++;
            return acc + price;
        }, 0);
    return sum / i;
};

let result = getAverageCarPrice(cars);
console.log(result);


function getModelCar(arr) {
    let newArr = [];
    arr.forEach(item => newArr.push(item.model));
    return newArr;
};
let result2 = getModelCar(cars);
console.log(result2);

//2

let student = {
    name: "Your name",
    age: "Your age",
    id: 1,
};

console.log(student)

const studentEntryes = Object.entries(student)
console.log(studentEntryes);

const studentMap = new Map(studentEntryes);
console.log(studentMap);

studentMap
    .set('age', 'your age')
    .set('car', 'your car');

console.log(studentMap);

console.log(studentMap.has(name));

//3

for (let entries of studentMap.entries()) {
    console.log(entries);
};

//4

let amount = {
    apple: 440,
    burger: 316,
    juice: 1120,
};

let ourAmount = Object.fromEntries(
    Object.entries(amount).map(([key, value]) => {
        return [key, value / 2];
    })
)

console.log(amount)

//5

function getSumAmount(obj) {
    let sum = 0;
    for (let amount of Object.values(obj)) {
        sum += amount;
    }
    return sum
};
console.log(getSumAmount(ourAmount));

//6

let arr = [1, 2, 2, 2, 3, 4, 4, 5, 6, 6, 6, 6, 6, 7, 7, 8];

function getUnique(arr) {
    return [...new Set(arr)]
};

console.log(getUnique(arr));

//7

const weather = {
    "coord": {
        "lon": -122.08,
        "lat": 37.39
    },
    "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
    }],
    "base": "stations",
    "main": {
        "temp": 282.55,
        "feels_like": 281.86,
        "temp_min": 280.37,
        "temp_max": 284.26,
        "pressure": 1023,
        "humidity": 100
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "clouds": {
        "all": 1
    },
    "dt": 1560350645,
    "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "US",
        "sunrise": 1560343627,
        "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
};
console.log(weather);

let weather2 = JSON.parse(JSON.stringify(weather));

console.log(weather2);

console.log(weather == weather2);