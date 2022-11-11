const express = require("express");
const { restart } = require("nodemon");
const app = express();
const ytdl = require("ytdl-core");

app.set("view engine", "ejs");

app.listen(3001, ()=>{
    console.log('server is running on https://localhost:3001');
})


app.get("/",(request,res)=>{
    return  res.render("index.js");
})

//Creando la ruta de descarga
app.get('\download' , (req,res) => {
    //Guardo la id ejemplo "https://www.youtube.com/watch?v=    o85OkeVtm7k "
    const v_id = req.query.url.split("v=")[1];

})

app.get("/download",async(req,res) => {
    const v_id = req.query.url.split('v=')[1];
    const info = await ytdl.getInfo(req.query.url);

    return res.render("download",{
        url: "https://www.youtube.com/embed/" + v_id,
        info : info.formats.sort((a,b)=>{
            return a.mimeType < b.mimeType;

        })
    })
})