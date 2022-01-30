const  {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf-8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    else{
        const first = result;
        console.log(first);
        readFile('./content/second.txt','utf-8',(err, result) =>{
            if(err){
                console.log(err);
                return
            }
            else{
                const second = result;
                console.log(second);
                writeFile('./content/resutl-async.txt',`result ${first}& ${second}`, (err,result) =>{
                    if(err){
                        console.log(err);
                        return
                    }
                    else{
                        console.log(result);
                    }
                })
        
            }
        })
    }
})