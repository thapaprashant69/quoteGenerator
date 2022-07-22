const fs = require('fs');
const http = require('http');

const generateRandomInteger =(max)=>{
    return(Math.floor(Math.random()*max)+1);
}


const server = http.createServer((req,res)=>{
    if(req.url==='/quotes'){
        fs.readFile("quotesWithAuthors.json","utf8",(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            let quotes = JSON.parse(data);
            

            res.writeHead(200,{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"});
            res.end(JSON.stringify(quotes[generateRandomInteger(quotes.length)]));
        })
    }

})


server.listen(8000,()=>{
    console.log("Server started at port 8000")
});

