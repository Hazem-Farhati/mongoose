const express=require("express")
const app=express();
const DBconnect =require("./db/DB_Connect")
require('dotenv').config()
const PORT = 5000;

DBconnect();
app.use(express.json());

app.use("/person",require("./routes/person"));


// app.get("/",(req,res)=>{
//     res.send('hello')
// })
app.listen(PORT,err=>err? console.log(err):console.log('mrigeaalaa aerddaz'));