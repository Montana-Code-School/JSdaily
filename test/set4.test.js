const set4 = require('../setsOfThree/set4');
import chai from 'chai';
const expect = chai.expect;

describe('Set #4', () => {
  xdescribe('Exercise 1: pupCalc', () => {
    it('should return a number', () => {
      expect(set4.pupCalc(4)).to.be.a('number');
    });
    it('should return the age of your puppy in dog years', () => {
      expect(set4.pupCalc(4)).to.eql(28);
    });
  });

  xdescribe('Exercise 2: Lifetime Supply', () => {
    const answer = set4.lifetimeSupply(29, 90, 1, "candy BBAaaaaRRss");
    it('should return an object', () => {
      expect(answer).to.be.an('object');
    });
    it('the returned object should have the keys year, total, and readable', () => {
      expect(answer).to.have.all.keys('years', 'total', 'readable');
    });
    it('the year field should be equal to the total number of years yet to be lived', function(){
      expect(answer.years).to.eql(55);
    });
    it('the total field should equal the total number of snacks to be consumed', function(){
      expect(answer.total).to.eql(20075);
    });
    it('the readable field should have a readable output as demonstrated in the instructions', function(){
      expect(answer.readable.match(/ripe old age/) !== null).to.eql(true);
    });
  });

  xdescribe('Exercise 3: Palindromes', function(){
    it('This function accepts a string, and must return true or false if the string is a palindrome', function(){
      expect(set4.isPalindrome("racecar")).to.eql(true);
    });
  });
});
