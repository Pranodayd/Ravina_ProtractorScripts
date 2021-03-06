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

      it('Multiplication testcase', async function(){
      element(by.model("first")).sendKeys("6");
      let AllOptions=await element.all(by.options("value for (key, value) in operators"));
      console.log("Number of Operators "+AllOptions.length)
      AllOptions[3].click();
      element(by.model("second")).sendKeys("2");
      element(by.cssContainingText("button[class='btn']", "Go!")).click();
      console.log(await element(by.tagName("h2")).getText());
      console.log(await AllOptions[3].getAttribute("value"));
      browser.sleep(10000);

      });
      it('Division testcase', async function(){
        element(by.model("first")).sendKeys("6");
        let AllOptions=await element.all(by.options("value for (key, value) in operators"));
        console.log("Number of Operators "+AllOptions.length)
        AllOptions[1].click();
        element(by.model("second")).sendKeys("2");
        element(by.cssContainingText("button[class='btn']", "Go!")).click();
        console.log(await element(by.tagName("h2")).getText());
        console.log(await AllOptions[1].getAttribute("value"));
        browser.sleep(10000);



  });

  it('Modulo testcase', async function(){
    element(by.model("first")).sendKeys("3");
    let AllOptions=await element.all(by.options("value for (key, value) in operators"));
    console.log("Number of Operators "+AllOptions.length)
    AllOptions[2].click();
    element(by.model("second")).sendKeys("2");
    element(by.cssContainingText("button[class='btn']", "Go!")).click();
    console.log(await element(by.tagName("h2")).getText());
    console.log(await AllOptions[2].getAttribute("value"));
    browser.sleep(10000);



});

it('Fetching Addition result from Table testcase', async function() {
      
        
  element(by.model("first")).sendKeys("5");
  let AllOptions=await element.all(by.options("value for (key, value) in operators"));
  console.log("Number of Operators "+AllOptions.length)
  AllOptions[0].click();
  
  element(by.model("second")).sendKeys("2");
   element(by.cssContainingText("button[class='btn']","Go!")).click();
   let resultelement=element(by.className("table")).element(by.xpath("./descendant::tr[2]/descendant::td[3]"));
   
   console.log("Result from Table : "+await resultelement.getText());


   browser.sleep(10000);  
  });

});