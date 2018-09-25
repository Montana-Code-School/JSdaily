import chai from 'chai';
import deck from '../resources/deck.json';
const set8 = require('../setsOfThree/set8');
const expect = chai.expect;

describe('Set #8', () => {
  xdescribe('Exercise 1: Should return the time', function(){
    it('Should take in a new date Object and return a formatted string', () => {
      expect(set8.aintNobody(new Date())).to.be.an("string");
    });
    it('Your string should be 8 chars long', () => {
      expect(set8.aintNobody(new Date()).length).to.eql(8);
    });
    it('If Split at the colons the first element should equal hours in a new date', () => {
      let d = new Date();
      expect(set8.aintNobody(d).split(":")[0]).to.eql(d.getHours());
    });
  });

  xdescribe('Exercise 2: Whats your best day?', function(){
    it('Should run in the console', () => {
    });
    it('With console.log', () => {
    });
    it('You know that thing the logs to the console', () => {
    });
  });

  xdescribe('Exercise 3: Three random cards', function(){
    it('This function must return an array', () => {
      expect(set8.tresRando(deck)).to.be.an("array");
    });
    it('The length of the returned array should equal 3', () => {
      expect(set8.tresRando(deck).length).to.eql(3);
    });
    it("Each object within the array should have keys: 'suit', 'code', 'image', 'images', 'value'", () => {
      expect(Object.keys(set8.tresRando(deck))).to.eql(['suit', 'code', 'image', 'images', 'value']);
    });
  });
});
