const express = require("express");
const app = express();
app.use(express.json());

let animes = [
    {
        id: 1,
        name: "Naruto",
        genre: "Ação",
        studio: "Pierrot",
    },
];

app.get("/animes", (req, res) => {
    res.json(animes);
});

app.get("/animes/:id", (req, res) => {
    const anime = animes.find((a) => a.id === parseInt(req.params.id));
    if (!anime) {
        return res.status(404).send("Anime não encontrado.");
    }
    res.json(anime);
});

app.post("/animes", (req, res) => {
    const { name, genre, studio } = req.body;

    if (!name || !genre || !studio) {
        return res
            .status(400)
            .send("Todos os campos (name, genre, studio) são obrigatórios.");
    }

    const newAnime = {
        id: animes.length + 1,
        name,
        genre,
        studio,
    };

    animes.push(newAnime);
    res.status(201).json(newAnime);
});

app.put("/animes/:id", (req, res) => {
    const { name, genre, studio } = req.body;
    const anime = animes.find((a) => a.id === parseInt(req.params.id));

    if (!anime) {
        return res.status(404).send("Anime não encontrado.");
    }

    if (!name || !genre || !studio) {
        return res
            .status(400)
            .send("Todos os campos (name, genre, studio) são obrigatórios.");
    }

    anime.name = name;
    anime.genre = genre;
    anime.studio = studio;

    res.json(anime);
});

app.delete("/animes/:id", (req, res) => {
    const index = animes.findIndex((a) => a.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send("Anime não encontrado.");
    }

    animes.splice(index, 1);
    res.status(204).send();
});

module.exports = app;
