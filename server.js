import express from 'express';

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato brincando no jardim",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gato dormindo na cadeira",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Gato curioso olhando para a câmera",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Gato preto em uma janela",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descricao: "Gato e sua tigela de comida",
        imagem: "https://placecats.com/millie/300/150"
    }
];


// inicializa o express. o app representa o servidor (instancia)
const app = express(); 

app.use(express.json()); // devolver a estrutura em json para o cliente

app.listen(3000, () => {
    console.log("Servidor escutando...");
}); 

// o servidor tá escutando na porta 3000
// listen:  função que "sobe" o servidor

// define as rotas
app.get("/posts", (req, res) => {
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

