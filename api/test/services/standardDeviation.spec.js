const chai = require("chai");
const expect = chai.expect;
const stdDeviationService = require('../../services/standardDeviation')();

describe("Test calculate function of StandardDeviation service", function () {
  it("Should return the standard deviation and mean values for the first test of PSP0 (Column1)", function (done) {
    const numbers = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    const expectedResult = {
      "mean": "550.60",
      "standardDeviation": "572.03"
    };
    
    const result = stdDeviationService.calculate(numbers);
    
    expect(result).to.eql(expectedResult);
    
    done();
  });

  it("Should return the standard deviation and mean values for the first test of PSP0 (Column2)", function (done) {
    const numbers = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    const expectedResult = {
      "mean": "60.32",
      "standardDeviation": "62.26"
    };
    
    const result = stdDeviationService.calculate(numbers);
    
    expect(result).to.eql(expectedResult);
    
    done();
  });

  it("Should return 0 for empty array of numbers", function (done) {
    const numbers = [];
    const expectedResult = {
      "mean": "0.00",
      "standardDeviation": "0.00"
    };
    
    const result = stdDeviationService.calculate(numbers);
    
    expect(result).to.eql(expectedResult);
    
    done();
  });

  it("Should return 0 for invalid array of numbers", function (done) {
    const numbers = null;
    const expectedResult = {
      "mean": "0.00",
      "standardDeviation": "0.00"
    };
    
    const result = stdDeviationService.calculate(numbers);
    
    expect(result).to.eql(expectedResult);
    
    done();
  });
});
