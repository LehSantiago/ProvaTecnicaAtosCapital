function fazGet(url) {

    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdEmail = document.createElement("td");
    
    tdId.innerHTML = usuario.id
    tdNome.innerHTML = usuario.name
    tdEmail.innerHTML = usuario.email

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdEmail);

    return linha;

}

function main() {
    let data = fazGet("https://gorest.co.in/public/v2/users");
    let usuarios = JSON.parse(data)
    let tabela = document.getElementById("tableClient")
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha)
    });

}


main()