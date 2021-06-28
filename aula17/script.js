// function adicionar(){
//     let num = window.document.getElementById('txtnumero')
//     let linha = window.document.getElementById('mostranumeros')
//     let result = window.document.getElementById('mostranumeros')

//     let vet = []
//     vet.push(num)
//     linha.appendChild(vet)

// }

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }else{
        false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ""
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert("A lista está em branco! Favor adicione valores para serem analisados.")
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} elementos cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma foi de ${soma}.</p>`
        res.innerHTML += `<p>A média foi de ${media}.</p>`
    }
}