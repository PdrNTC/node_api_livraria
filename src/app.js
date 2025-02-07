import express from "express";

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

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.JS");
});

// Rota para listar todos os livros mockados no array
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro Cadastrado com sucesso!");
});

export default app; // Exportando o modulo para usar em Server.JS