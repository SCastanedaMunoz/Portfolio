const express = require("express");
const logger = require("morgan");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

const htmlRoutes = require("./routes/html-routes");

app.use(htmlRoutes);

app.listen(PORT, ()=> {
    console.log(`App Running on Port:${PORT}`);
});