import livro from "../models/Livro"; // Importando o model dos livros schema

class LivroController {
    // Listando livros buscando do banco.
    static async listarLivros (req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);     
    }

    // Função para cadastrar livro na API
    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body) // Enviando pelo mongoose para criar novo livro.
            res.status(201).json({ message: "Criado com sucesso", livro: novoLivro }); 
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` }); // Enviando erro para API.
        }
        
    }
};

export default LivroController;

