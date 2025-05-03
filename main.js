function mostrarAlertar() {
    let nome = "Luiz"
    alert("Seja bem-vindo(a)," + nome)
}

mostrarAlertar()

function somar(valorA, valorB) {
    alert(valorA + valorB)
}

somar(20,12)

function mensagemBoasVindas(nome, cargo) {
    return `Seja bem-vindo(a) ${cargo} ${nome}`
}

let nome = prompt("Digite o nome do funcionário:")
let cargo = prompt("Digite o cargo do funcionário:")

alert(mensagemBoasVindas(nome, cargo))
console.log(mensagemBoasVindas(nome, cargo))