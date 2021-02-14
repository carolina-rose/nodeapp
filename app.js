const functions = require("./functions")
const path = require("path");
const express = require("express");
const app = express();

const port = 3000;


app.set("view engine","hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")))
app.use("/js", express.static(path.join(__dirname,"./js")));

app.get("/", function(req,res){
    // res.send("Główna domena");
    res.render("index", {
        pageTitle: "Zajecia 14.02.2021 :)",
        subTitle: functions.subTitle,
        subsubTitle: functions.sample()
    })
})

app.get("/about",function(req,res){
    // res.send("<h3>Strona o mnie</h3> <h6> Nazywam się Mieszko I </h6>");
    res.render("about") //nie musialam dac rozszerzenia .hbs bo mam to w linijce 9 zdefiniowany silnik

})

app.listen(port, (err) => {
    if (err) { return console.log(`błąd ${err}`)}
    console.log(`serwer działa na porcie ${port}`)
})