import mongoose from "mongoose";
let initialized = false;

// The error is the use of parentheses `()` instead of curly braces `{}` for the function body.
// Arrow functions with parentheses return an expression, but here you have statements (not a single expression).
// It should be curly braces `{}` for a block body.

export const connect = async () => {
    mongoose.set('strictQuery', true);

    if (initialized) {
        console.log('MongoDB already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
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