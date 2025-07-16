import mongoose from "mongoose";
let initialized = false;

//create a connection to MongoDB
export const connect = async () => {
    mongoose.set('strictQuery', true);

    if (initialized) {
        console.log('MongoDB already connected');
        return;
    }
    // when if the connection is already established, do not connect again
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "movie-app",
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        initialized = true;
        console.log('MongoDB connected');
    } catch(error) {
        console.log('MongoDB connection error: ', error);
    }
};