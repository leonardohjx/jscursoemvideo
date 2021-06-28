var num = [5, 4, 7]

num.push(5)
num[3] = 18

console.log(`Nosso vetor é o ${num} com ${num.length} posições e ordenando-os, ele ficará`)
num.sort()
console.log(`${num}`)
