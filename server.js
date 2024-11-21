import express from 'express';

// inicializa o express. o app representa o servidos
const app = express(); 
app.listen(3000, () => {
    console.log("Servidor escutando...");
}); 

// o servidor tá escutando na porta 3000
// listen:  função que "sobe" o servidor

// define as rotas
app.get("/", (req, res) => {
   res.status(200).send("Tudo funcionando! Seja bem-vindo!"); 
}); 

// quando tiver nessa rota, mostra uma coisa determinada
// req: requisição
// res: resposta
// 200: ok do protocolo http
// send: função que mostra uma mensagem na página web do localhost

