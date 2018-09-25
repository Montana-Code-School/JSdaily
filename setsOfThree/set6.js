import poe from '../resources/randomPoe.json';
const exports = module.exports = {};

/************************
  Exercise 1: This function should take in a string that is a city name
   with any number of upper and lowercase letters and sanitize the string
   for numbers, and all these characters:  "," : "." : "?".  The returned
   string should be Title Cased, i.e.  ",doDge citY" -> "Dodge City"
************************/

const titleCase = (string) => {

}

/***********************
  Exercise 2: Take in a block of random words used by Edgar Allen Poe.  The
  block is an array of objects with a key "text" and value of the word collection.
  Your function should return an array with only the a words.
***********************/

const alphaToPoe = (poe) => {

}

/***********************
  Exercise 3: Take in a number in 8bit binary, then calculate and return it as a simple number

  Hints:
  [2^8,2^7,2^6,2^5,2^4,2^3,2^2,2^1]

  1 through 10 in binary (integer on left, binary on right):

  0  | 0
  1  | 1
  2  | 10
  3  | 11
  4  | 100
  5  | 101
  6  | 110
  7  | 111
  8  | 1000
  9  | 1001
  10 | 1010

***********************/

const numberFromBinary = (binary) => {

}

module.exports = {
  titleCase,
  alphaToPoe,
  numberFromBinary
}
