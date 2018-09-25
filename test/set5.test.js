const set5 = require('../setsOfThree/set5');
import chai from 'chai';
const expect = chai.expect;

describe('Set #5', () => {
  xdescribe('Exercise 1: DNA Pairs', () => {
    it('This function should return an array', () => {
      expect(set5.pairElement("gcg")).to.be.a("array");
    });
    it('This function should return sets of DNA pairs', () => {
      expect(set5.pairElement("gcg")).to.eql([["G", "C"], ["C","G"],["G","C"]]);
    });
  });

  xdescribe('Exercise 2: Factorial', () => {
    it('This function takes in a number, and it must return the factorial of the number.', () => {
      expect(set5.factorial(5)).to.eql(120);
    });
  });

  xdescribe('Exercise 3: Simple Calculator ', () => {
    it('should return an object', () => {
      expect(set5.createCalc("divide", 4, 2)).to.be.an('object');
    });
    it('the returned object should have the keys output and readable', () => {
      expect(set5.createCalc("divide", 4, 2)).to.have.all.keys('output', 'readable');
    });
    it('the calculations should be correct, i.e. 20 divided by 4 should equal 5', () => {
      expect(set5.createCalc("divide", 20, 4).output).to.eql(5);
    });
    it('if there is an an error present in the system the ouput should contain an err key', () => {
      expect(set5.createCalc("divide", "d", 4)).to.have.key('err');
    });
    it('the returned object should have a human readable output that is a string', () => {
      expect(set5.createCalc("divide", 20, 4).readable).to.be.a('string');
    });
  });
});
