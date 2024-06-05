const express = require("express");
const cors = require("cors");
const movies = require("./movies.json");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));



app.get("/movies",(req,res) =>{
    return res.json(movies);
});


app.get("/movies/titles",(req,res) =>{
    var titles = [];
    movies.map(movie => {
        titles.push(movie.title);
    } );
    return res.json(titles);
});


app.get("/movies/posters",(req,res) =>{
    var posters = [];
    movies.map(movie => {
        posters.push(movie.posterUrl);
    } );
    return res.json(posters);
});

app.get("/movies/ids",(req,res) =>{
    var ids = [];
    movies.map(movie => {
        ids.push(movie.id);
    } );
    return res.json(ids);
});
app.get("/movies/years",(req,res) =>{
    var years = [];
    movies.map(movie => {
        years.push(movie.year);
    } );
    return res.json(years);
});


const PORT = process.env.PORT;
app.listen(PORT,() =>console.log("server started ... "));