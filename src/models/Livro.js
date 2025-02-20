import mongoose from "mongoose";

// Esquema (estrutura) de todos os livros que serão criados
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number }
}, { versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;