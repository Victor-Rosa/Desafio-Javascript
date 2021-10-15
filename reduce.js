// O reduce trabalha da seguinte forma dentro dele existe dois valores, um acumulador e em seguida existe o elemento
// O reduce soma esses dois valores 

const produtos = [
    {nome:"Refrigerante", preco: 10.0, desconto:0.1},
    {nome:"Vinho", preco: 156.0, desconto:0.3},
    {nome:"Pizza", preco: 60.0, desconto:0.2},
    {nome:"Desodorante", preco: 12.0, desconto:0.0},
    {nome:"Óculos", preco: 269.0, desconto:0.35},
    {nome:"Casaco", preco: 257.0, desconto:0.5},
]

function somaProdutos(produto){
    return produto.preco + produto.preco
}

const totalPreco = produtos.reduce(somaProdutos, 0)
console.log(totalPreco)