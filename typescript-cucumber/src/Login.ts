import { parseGherkinMessageStream } from "@cucumber/cucumber";
import { Builder, ThenableWebDriver, WebDriver , By, until} from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import { threadId } from "worker_threads";
let driver: ThenableWebDriver;
function myFunction()
{

    let result:boolean=false;
    let usrname:string="", passwrd="";
    usrname = ((document.getElementById("username")) as HTMLInputElement).value;
    passwrd = ((document.getElementById("password")) as HTMLInputElement).value;
    var userArray = ["Deepali", "Yogesh", "Swarali", "Aryan"];
    setTimeout('',2000);
    if ((usrname === "") || (passwrd === "")) 
    {
      result=false;
      alert("Username/ password can not be blank");
    } 
    else if((usrname.length<3)||(passwrd.length<8))
    {
      result=false;
      alert("Username/ password must be 8 characters long");
    }
    else 
    {
      for(var i=0;i<userArray[i].length;i++)
      {
        if ((usrname == userArray[i]) && (passwrd="password"))
        {
          //localStorage.setItem('user',JSON.stringify(usrname));
          result= true;
        }
      }
      if (result===false)
      {
        alert("invalid credentials");
        return confirm("Invaliiiiiiiiiiiiiid")
          
      }
      
    }
    return result;    
}
//# sourceMappingURL=Login.js.map