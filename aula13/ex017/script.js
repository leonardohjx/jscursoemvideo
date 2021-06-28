function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO: Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'Bebê homem.jpg')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src', 'Jovem homem.jpg')
            }else if(idade <50){
                //Adulto
                img.setAttribute('src', 'Adulto homem.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'Idoso homem.jpg')
            }

        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'Bebê mulher.jpg')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src', 'Jovem mulher.jpg')
            }else if(idade <50){
                //Adulto
                img.setAttribute('src', 'Adulto mulher.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'Idoso mulher.jpg')
            }
        }

        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.width = '300px'
        img.style.height = '400px'
    }

    
}