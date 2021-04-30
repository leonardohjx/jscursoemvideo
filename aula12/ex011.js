var idade = 15
if(idade < 16) {
    console.log(`Como sua idade é ${idade}, você não pode votar.`)
} else {
    if(idade >= 18){
    console.log(`Como sua idade é ${idade}, você tem o voto obrigatório. `)
    } else {
        console.log(`Como sua idade é ${idade}, você tem o voto opicional. `)
    }
}