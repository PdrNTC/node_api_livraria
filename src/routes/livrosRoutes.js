import express from "express";
import LivroController from "../controllers/livroController";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.get("/livros", LivroController.cadastrarLivro);
routes.get("/livros/:id", LivroController.atualizarLivro);

export default routes;