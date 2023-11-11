
let frutas = []
let laticinios = []
let congelados = []
let doces = []
let remover;
let adicionar;

let inicio = prompt('Deseja adicionar algum novo item a lista de compras(sim ou não)?')

//Adicionando itens
do {
    if (inicio == 'sim') {
        let categoria = prompt('Este item pertence a que categoria?(frutas, laticinios, congelados, doces)')

        if (categoria == 'frutas') {
            let item = prompt('Insira o item:')
            frutas.push(item)

        } else if (categoria == 'laticinios') {
            let item = prompt('Insira o item:')
            laticinios.push(item)

        } else if (categoria == 'congelados') {
            let item = prompt('Insira o item:')
            congelados.push(item)

        } else if (categoria == 'doces') {
            let item = prompt('Insira o item:')
            doces.push(item)

        } else if (inicio == 'não' || inicio == 'nao') {
            adicionar = inicio
            break
        }
    }

    inicio = prompt('Deseja adicionar algum novo item a lista de compras(sim ou não)?')

} while (inicio == 'sim')

//Removendo itens
remover = prompt('Deseja remover algum item da lista(sim ou não)?')

do {
    if (remover == 'sim') {
        alert(`Lista atual:  frutas: ${frutas}/ Laticínios: ${laticinios}/ Congelados: ${congelados}/ Doces: ${doces}`)
        let categoriaR = prompt('Categoria do item indesejado(frutas, laticinios, congelados, doces):')

        if (categoriaR == 'frutas') {
            let itemRemovido = prompt('Item a ser removido:')
            if (frutas.includes(itemRemovido) == true) {
                frutas = frutas.filter(item => item != itemRemovido)
                alert(`Frutas: ${frutas}`)
            } else {
                alert('Item não encontrado')
            }

        } else if (categoriaR == 'laticinios') {
            let itemRemovido = prompt('Item a ser removido:')
            if (laticinios.includes(itemRemovido) == true) {
                laticinios = laticinios.filter(item => item != itemRemovido)
                alert(`Laticínios: ${laticinios}`)
            } else {
                alert('Item não encontrado')
            }

        } else if (categoriaR == 'congelados') {
            let itemRemovido = prompt('Item a ser removido:')
            if (congelados.includes(itemRemovido) == true) {
                congelados = congelados.filter(item => item != itemRemovido)
                alert(`Congelados: ${congelados}`)
            } else {
                alert('Item não encontrado')
            }

        } else if (categoriaR == 'doces') {
            let itemRemovido = prompt('Item a ser removido:')
            if (doces.includes(itemRemovido) == true) {
                doces = doces.filter(item => item != itemRemovido)
                alert(`Doces: ${doces}`)
            } else {
                alert('Item não encontrado')
            }
        }
    }

    remover = prompt('Deseja remover mais algum item(sim ou não)?')

} while (remover == 'sim')

adicionar = prompt('Deseja adicionar mais algum item a lista(sim ou não)?')

if(adicionar == 'sim') {
    do {
        if (adicionar == 'sim') {
            let categoria = prompt('Este item pertence a que categoria?(frutas, laticinios, congelados, doces)')
    
            if (categoria == 'frutas') {
                let item = prompt('Insira o item:')
                frutas.push(item)
    
            } else if (categoria == 'laticinios') {
                let item = prompt('Insira o item:')
                laticinios.push(item)
    
            } else if (categoria == 'congelados') {
                let item = prompt('Insira o item:')
                congelados.push(item)
    
            } else if (categoria == 'doces') {
                let item = prompt('Insira o item:')
                doces.push(item)
    
            } else if (adicionar == 'não' || adicionar == 'nao') {
                break
            }
        }
    
        adicionar = prompt('Deseja adicionar algum novo item a lista de compras(sim ou não)?')
    
    } while (adicionar == 'sim')
    
}

if ((remover == 'não' || remover == 'nao') && (adicionar == 'não' || adicionar == 'nao')) {
    //lista final
    alert(`frutas: ${frutas}/ Laticínios: ${laticinios}/ Congelados: ${congelados}/ Doces: ${doces}`)
}
