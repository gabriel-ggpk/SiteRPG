const express = require("express")
const app = express()


app.get("/",function(req,res){
   res.send("tudo certo meu chapa")
})





app.listen(8000, function(){
    console.log("site funcionando");
});