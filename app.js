const express = require("express")
const app = express()


app.get("/",function(req,res){
   res.render("index.html")
})





app.listen(process.env.PORT || 8080, function(){
    console.log("site funcionando");
});