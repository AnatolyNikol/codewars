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

function solution(a, b){
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
function finalGrade (exam, projects) {
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
const areaOrPerimeter = function(l , w) {
    if (l === w) {
        return l * w
    } else {
        return  l + l + w + w
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
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

// console.log(sayHello(['Wallace','Russel','Osbourne'], 'Phoenix', 'Arizona'))


// Removing Elements
function removeEveryOther(arr){
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
let replaceDots = function(str) {
    return str.replace(/\./g, '-');
}

// console.log(replaceDots("one.two.three"))
