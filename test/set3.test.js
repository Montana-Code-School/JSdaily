const set3 = require('../setsOfThree/set3');
import chai from 'chai';
const expect = chai.expect;

describe('Set #3', () => {
  xdescribe('Exercise 1: Never a question in my mind', () => {
    it('should return a boolean', () => {
      expect(set3.neverQuestion('string')).to.be.a('boolean');
    });
    it('if the string is a question it should return false', () => {
      expect(set3.neverQuestion('string?')).to.eql(false);
    });
  });

  xdescribe('Exercise 2: Sk-werd Noombers', () => {
    it('should return a number', () => {
      expect(set3.sumSquareDiff(10)).to.be.a('number');
    });
    it('should return 2640 if it is passed ten', () => {
      expect(set3.sumSquareDiff(10)).to.eql(2640);
    });
    it('should return 25164150 if it is passed 100', () =>{
      expect(set3.sumSquareDiff(100)).to.eql(25164150);
    });
  });

  xdescribe('Exercise 3: Royal Flush, Spades', () => {
    let set3Arr = set3.spadesRoyalStraightFlush();
    let pickOne = Math.floor((Math.random() * 5) + 1);
    it('should return a array', () => {
      expect(set3Arr).to.be.a('array');
    });
    it('returned array should be 5 items long', () => {
      expect(set3Arr.length).to.eql(5);
    });
    it('a random card picked from your flush should contain keys: code, image, images, suit, value', () => {
      expect(Object.keys(set3Arr[pickOne])).to.eql(['code', 'image', 'images', 'suit', 'value']);
    });
    it('the last card in your flush should be an ACE', () => {
      expect(set3Arr[set3Arr.length-1].value).to.eql('ACE');
    });

  });
});
