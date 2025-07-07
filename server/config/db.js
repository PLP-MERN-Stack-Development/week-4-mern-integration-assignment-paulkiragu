const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
           useNewUrlParser: true,
           useUnifiedTopology: true
        });
    } catch (error) {
        console.error("error connecting to the database",error.message);
        process.exit(1);
    }
};

module.exports = connectDb;