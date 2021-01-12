const express = require("express")
const app = express()

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + ''));

app.get("/",function(req,res){
   res.render("index.html")
})





app.listen(process.env.PORT || 8080, function(){
    console.log("site funcionando");
});