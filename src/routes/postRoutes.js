// camada padrão que tem a responsabilidade de armazenar as rotas e definir qual controller será chamado

import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json()); // devolver a estrutura em json para o cliente

    app.get("/posts", listarPosts); // não executa, apenas lista o que vai ser usado
}

export default routes;