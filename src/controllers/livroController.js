import livro from "../models/Livro"; // Importando o model dos livros schema

class LivroController {
    // Listando livros buscando do banco.
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);     
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição.` })
        }

    }

    // Listando livros especificos buscando do banco de dados.
    static async listarLivroPorId (req, res) {
        try {
            const idLivro = req.params.id;
            const livroEncontrado = await livro.findById(idLivro);
            res.status(200).json(livroEncontrado);     
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição do livro.` })
        }

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

    // Listando livros especificos buscando do banco de dados.
    static async atualizarLivro (req, res) {
        try {
            const idLivro = req.params.id;
            await livro.findByIdAndUpdate(idLivro, req.body); // passando o Id e o segundo campo novos dados de att
            res.status(200).json({ message: "Livro atualizado!" });     
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na atualização do livro.` })
        }

    }
    
};

export default LivroController;

