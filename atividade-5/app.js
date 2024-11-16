const express = require("express");
const app = express();
app.use(express.json()); // Para processar o corpo das requisições como JSON

// Banco de dados em memória (array de animes)
let animes = [
    {
        id: 1,
        name: "Naruto",
        genre: "Ação",
        studio: "Pierrot",
    },
];

// Listar todos os animes
app.get("/animes", (req, res) => {
    res.json(animes);
});

// Listar um anime por ID
app.get("/animes/:id", (req, res) => {
    const anime = animes.find((a) => a.id === parseInt(req.params.id));
    if (!anime) {
        return res.status(404).send("Anime não encontrado.");
    }
    res.json(anime);
});

// Criar um novo anime
app.post("/animes", (req, res) => {
    const { name, genre, studio } = req.body;

    // Validação
    if (!name || !genre || !studio) {
        return res
            .status(400)
            .send("Todos os campos (name, genre, studio) são obrigatórios.");
    }

    const newAnime = {
        id: animes.length + 1, // Geração de ID automático
        name,
        genre,
        studio,
    };

    animes.push(newAnime);
    res.status(201).json(newAnime);
});

// Atualizar um anime por ID
app.put("/animes/:id", (req, res) => {
    const { name, genre, studio } = req.body;
    const anime = animes.find((a) => a.id === parseInt(req.params.id));

    if (!anime) {
        return res.status(404).send("Anime não encontrado.");
    }

    // Validação
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

// Deletar um anime por ID
app.delete("/animes/:id", (req, res) => {
    const index = animes.findIndex((a) => a.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send("Anime não encontrado.");
    }

    animes.splice(index, 1);
    res.status(204).send();
});

module.exports = app;
