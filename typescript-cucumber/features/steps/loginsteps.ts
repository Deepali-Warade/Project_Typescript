import { Given, Then, When } from "@cucumber/cucumber";
import "chromedriver";
import "selenium-webdriver";
import { Builder, ThenableWebDriver, WebDriver , By, Alert, Browser, until} from "selenium-webdriver";

import { waitForDebugger } from "inspector";
import { Driver } from "selenium-webdriver/chrome";
import { assert } from "console";
let driver: ThenableWebDriver;


Given('user is on login page', async function()
{
   driver = new Builder().forBrowser("chrome").build();
    driver.manage().setTimeouts({ implicit: 1000, pageLoad: 3000, script: 3000 })
    let url:string ="http://127.0.0.1:5500/Website_files/login.html";
  //let url:string ="https://www.google.com";
    driver.get(url);
   (await driver).sleep(5000);
  
});

When('user enters {string} and {string}', function (username:string,password:string) 
{     
   driver.manage().window().maximize();
   driver.sleep(3000);
  //ls.loginfunction(username,password,driver);
    driver.findElement(By.id("username")).sendKeys(username);
   driver.findElement(By.id("password")).sendKeys(password);
   driver.findElement(By.id("loginbtn")).click();
   driver.sleep(2000);
    return 'When - user enter username and password'; 
});


Then("the user should be able to login", async function () {
 
   
   driver.wait(until.alertIsPresent());
      let alert : Alert = await driver.switchTo().alert();
      const alertmsg = await alert.getText();
      driver.sleep(2000);
      await alert.accept(); 
      //this is test
});



