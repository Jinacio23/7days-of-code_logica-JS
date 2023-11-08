let itensDaLista = {
 frutas : [],
 laticinios : [],
 congelados : [],
 doces : []
}

let inicio = prompt('Deseja adicionar algum novo item a lista de compras(sim ou não)?')

do{

if (inicio == 'sim') {
    let categoria = prompt('Este item pertence a que categoria?(frutas, laticinios, congelados, doces)')

    if(categoria == 'frutas') {
        let item = prompt('Insira o item:')     
        itensDaLista.frutas.push(item)

    } else if (categoria == 'laticinios'){
        let item = prompt('Insira o item:')
        itensDaLista.laticinios.push(item)
    
    } else if (categoria == 'congelados'){
        let item = prompt('Insira o item:')
        itensDaLista.congelados.push(item)
     
    } else if (categoria == 'doces'){
        let item = prompt('Insira o item:')
        itensDaLista.doces.push(item)

    }
} else if (inicio == 'não' || inicio == 'nao') {
    break
} else {
    alert('Valor Inválido')
}

inicio = prompt('Deseja adicionar algum novo item a lista de compras(sim ou não)?')

} while (inicio == 'sim')

if(inicio == 'nao' || inicio == 'não') {
    alert(`frutas: ${itensDaLista.frutas}/ Laticínios: ${itensDaLista.laticinios}/ Congelados: ${itensDaLista.congelados}/ Doces: ${itensDaLista.doces}`)
}
