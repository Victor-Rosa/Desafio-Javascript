// Um map sempre retorna a mesma quantidade de elementos de um array
// exemplo um array de 10 elementos, o map vai retornar um array de 10 elementos 

const listaProdutos = [
    {nome:"Refrigerante", preco: 10.0, desconto:0.1},
    {nome:"Vinho", preco: 156.0, desconto:0.3},
    {nome:"Pizza", preco: 60.0, desconto:0.2},
    {nome:"Desodorante", preco: 12.0, desconto:0.0},
    {nome:"Óculos", preco: 269.0, desconto:0.35},
    {nome:"Casaco", preco: 257.0, desconto:0.5},
]

function PrecoCusto (preco) {
// O preço de custo consiste em 60% do valor do produto na loja com desconto

    const precoDeCompra = parseInt(preco * 0.6) 
    return precoDeCompra
}


function PrecoDesconto (produto) {
// Aplica o desconto de cada produto no Preço da gondola
    const precoFinal = produto.preco * (1 - produto.desconto)

    return precoFinal
}

const resultado01 = listaProdutos.map(PrecoDesconto)
console.log(resultado01)

const resultado02 = resultado01.map(PrecoCusto)
console.log(resultado02)