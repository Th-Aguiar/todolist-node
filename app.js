const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.get('/', (req, res) => {
    const date = new Date();
    const today = date.getDay

    if(today === 0 || today === 6){
        res.send("Voce precisa descansar");
    }else{
        res.send("Dia de trabalhar"); 
    }  
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})