(function(){
  'use strict';
  var chai = require('chai');
  var expect = chai.expect;

  var Cloth = require('../app/testsdata.js');
  describe("CLoth Class: Create a Cloth, and wear it", function() {

    it("The CLoth should be a type of `object`, and an instance of the `Cloth` class", function() {
      var dress = new Cloth('Versace');
      expect(typeof dress).to.equal(typeof {});
      expect(dress instanceof Cloth).to.be.true;
    });

    it("The cloth should be called 'General' if no name is passed as a parameter", function() {
      var gm = new Cloth();
      expect(gm.brands).to.equal('General');
      expect(gm.sizes).to.be.equal('Medium');
    });

    it("The Cloth name and designer should be a property of the car", function() {
      var tops  = new Cloth('Wetzeal', '8');
      expect(tops.brands).to.be.equal('Wetzeal');
      expect(tops.sizes).to.be.equal('8');
    });

    it("The cloth shoud have top designers doors except its a underwears", function() {
      var underwears  = new Cloth('Underwears', '8',4000);
      expect(underwears.price).to.equal(4000);

      var pantie = new Cloth('Pants', '6',200);
      expect(pantie.price).to.be.equal(200);
      pantie.wearPantie();
      expect(pantie.isOn).to.be.true;
      expect((function(){return new Cloth('Victoria Secret', 'female',1500);}()).price).to.be.equal(1500);
    });

    

  });
})();