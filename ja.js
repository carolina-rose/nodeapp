//import function

const functions = require("./functions")
const path = require("path");

//uruchamiamy framework express (npm install express)

const express = require("express");
const app = express(); 

app.set("view engine", "hbs"); //<- ustawiam silnik hbs (handlebars)
app.use("/assets", express )

// ustalamy nasz port 

const port = 3000; 

//Ponizej sposob z czystego node, a zostawilam express
// const http = require('http');

// const handler = (request, response) => {
//     console.log('funkcja dziala'); 
//     response.end("<h1> Hello World </h1> <h3> Siemka </h3> <p> Lorem ipsum </p>")
// }

// const server = http.createServer(handler);

//dzieki metodzie get ustalamy response na stronie 
app.get("./", function(req,res){
   // res.send("Glowna domena ")
   res.render("index") //renderujemy strone 
})

app.get("./about", function(req,res){
    // res.send("Strona o mnie")
    res.render("about") //renderujemy strone 
})

//aplikacja slucha naszego portu, plus dodaje komunikat w przypadku bledu
app.listen(port, (err) => {
    if (err) {return console.log(`blad ${err}`)}
    console.log(`Serwer dziala na porcie ${port}`)
});

//instalujemy szablony HTML - np handlebars - npm install hbs --save
//bedziemy RENDEROWAC strone 
