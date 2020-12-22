const http = require('http');
const dotenv = require('dotenv');
dotenv.config(); 
const config =  require('./config');
const app =  http.createServer((req,res)=>{
    if(req.method==='POST'){
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        res.write(JSON.stringify({code:'Success'}))

        return res.end()
    }
    res.writeHead(400);
    res.end("Please Place POST request");
})
app.listen(config.PORT,config.HOST,()=>console.log(`Server is Listening on port ${config.PORT}`))