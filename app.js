const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.get('/', (req, res) => {
    res.send("Jesus te ama muito"); 
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})