let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)

console.log(valores[0])
console.log(valores[0])
console.log(valores[0])
console.log(valores[0])
console.log(valores[0])

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]} com for in.`)
}

console.log(`O uso de indexOf retorna a a posição de um número, por exemplo, o número 7 está na posição ${valores.indexOf(7)}`)