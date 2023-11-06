let btn = document.getElementById('btn')
let reset = document.getElementById('demo')

btn.addEventListener('click', () => {
    let nome = prompt('Qual o seu nome?')
    let idade = prompt('Quantos anos você tem?')
    let linguagem = prompt('Qual a linguagem de programação você está estudando?')
    let gosto = Number(prompt(`Você gosta de estudar ${linguagem}? Responda 1 para Sim ou 2 para Não.`))
    let p1 = document.getElementById('Q1')

    alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`)

    p1.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`

    if (gosto == 1) {
        document.getElementById('Q2').innerHTML = "Muito bom! Continue estudando e você terá muito sucesso."
    } else {
        document.getElementById('Q2').innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?"
    }

    reset.innerHTML = "Reiniciar questionário?"
})
