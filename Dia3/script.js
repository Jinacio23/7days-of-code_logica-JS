let pergunta = document.getElementById('texto')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const input = document.getElementById('tecnologias')
const btnOk = document.getElementById('ok')
const btnCancel = document.getElementById('cancel')
let lista = document.getElementById('listaTecnologias')
const cabecalhoLista = document.querySelector('h2')

//pergunta 1
function perguntaUm(ok) {
    let opcao = ok 

    if (opcao == 1) {
        pergunta.innerHTML = 'O que deseja aprender depois?'
        btn1.innerHTML = 'Aprender React'
        btn2.innerHTML = 'Aprender Vue'
        btn1.setAttribute('onclick','perguntaDois(1)')
        btn2.setAttribute('onclick','perguntaDois(2)')

    } else if (opcao == 2) {
        pergunta.innerHTML = 'O que deseja aprender depois?'
        btn1.innerHTML = 'Aprender C#'
        btn2.innerHTML = 'Aprender Java'
        btn1.setAttribute('onclick','perguntaDois(1)')
        btn2.setAttribute('onclick','perguntaDois(2)')
    }
}

//Pergunta 2
function perguntaDois(ok) {
    let opcao = ok 

    if (opcao == 1) {
        pergunta.innerHTML = 'E depois, você escolheria se especializar nesta área ou seguir se desenvolvendo para fullstack?'
        btn1.innerHTML = 'Se especializar'
        btn2.innerHTML = 'Desenvolver fullstack'
        btn1.setAttribute('onclick','perguntaTres(1)')
        btn2.setAttribute('onclick','perguntaTres(2)')

    } else if (opcao == 2) {
        pergunta.innerHTML = 'E depois, você escolheria se especializar nesta área ou seguir se desenvolvendo para fullstack?'
        btn1.innerHTML = 'Se especializar'
        btn2.innerHTML = 'Desenvolver fullstack'
        btn1.setAttribute('onclick','perguntaTres(1)')
        btn2.setAttribute('onclick','perguntaTres(2)')
    }
}

//Pergunta 3
function perguntaTres(ok){
    let opcao = ok 
    let subTexto = document.createElement('p')
    subTexto.innerHTML = 'Tem mais alguma tecnologia que você gostaria de aprender?' 

    if (opcao == 1) {
        pergunta.innerHTML = 'Você escolheu se desenvolver na área, parabéns, bons estudos'
        btn1.style.display = 'none'
        btn2.style.display = 'none'
        btnOk.style.display = 'inline'
        btnCancel.style.display = 'inline'
        input.style.display = 'block'
        cabecalhoLista.style.display = 'block'
        document.getElementById('vazio').appendChild(subTexto)

    } else if (opcao == 2) {
        pergunta.innerHTML = 'Você escolheu se dedicar a se tornar fullstack, parabéns, bons estudos'
        btn1.style.display = 'none'
        btn2.style.display = 'none'
        btnOk.style.display = 'inline'
        btnCancel.style.display = 'inline'
        input.style.display = 'block'
        cabecalhoLista.style.display = 'block'
        document.getElementById('vazio').appendChild(subTexto)
    }
}

//Input de tecnologias
function resposta(resp){

    if(resp == 'sim'){
        let paragrafo = document.createElement('p')
        paragrafo.innerHTML = input.value
        lista.appendChild(paragrafo)  
    } else {
        lista.innerHTML = ""
    }
}

