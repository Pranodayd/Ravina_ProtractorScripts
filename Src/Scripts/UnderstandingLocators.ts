import {browser, element, by} from "protractor";
//describe is SUITE of testcases
describe('Check all Arithmetic operations', function() {
    //it is SINGLE testcase
    it('Addition testcase', function() {
      
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model("first")).sendKeys("2");
      element(by.model("second")).sendKeys("5");
      element(by.cssContainingText("button[class='btn']","Go!")).click();
      browser.sleep(10000); 

   
    
    });

    it('Subtraction testcase', function() {
      
        
          
        
      });

  });
  