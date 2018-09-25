import chai from 'chai';
const set9 = require('../setsOfThree/set9');

describe('Set #9: ', () => {
  xdescribe('Exercise 1: Trimorpic Numbers', () => {
    it('This function should return a boolean', () => {
      expect(set9.triMorph(4)).to.be.a("boolean")
    })
    it('This function should return true if cubed value ends in the number', () => {
      expect(set9.triMorph(249)).to.eql(true)
    })
    it('This function should return false if cubed value does not end in the number', () => {
      expect(set9.triMorph(12)).to.eql(false)
    })
  });

  xdescribe('Exercise 2: Binary Search Tree', () => {
    const BST = { x: 5, l: { x: 3, l: { x: 20, l: null, r: null },
      r: { x: 21, l: null, r: null } },
      r: { x: 10, l: { x: 1, l: null, r: null }, r: null }}
    it('This function should return a number', () => {
      expect(set9.binarySearchTree(BST)).to.be.a('number')
    })
    it('The depth of this search tree should be 2', () => {
      expect(set9.binarySearchTree(BST)).to.eql(2)
    })
  })

  xdescribe('Exercise 3: Vigenere\'s Cipher', () => {
    const test = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'
    const testLower = 'the quick brown fox jumps over the lazy dog'
    const res = 'TIG QVKCL DRPYN GQX KWMQU OWGR UJE MCZZ FOH'
    const resLower = 'tig qvkcl drpyn gqx kwmqu owgr uje mczz foh'
    const res2 = 'ZOC WBGIR ZXVUT MMD QSSWQ UCCX AFK SYFF BUN'
    const key = 'abc'
    const key2 = 'ghy'
    it('This function should return a string', () => {
      expect(set9.vigenereCipher(test, key)).to.be.a('string')
    })
    it('This function should return the encrypted string', () => {
      expect(set9.vigenereCipher(test, key)).to.eql(res)
    })
    it('This function maintain case ', () => {
      expect(set9.vigenereCipher(testLower, key)).to.eql(resLower)
    })
    it('This function should take different keys', () => {
      expect(set9.vigenereCipher(test, key2)).to.eql(res2)
    })
  });
});
