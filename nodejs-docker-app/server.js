const express = require('express')

const PORT = 8080;

//APP
const app = express()
app.get('/', (req, res)=> {
    res.send("안녕하세요 만나서 반가워요 제이름은 운식이에용!!헤헷>_<")
});

app.listen(PORT);
console.log("Server is running")