const mongoose = require("mongoose")
require("dotenv").config()

// ryankarpen2015
// 93Fir18GsLREooXi
// mongodb+srv://ryankarpen2015:<password>@cluster0.sycimnj.mongodb.net/

const uri = process.env.MONGODB_CONNECT_URI


async function main(){
    try {

        mongoose.set("strictQuery", true)

        await mongoose.connect(uri)
        
        console.log("conectado ao banco")
        
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main