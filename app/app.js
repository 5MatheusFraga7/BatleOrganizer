const express = require("express");
const app = express();
const { engine } = require("express-handlebars")

// ====== RUN SERVER =======

app.listen(8081, function(){
    console.log("Funcionando em: http://localhost:8081");
});


// ====== DB CONNECT =======

(async () => {
    
    const database = require('../db');
 
    try {

        await database.sync();

    } catch (error) {

        console.log(error);

    }

})();

// ======= TEMPLATE ENGINE =======

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "app/views");


// ======= ROUTES =======

app.get('/', function(req, res) {
    res.render("home");
})