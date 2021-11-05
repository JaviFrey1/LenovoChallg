
//    1)Create a function that receives an array of positive integers and returns an array with only the input's pair numbers. 
//    For example:
//        [INPUT] array = [1,2,3,4]
//        [OUTPUT] array = [2,4]

function pairs(array) {
    let newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            let a = array[i];
            newArray = [...newArray, a];
        }
    }
    return newArray;
}
console.log(pairs([1, 2, 3, 4]));

//  2) Create a function that receives a String as a parameter and returns a Boolean indicating if the word is a palindrome.

function isPalindrome(string) {
    let long = string.length;
    let mid = Math.floor(long / 2);

    for (let i = 0; i < mid; i++) {
        if (string[i] !== string[long - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("racecar"));


//   3) Using any JavaScript object creation pattern, create a Car object with the following attributes and methods:
//     Attributes: make, model, turnedOn, engineDisplacement, year
//     Methods: isOn(), turnOn() , turnOff(), toString() [returns year,make,model, and engineDisplacement], 
//              getMarketingData()[returns make, model and year]

class Car {
    constructor(make, model, turnedOn, engineDisplacement, year){
        this.make = make;
        this.model = model;
        this.turnedOn = turnedOn;
        this.engineDisplacement = engineDisplacement;
        this.year = year;
    }
    isOn(){
        if(this.turnedOn){
            return true;
        }
        return false;
    }
    turnOn(){
        this.turnedOn = true;
    }
    turnOff(){
        this.turnedOn = false;
    }
    toString(){
        return `${this.year} ${this.make} ${this.model} ${this.engineDisplacement}`;
    }
    getMarketingData(){
        return `${this.make}, ${this.model}, ${this.year}`;
    }
}

let Ford = new Car("Ford", "Mustang", false, "3.0L", "1969");
console.log(Ford);

//  4) Create a Bicycle object with only the make, model, and year attributes and no methods. 
//     Instantiate it and print to the console it's internal state calling the getMarketingData() method from the Car object.

class Bicycle extends Car {
    constructor(make, model, year){
        super(make, model, year);
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let Fun = new Bicycle("Zenith", "Andes", "2019");
console.log(Fun.getMarketingData());