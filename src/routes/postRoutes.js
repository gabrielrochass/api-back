// camada padrão que tem a responsabilidade de armazenar as rotas e definir qual controller será chamado

import cors from "cors";
import express from "express";
import multer from "multer";
import { atualizarNovoPost, listarPosts, postarPost, uploadImagem } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

// código para funcionar no windows
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({storage}) // middleware: upload de imagem 

const routes = (app) => {
    app.use(express.json()); // devolver a estrutura em json para o cliente
    app.use(cors(corsOptions));

    app.get("/posts", listarPosts); // não executa, apenas lista o que vai ser usado
    app.post("/posts", postarPost) // criar post
    app.post("/upload", upload.single("imagem"), uploadImagem)
    app.put("/upload/:id", atualizarNovoPost);
}

export default routes;