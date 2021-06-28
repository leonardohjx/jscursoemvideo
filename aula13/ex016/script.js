/*function verificar(){
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var inter = window.document.getElementById('txtpasso')
    
    for(var result = Number(inicio.value); result = Number(fim.value); result = result + Number(inter.value)){
        res.innerHTML = `${result}`
    }

}
*/
function verificar() {
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var result = window.document.getElementById('res')
    /*
        window.alert(`O início é ${Number(inicio.value)}, o fim é ${Number(fim.value)} e o passo é ${Number(passo.value)}`)
    */
 
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        result.innerHTML = 'Impossível contar!'
    } else {

        result.innerHTML = 'Contando:'

        if (Number(inicio.value) < Number(fim.value)) {
            //Contagem crescente
            for (var i = Number(inicio.value); i <= Number(fim.value); i = i + Number(passo.value)) {
                result.innerHTML += `${i} \u{1F449} `
            }
        } else {
            //Contagem regressiva
            for (var i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)) {
                result.innerHTML += `${i} \u{1F449} `
            }
        }
        result.innerHTML += `\u{1f3c1}`
    }
}