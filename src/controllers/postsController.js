// camada padrão que tem a responsabilidade de lidar com as requisições e as respostas do servidor

import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts); 
}
