const app = require("./app");

// Porta em que o servidor vai rodar
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
