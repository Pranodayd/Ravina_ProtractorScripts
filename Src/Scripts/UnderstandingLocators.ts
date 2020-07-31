import {browser, element, by} from "protractor";
//describe is SUITE of testcases
describe('Check all Arithmetic operations', function() {
    //it is SINGLE testcase
    it('Addition testcase', function() {
      
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model("first")).sendKeys("2");
      browser.sleep(10000);  
    
    });

    it('Subtraction testcase', function() {
      
        
          
        
      });

  });
  