// camada padrão que tem a responsabilidade de lidar com os dados, definindo sua estrutura e interagindo diretamente com o banco de dados
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("db");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("db");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}