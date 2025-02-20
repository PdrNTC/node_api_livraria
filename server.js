import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

// Escutando o evento da porta 3000 (conexão)
app.listen(PORT, () => {
    console.log("Servidor escutando!");
});