import mongoose from "mongoose";

async function conectaNaDatabase() {
    // mongodb+srv://admin:<db_password>@cluster0.ioepmcr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    mongoose.connect("mongodb+srv://admin:admin@cluster0.ioepmcr.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
};

export default conectaNaDatabase;