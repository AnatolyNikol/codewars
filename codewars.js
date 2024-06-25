// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
function shortcut(string) {
    return string.split('').filter(el => el !== 'a' && el !== 'e' && el !== 'i' && el !== 'o' && el !== 'u').join('')
}

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
function multipleOfIndex(array) {
    let res = array.filter(function (elem, index) {
            if (elem % index == 0) {
                return true
            } else if (elem == 0) {
                return true
            } else {
                return false
            }
        }
    )
    return res
}

// Capitalization and Mutability
function capitalizeWord(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
}

// Contamination #1 -String-
function contamination(text, char) {
    return text.replace(/\S/g, char).split(' ').join(char)
}


// Find Multiples of a Number
function findMultiples(integer, limit) {
    let arr = [];
    let num = integer
    while (integer <= limit) {
        arr.push(integer)
        integer += num
    }
    return arr;
}

// Debugging sayHello function
function sayHello(name) {
    return 'Hello, ' + name
}

// Write a function to split a string and convert it into an array of words.
function stringToArray(string) {
    return string.split(' ')
}

// Drink about
function peopleWithAgeDrink(old) {
    if (old < 14) {
        return "drink toddy"
    }
    if (old < 18) {
        return "drink coke"
    }
    if (old < 21) {
        return "drink beer"
    } else {
        return "drink whisky"
    }
};

// Triple Trouble
function tripleTrouble(one, two, three) {
    let str = '';
    for (let i = 0; i < one.length; i++) {
        str += one[i] += two[i] += three[i];
    }
    return str
}

// Find the position!
function position(letter) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    return `Position of alphabet: ${letters.indexOf(letter) + 1}`
}

// get character from ASCII Value
function getChar(c) {
    return String.fromCharCode(c)
}


// Lario and Muigi Pipe Problem
function pipeFix(numbers) {
    let arr = [];
    let first = numbers[0]
    let last = numbers[numbers.length - 1]
    while (first <= last) {
        arr.push(first++)
    }
    return arr
}

// A Needle in the Haystack
function findNeedle(haystack) {
    // your code here
    return `found the needle at position ${haystack.indexOf('needle')}`
}

// L1: Set Alarm
function setAlarm(employed, vacation) {
    if (employed && vacation) {
        return !employed
    } else {
        return employed
    }
}

// Sum of Multiples
function sumMul(n, m) {
    let sum = []
    if (m > 0) {
        for (let i = n; i < m; i += n) {
            sum.push(i)
        }
        return sum.reduce((acc, num) => acc + num, 0)
    } else {
        return 'INVALID'
    }
}

// Price of Mangoes
function mango(quantity, price) {
    return price * (quantity - Math.floor(quantity / 3))
}

// What is between?

function between(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr
}


// Short Long Short

function solution(a, b) {
    if (a.length < b.length) {
        return a + b + a
    } else {
        return b + a + b
    }
}

// No zeros for heros
function noBoringZeros(n) {
    let arr = Array.from(String(n))
    while (arr[arr.length - 1] === '0') {
        arr.pop()
    }
    return Number(arr.join(''))
}

// Student's Final Grade
function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100
    } else if (exam > 75 && projects >= 5) {
        return 90
    } else if (exam > 50 && projects >= 2) {
        return 75
    } else {
        return 0
    }
}


// Reverse List Order
function reverseList(list) {
    return list.reverse()
}

// Will there be enough space?
function enough(cap, on, wait) {
    if (on + wait > cap) {
        return on + wait - cap
    } else {
        return 0
    }
}

// Area or Perimeter
const areaOrPerimeter = function (l, w) {
    if (l === w) {
        return l * w
    } else {
        return l + l + w + w
    }
};

// Volume of a Cuboid
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }
}

//Remove duplicates from list
function distinct(a) {
    let newArr = a.filter((el, index) => {
        return a.indexOf(el) === index
    })
    return newArr
}

//Welcome to the City
function sayHello(name, city, state) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

// console.log(sayHello(['Wallace','Russel','Osbourne'], 'Phoenix', 'Arizona'))


// Removing Elements
function removeEveryOther(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))

// Stringy Strings

function stringy(size) {
    let str = '';
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            str += '1'
        } else {
            str += '0'
        }
    }
    return str
}

// console.log(stringy(6))

let findAverage = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res = res + nums[i]
    }
    return res / nums.length
}

// console.log(findAverage([1, 3, 5, 7]))

// Replace all dots
let replaceDots = function (str) {
    return str.replace(/\./g, '-');
}

// console.log(replaceDots("one.two.three"))


//Basic Training: Add item to an Array

var websites = [];

websites.push('codewars')
// console.log(websites)


//Mr. Freeze

const MrFreeze = {};
Object.freeze(MrFreeze)

//Is this my tail?

function correctTail(body, tail) {
    let sub = body.substr(body.length - (tail.length))

    if (sub === tail) {
        return true
    } else
        return false
}

// console.log(correctTail("Meerkat", "t"))


//Find numbers which are divisible by given number

function divisibleBy(numbers, divisor) {
    let arr = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            arr.push(numbers[i])
        }
    }
    return arr
}

// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))


//Sum Mixed Array

function sumMix(x) {
    return x.map(i => Number(i)).reduce((sum, current) => sum + current)
}

// console.log(sumMix([9, 3, '7', '3']))


//101 Dalmatians - squash the bugs, not the dogs!
function howManyDalmatians(number) {

    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

    var respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2]

    return respond
}

// console.log(howManyDalmatians(101))


//Suzuki needs help lining up his students!

function lineupStudents(students) {
    let stArr = students.split(' ');
    return stArr.sort((a, b) => a.length - b.length).sort().sort((a, b) => a.length - b.length).reverse()
}

// console.log(lineupStudents('Yoshikazu Toshiyuki Takahiro Tamotsu Toshio Naoko Norio Shuji Yori'))


function longestPossible(play) {
    let songs = [
        {artist: 'Artist', title: 'Title String', playback: '04:30'}
    ]
    let res = songs.filter(el => el.playback.slice(0, 2) * 60 + +el.playback.slice(-2) <= play)
        .sort((a, b) => b.playback > a.playback ? 1 : -1);
    return res.length ? res[0].title : false;
}

//Sort My Textbooks

function sorter(textbooks) {
    return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase()
        ? 1
        : a.toLowerCase() < b.toLowerCase()
            ? -1
            : 0)
}

// console.log(sorter(['Algebra', 'History', 'Geometry', 'English']))
// console.log(sorter(['**english', '$istory', 'Alg#bra', 'Geom^try']))


//Working with arrays I (and why your code fails in some katas)

function withoutLast(arr) {
    // Fix it
    // arr.pop(); // removes the last element
    return arr.slice(0, arr.length - 1); // removes the last element
}

// console.log(withoutLast([ 1, 2, 3, 4, 5 ]))


// Divide and Conquer

function divCon(x) {
    let numbers = [];
    let strings = [];

    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'string') {
            strings.push(x[i])
        } else {
            numbers.push(x[i])
        }
    }
    numbers = numbers.reduce(function (sum, elem) {
        return sum + elem
    }, 0)

    strings = strings.reduce(function (sum, elem) {
        return sum + (+elem)
    }, 0)

    return numbers - strings
}

//function divCon(x){
//   return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
// }

// console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))


// Check the exam

function checkExam(array1, array2) {
    let res = 0;

    for (let i = 0; i < array2.length; i++) {
        // debugger
        if (array2[i] === "") {
            res += 0
        } else if (array1[i] === array2[i]) {
            res += 4
        } else if (array1[i] !== array2[i]) {
            res -= 1
        }
    }
    if (res >= 0) {
        return res
    } else {
        return 0
    }
}

// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]))

// Convert an array of strings to array of numbers

function toNumberArray(stringarray) {
    return stringarray.map(el => JSON.parse(el))
}

// console.log(toNumberArray(["1.1","2.2","3.3"]))

// Basics 04: Rotate Matrix

function rotateMatrix(matrix) {
    let column = []
    let length = matrix[0].length

    for (let i = length - 1; i >= 0; i--) {
        let row = [];
        for (let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i])
        }
        column.push(row)
    }
    return column
}

// console.log(rotateMatrix( [[17,-32,49,64,-30,9,-55,-80],[44,-25,69,-62,-89,-73,-44,64]]))

// Sort an array by value and index

function sortByValueAndIndex(array) {
    return array
        .map((x, i) => [x, x * i + x])
        .sort((a, b) => a[1] - b[1])
        .map((a) => a[0])
}

// console.log(sortByValueAndIndex([ 23, 2, 3, 4, 5 ]))

// Invert values

function invert(array) {
    return array.map(el => el < 0 ? Math.abs(el) : Number('-' + el))
}

// console.log(invert([1,-2,3,-4,5]))

// Find the Difference in Age between Oldest and Youngest Family Members

function differenceInAges(ages) {
    let agesArr = ages.sort(function (a, b) {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    }) //[14, 32, 57, 99]
    let finArr = []
    for (let i = 0; i < 1; i++) {
        finArr.push(agesArr[0])
        finArr.push(agesArr[agesArr.length - 1])
    }
    let diff = finArr[1] - finArr[0]
    finArr.push(diff)
    return finArr
}

// function differenceInAges (ages) {
//
//     let max = Math.max(...ages),
//         min = Math.min(...ages)
//     diff = max - min
//
//     return [min, max, diff]
// }

// console.log(differenceInAges([57, 99, 14, 32]))

// Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
    let finArr = arr1.concat(arr2);
    let filteredArr = finArr.filter((el, id) => finArr.indexOf(el) === id)

    return filteredArr.sort(function (a, b) {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
}

//https://the-evening-code.com/posts/how-to-remove-array-duplicates
// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))

// Transportation on vacation

function rentalCarCost(d) {
    if (d < 3) {
        d *= 40
    } else if (d >= 3 && d < 7) {
        d = (d * 40) - 20
    } else {
        d = (d * 40) - 50
    }
    return d
}

// console.log(rentalCarCost(3))

// CSV representation of array

function toCsvText(array) {
    return array.join('\n')
}

// console.log(toCsvText([
//     [ 0, 1, 2, 3, 45 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]
// ]))

// Chuck Norris VII - True or False? (Beginner)

function ifChuckSaysSo() {
    return !true
}

// console.log(ifChuckSaysSo())

// Powers of 2

function powersOfTwo(n) {
    let arr = []
    let i = 0

    while (n >= i) {
        arr.push(Math.pow(2, i))
        i++
    }
    return arr
}

// console.log(powersOfTwo(4))


// Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft;
};

// console.log(zeroFuel(100, 50, 1))


// Sum The Strings

function sumStr(a, b) {
    return String(Number(a) + Number(b));
}

// console.log(sumStr("34","5"))


// Well of Ideas - Easy Version

function well(x) {
    let goods = 0
    x.map(el => el === 'good' ? goods++ : '')
    if (goods > 0 && goods <= 2) {
        return 'Publish!'
    } else if (goods > 2) {
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }
}

// console.log(well(["good","bad","bad","bad","bad","bad","bad","bad","bad","good"]))

// My head is at the wrong end!

function fixTheMeerkat(arr) {
    return arr.reverse()
}

// console.log(fixTheMeerkat(["tail", "body", "head"]))

// I love you, a little , a lot, passionately ... not at all
// https://habr.com/ru/articles/770522/
function howMuchILoveYou(nbPetals) {
    let loveArr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];

    return loveArr[(nbPetals - 1) % 6]
}

// console.log(howMuchILoveYou(200))


// https://learn.javascript.ru/map-set
// https://sky.pro/wiki/javascript/udalenie-dublikatov-iz-massiva-obyektov-v-java-script/
const array = [{a: 1}, {b: 1}, {b: 2}, {a: 1}, {c: 1}];

const removeDuplicates = (arr) => {
    const unique = Array.from(new Set(arr.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
    return unique
}

// console.log(removeDuplicates(array))


// Sum Arrays

function sum(numbers) {
    "use strict";
    let res = 0;
    for (let el of numbers) {
        res += el
    }
    return res
}

// console.log(sum([]))

// Count the Monkeys!

function monkeyCount(n) {
// your code here
    let monkeys = [];
    for (let i = 1; i <= n; i++) {
        monkeys.push(i)
    }
    return monkeys
}

// console.log(monkeyCount(9))

// Get the mean of an array

function getAverage(marks) {
    //TODO : calculate the downward rounded average of the marks array
    let average = 0;
    for (let el of marks) {
        average += el
    }
    return Math.floor(average / marks.length)
}

// console.log(getAverage([1,1,1,1,1,1,1,2]))

// Enumerable Magic #1 - True for All?

function all(arr, fun) {
    return arr.every(fun)
}

// console.log(all([1, 2, 3, 4, 5], function (v) {
//     return v > 10
// }))

// Parse nice int from char problem

function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :)
    let strArr = inputString.split('')
    return Number(strArr[0])
}

// console.log(getAge("9 years old"))

// All Star Code Challenge #18

function strCount(str, letter){
    //code here
    let count = 0
    let strArr = str.split('')
    for (let el of strArr) {
        if (el === letter) {
            count += 1
        }
    }
    return count
}

// console.log(strCount('Hello', 'l'))

// Keep up the hoop

function hoopCount (n) {
    //your code goes here
    return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks"
}

// console.log(hoopCount(3))

// Find Nearest square number

function nearestSq(n){
    // your code
    return Math.pow(Math.round(Math.sqrt(n)), 2)
}

// console.log(nearestSq(111))