const set1 = require('../setsOfThree/set1');
import chai from 'chai';
const expect = chai.expect;

describe('Set #1', function(){
  xdescribe('returnWhatYearYouWereBorn', function(){
    it('should return a number',function() {
      expect(set1.returnWhatYearYouWereBorn(36)).to.be.a('number');
    });
    it('should return the year you were born', function(){
      expect(set1.returnWhatYearYouWereBorn(36)).to.eql(new Date().getFullYear() - 36);
    });
  });

  xdescribe('returnOnlyCitiesThatStartWith',function(){
    it('This function should return an array that is 95 elements long',function() {
      expect(set1.returnOnlyCitiesThatStartWith('c').length).to.eql(95);
    });
    it('The last city in the array should by Calument City',function() {
      expect(set1.returnOnlyCitiesThatStartWith('c').slice(-1)[0]).to.eql('Calumet City');
    });
    it('The first city in the array should by Chicago',function() {
      expect(set1.returnOnlyCitiesThatStartWith('c')[0]).to.eql('Chicago');
    });
  });

  xdescribe('returnSumOfPrimes',function(){
    it('This function should return the sum of all primes below 200000',function() {
      expect(set1.returnSumOfPrimes(2000000)).to.eql(142913828922);
    });
  });
});
