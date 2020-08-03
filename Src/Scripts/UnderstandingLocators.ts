import {browser, element, by} from "protractor";
//describe is SUITE of testcases
describe('Check all Arithmetic operations', function() {
    //it is SINGLE testcase
    it('Addition testcase', async function() {
      
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model("first")).sendKeys("2");
      element(by.model("second")).sendKeys("5");
      element(by.cssContainingText("button[class='btn']","Go!")).click();
      console.log(await element(by.tagName("h2")).getText());
       
      browser.sleep(10000); 

   
    
    });

    it('Subtraction testcase', async function() {
      
        
      element(by.model("first")).sendKeys("5");
      let AllOptions=await element.all(by.options("value for (key, value) in operators"));
      console.log("Number of Operators "+AllOptions.length)
      AllOptions[4].click();
      
      element(by.model("second")).sendKeys("2");
      
      element(by.cssContainingText("button[class='btn']","Go!")).click();
      console.log(await element(by.tagName("h2")).getText());
      console.log(await AllOptions[4].getAttribute("value"));
      browser.sleep(10000);  
      });

  });
  