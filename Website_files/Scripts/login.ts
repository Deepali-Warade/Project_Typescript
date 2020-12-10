function myFunction() :boolean
{   
    var user = (<HTMLInputElement>document.getElementById("username")).value;
    var psw = (<HTMLInputElement>document.getElementById("Password")).value;
    var output =(<HTMLSpanElement>document.getElementById("output"));
    var listNames = ["Deepali","Yogesh","Teja","Swarali","Aryan"];
    var found:boolean;
    found=false;
    if((user=="") || (psw==""))
    {
        alert("Please enter username /password, it can not be blank");
        return false;
    }
    else if (user.length <= 20 &&user.length >= 3) 
        {
            for (let i = 0; i < listNames.length; i++)
            {
                if (listNames[i] === user)
                {
                    if(psw==="password")
                    {
                        found = true;                  
                        return true;
                    }
                    else
                    {
                        alert("Password is incorrect")
                        found = false;
                        return false;
                    }                        
                }              
            }
            if(found===false)
            {
                alert("Username is not found")
                return false;
            }
        } 
    else
        {
            alert("Username has to be between 3-20 characters.")
            return false;
        }
    
}
