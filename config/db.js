const mongoose = require('mongoose');

const connectToMongoDb = async () => {
    try{
        const res = await mongoose.connect(process.env.MONGO_URI);
        if(res){
            console.log("Connected to database");
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = connectToMongoDb;