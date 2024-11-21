import express from 'express';
import conectarAoBanco from './src/config/dbConfig.js';

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// inicializa o express. o app representa o servidor (instancia)
const app = express(); 

app.use(express.json()); // devolver a estrutura em json para o cliente

app.listen(3000, () => {
    console.log("Servidor escutando...");
}); 

// o servidor tá escutando na porta 3000
// listen:  função que "sobe" o servidor

async function getTodosPosts() {
    const db = conexao.db("db");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

// define as rotas
app.get("/posts", async (req, res) => {
    const posts = await getTodosPosts();
    res.status(200).json(posts); 
}); 

function buscarPostsPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id); // verifica se bate com aquele id
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostsPorID(req.params.id); //pega o id da requisição
    res.status(200).json(posts[index]); 
}); 

// quando tiver nessa rota, mostra uma coisa determinada
// req: requisição
// res: resposta
// 200: ok do protocolo http
// send: função que mostra uma mensagem na página web do localhost
// :id: vai ser substituído pelo id
// findIndex: método do javascript para entrar em um array

