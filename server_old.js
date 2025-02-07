import http from "http";
// Criando servidor da forma crua sem biblioteca

const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Entrei na rota de livros",
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
});

// Escutando o evento da porta 3000 (conexão)
server.listen(3000, () => {
    console.log("Servidor escutando!");
});