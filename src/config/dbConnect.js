import mongoose from "mongoose";

async function conectaNaDatabase() {
    // mongodb+srv://admin:<db_password>@cluster0.ioepmcr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};

export default conectaNaDatabase;