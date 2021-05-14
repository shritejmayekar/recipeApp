
const mongoose = require("mongoose");
//connection to db
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.MONGO_DB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => {
        console.log("Connected to db!");
        app.listen(3000, () => console.log("Server Up and running"));
    });
