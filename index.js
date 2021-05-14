const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./server/router/userRouter");
const recipeRouter = require("./server/router/recipeRouter");

dotenv.config();


app.use(express.urlencoded({
    extended: true
}));

/// User Routes
app.use('/user',userRouter)

/// Recipe Routes
app.use('/recipe',recipeRouter)


/// conection to db
mongoose.connect(process.env.MONGO_DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {

    /// starting the server
    app.listen(process.env.PORT, () => {
        console.log("listening on process port:"+process.env.PORT);
    })
});


