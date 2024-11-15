document.getElementById("consultar-btn").addEventListener("click", () => {
    const cep = document.getElementById("cep").value;
    if (cep.length !== 8 || isNaN(cep)) {
        alert("Por favor, insira um CEP válido com 8 dígitos.");
        return;
    }
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.erro) {
                alert("CEP não encontrado.");
                return;
            }
            document.getElementById(
                "logradouro"
            ).textContent = `Logradouro: ${data.logradouro}`;
            document.getElementById(
                "bairro"
            ).textContent = `Bairro: ${data.bairro}`;
            document.getElementById(
                "cidade"
            ).textContent = `Cidade: ${data.localidade}`;
            document.getElementById(
                "estado"
            ).textContent = `Estado: ${data.uf}`;
            document.getElementById("resultado").style.display = "block";
        })
        .catch((error) => {
            console.error("Erro ao consultar o CEP:", error);
            alert("Erro ao consultar o CEP. Tente novamente.");
        });
});
