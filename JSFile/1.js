const fs = require('fs');
function read(){
    try
    {
        fs.readFile('s' , function (err,data)
        {
            if(err) throw err
        });
    }
    catch(err)
    {
        console.log("err")
    }


}

read();
