//.dotenv
require("dotenv").config();

const express = require("express");


//MongoData Import
require("./config/db.config")

const app = express();

const PORT = process.env.PORT;

//Server ko batane ke liye ki json use kar rahe hai
app.use(express.json())

app.use("/api" , require("./routes/index"))

app.listen(PORT , (err)=>{
    if (err) {
        console.log("Errorrrrr : ", err);
        return false;
    }
    console.log("Started.......");
})