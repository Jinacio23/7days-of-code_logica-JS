let resposta = Math.floor((Math.random() * 10) + 1)
let rodadas = 5
let palpite;
let tentativa = 0

for (let rodada = 0; rodada < rodadas; rodada++) {
palpite = Number(prompt(`Dê um palpite de 1 a 10. Qual será o numero?`))

if(palpite != resposta) {   
    alert(`Não é esse o número.`)
    tentativa++
    alert(`Rodadas restantes ${5 - tentativa}`)

} else {
    alert('Parabéns! Você acertou...')
    break

}  
if(tentativa == 5){
    alert(`Acabaram suas tentativas. A resposta certa era ${resposta}`)
    break
}
}