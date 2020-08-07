import {browser, element, by, Button} from "protractor";
//describe is SUITE of testcases
describe('Check all Arithmetic operations', function() {
    //it is SINGLE testcase
    it('Addition testcase', async function() {
      
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model("first")).sendKeys("2");
      element(by.model("second")).sendKeys("5");
      element(by.cssContainingText("button[class='btn']","Go!")).click();
      console.log(await element(by.tagName("h2")).getText());
      console.log(await element(await by.repeater('result in memory')).getSize());
      browser.sleep(10000); 

   
    
    });
})