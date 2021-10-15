const carrinho = [
    { nome:"Caneta", qtde: 10, preco:7.99 },
    { nome:"Impressora", qtde: 0, preco: 649.50 },
    { nome:"Caderno", qtde: 4, preco:27.10 },
    { nome:"Lapis", qtde: 3, preco:5.82 },
    { nome:"Tesoura", qtde: 1, preco:19.20 }

]

function produtosEmEstoque(produto){

    return produto.qtde > 0
}

function totalEmProuto(produto){

    return produto.qtde * produto.preco
}

function totalEmPreco(preVal, produto){

    return preVal + produto
}

const resultado01 = carrinho.filter(produtosEmEstoque)
console.log(resultado01)
const resultado02 = resultado01.map(totalEmProuto)
console.log(resultado02)
const resultado03 = resultado02.reduce(totalEmPreco)
console.log(resultado03)

const resultAlternativo = carrinho.reduce((preVal, product) => preVal + product.preco, 0)
console.log(resultAlternativo)


function meuFilter(produto){
    let newCarrinho = []
    for(let i = 0; i < produto.length; i++){
        if (produto[i].qtde != 0){
            newCarrinho.push(produto[i])
        }
    }

    return newCarrinho;
}

function meuMap(produto){

    let newCarrinho = []
    for (let i = 0; i < produto.length; i++) {
        let somaProduto = produto[i].qtde * produto[i].preco;
        newCarrinho.push(somaProduto);     
    }

    return newCarrinho;

}


function meuReduce(produto){
    let somaTotal = 0
    for (let i = 0; i < produto.length; i++) {
        somaTotal += produto[i]
        
    }

    return somaTotal
}


const carrinhoFiltrado = meuFilter(carrinho)
console.log(carrinhoFiltrado)

const carrinhoMapado = meuMap(carrinhoFiltrado)
console.log(carrinhoMapado)

const carrinhoReducado = meuReduce(carrinhoMapado)
console.log(carrinhoReducado) 