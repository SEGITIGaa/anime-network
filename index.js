const express = require("express");
const app = express();
const port = 5000;

// Mendefinisikan array yang berisi nama-nama file
const files = [
    "AnimeByGenre-BpOBBrtj",
    "Anime-Cljkfziz",
    "BackBtn-w3Jl13pc",
    "Episode-Dkp8Wd53",
    "Episodes-cT83Rxiw",
    "Home-C2J2WVIm",
    "index-CO1LhOMI",
    "Layout-B1EvdRiN",
    "OngoingAnimes-yo-obrLa",
    "Ongoing-R63_15n2",
    "SmallCard-CiEUXqrQ"
];

// Mengatur rute untuk setiap file dalam array
files.forEach(file => {
    app.get(`/assets/${file}.js`, (req, res) => {
        res.sendFile(__dirname + `/public/assets/${file}.js`);
    });
});

// Mengatur rute untuk file CSS index-CfmloJ6P.css
app.get("/assets/index-CfmloJ6P.css", (req, res) => res.sendFile(__dirname + "/public/assets/index-CfmloJ6P.css"));

// Mengatur rute untuk file gambar loading-icon.png
app.get("/loading-icon.png", (req, res) => res.sendFile(__dirname + "/public/assets/loading-icon.png"));

// Mengatur rute fallback untuk mengirim file index.html jika route tidak ditemukan
app.get("*", (req, res) => {
    return res.sendFile(__dirname + "/index.html");
});

// Menjalankan server pada port yang ditentukan
app.listen(port, () => console.log("Server On"));
