function somar(a,b){
    return a+b
}
 
function subtrair(a,b){
    return a-b
}
 
function dividir(a,b){
    return a/b
}
 
function multiplicar(a,b){
    return a*b
}
 
let operacao = ""
let calculadora = 'on'

while(calculadora != 'off') {
    
    let operacao = prompt('Escolha uma operção para executar: "+","-","*","/" ou "sair" ')

    if(operacao != '+' && operacao != '-' && operacao != '*' && operacao != '/' && operacao != 'sair') {
        alert('Insira uma operação válida')
    }

    switch (operacao) {
        case "+":
            let val1 = Number(prompt('Primeiro valor:'))
            let val2 = Number(prompt('Segundo valor:'))

            alert(somar(val1,val2))
        break
        case "-":
            let val3 = Number(prompt('Primeiro valor:'))
            let val4 = Number(prompt('Segundo valor:'))
 
            alert(subtrair(val3,val4))
        break
        case "*":
            let val5 = Number(prompt('Primeiro valor:'))
            let val6 = Number(prompt('Segundo valor:'))

            alert(multiplicar(val5,val6))
        break
        case "/":
            let val7 = Number(prompt('Primeiro valor:'))
            let val8 = Number(prompt('Segundo valor:'))

            alert(dividir(val7,val8))
        break
        case 'sair':
            calculadora = 'off'
        break
    }

    if(calculadora == 'off'){
        alert('Até a próxima!')
        break
    }
}