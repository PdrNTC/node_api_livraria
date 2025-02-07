import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase(); // Instancia da conexão com o banco de dados.

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

const app = express(); //Instanciando a biblioteca express
app.use(express.json()) // Middleware permite acesso as req e respostas

const livros = [
    {
        id: 1,
        titulo: "O senhor dos Anéis",
    },
    {
        id: 2,
        titulo: "O Hobbit",
    }
]

function buscaLivroPorId(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.JS");
});

// Rota para listar todos os livros mockados no array
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

// Rota para listar livros de acordo com o ID passado no EndPoint
app.get("/livros/:id", (req, res) => {
    const indexLivro = buscaLivroPorId(req.params.id); // Params propriedade que vem do obj req
    res.status(200).json(livros[indexLivro]); // Exibindo o livro com o Index encontrado
});

// Rota para criar um novo livro no array de objetos
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro Cadastrado com sucesso!");
});

// Rota para alterar put ou patch um livro existente
app.put("/livros/:id", (req, res) => {
    const indexLivro = buscaLivroPorId(req.params.id);
    livros[indexLivro].titulo = req.body.titulo // substituindo o titulo de um objeto para o passado na API

    res.status(200).json(livros);
});

// Rota para deletar um livro existente
app.delete("/livros/:id", (req, res) => {
    const indexLivro = buscaLivroPorId(req.params.id);
    livros.splice(indexLivro, 1) // Splice localiza um elemento e deleta este elemento
    
    res.status(200).send("Livro deletado com sucesso!");
});

export default app; // Exportando o modulo para usar em Server.JS