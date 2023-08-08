const express = require('express');
const app = express();
//const bodyParser = require("body-parser"); Não usar, pois, o EXPRESS já possui um método interno de parser
const port = 3000;
//Path do node
const path = require('path');

//Variavel de armazenamento
let listItems = [];

//Usar um compressor do corpo requisição
//Parser interno do Express
app.use(express.urlencoded({extended: true}));

//Arquivos Static.
app.use(express.static(path.join(__dirname + '/public')));

//Configuração EJS
app.set('view engine', 'ejs');

//Rota principal
app.get('/', (req, res) => {
    //instância de um objeto date
    const date = new Date();
    
    // Configurações da formatação da data
    let options = {
        weekday: "long",
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    
    //Pega o dia e data atual do sistema
    let today = date.toLocaleString('pt-BR', options);
    
    //Renderização com parametros EJS
    res.render('list', {
        today: today,
        newListItem: listItems
    });
})

//Post Home
app.post('/', (req, res) => {
    //Armazenamento dos dados do corpo da requisição
    const data = req.body.todoInput;
   
    //Adicionar dados em uma array.
    listItems.push(data);

    //redirecionamento
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

