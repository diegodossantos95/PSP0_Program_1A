const chai = require("chai");
const expect = chai.expect;
const varianceService = require('../../services/variance')();

describe("Test calculate function of Variance service", function () {
  it("Should return the variance value for the first test of PSP1 (Column1)", function (done) {
    const numbers = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    const expectedResult = "327214.71";
    
    const result = varianceService.calculate(numbers);
    
    expect(result).to.eql(expectedResult);
    
    done();
  });

  it("Should return the variance value for the first test of PSP1 (Column2)", function (done) {
    const numbers = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
    const expectedResult = "391417.88";
    
    const result = varianceService.calculate(numbers);
    
    expect(result).to.eql(expectedResult);
    
    done();
  });

  it("Should return the variance value for the first test of PSP1 (Column3)", function (done) {
    const numbers = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    const expectedResult = "3875.79";
    
    const result = varianceService.calculate(numbers);
    
    expect(result).to.eql(expectedResult);
    
    done();
  });

  it("Should return 0 for empty array of numbers", function (done) {
    const numbers = [];
    const expectedResult = "0.00";
    
    const result = varianceService.calculate(numbers);
    
    expect(result).to.eql(expectedResult);
    
    done();
  });

  it("Should return 0 for invalid array of numbers", function (done) {
    const numbers = null;
    const expectedResult = "0.00";
    
    const result = varianceService.calculate(numbers);
    
    expect(result).to.eql(expectedResult);
    
    done();
  });
});
