// camada padrão que tem a responsabilidade de lidar com os dados, definindo sua estrutura e interagindo diretamente com o banco de dados
import { ObjectId } from "mongodb";
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

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("db");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id); // guardar o id do post que quer atualizar de modo que o mongo entenda
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost} );
}