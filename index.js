const express = require("express")
const app = express();
const cors = require("cors")
const client = require("./database/pgres")
app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>{
   res.status(200).json({message:"Server Started"});
})

app.listen(3000,()=>{
  console.log("Server Started")
})
