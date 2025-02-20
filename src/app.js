import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

//const conexao = await conectaNaDatabase(); // Instancia da conexão com o banco de dados.

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

const app = express(); //Instanciando a biblioteca express
routes(app); // Instanciando as rotas no APP com o express

function buscaLivroPorId(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

// Rota para deletar um livro existente
app.delete("/livros/:id", (req, res) => {
    const indexLivro = buscaLivroPorId(req.params.id);
    livros.splice(indexLivro, 1) // Splice localiza um elemento e deleta este elemento
    
    res.status(200).send("Livro deletado com sucesso!");
});

export default app; // Exportando o modulo para usar em Server.JS