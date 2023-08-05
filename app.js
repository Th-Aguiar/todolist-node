const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

//Configuração EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const date = new Date();
    const today = date.getDay();
    let day = '';

    switch (today) {
        case 0:
            day = 'Domingo';
            break;
        case 1:
            day = 'Segunda-Feira';
            break;
        case 2: 
            day = 'Terça-Feira';
            break;
        case 3:
            day = 'Quarta-Feira';
            break;
        case 4:
            day = 'Quinta-Feira';
            break;
        case 5:
            day = 'Sexta-feira';
            break;
        case 6:
            day = 'Sábado';
            break;
        default:
            console.log('Ocorreu algum erro no Switch');
            break;
    }
    
    res.render('list', {day: day});
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})