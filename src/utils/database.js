const mongoose = require('mongoose');
const uri =
  'mongodb+srv://dayana:STStosXtBAb06Cz5@cluster0.fci00lm.mongodb.net/upgrade?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    const db = await mongoose.connect(uri);
    const { name, host } = db.connection;
    console.log(`Nombre de la BD  ${name} host: ${host}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connectDB };
