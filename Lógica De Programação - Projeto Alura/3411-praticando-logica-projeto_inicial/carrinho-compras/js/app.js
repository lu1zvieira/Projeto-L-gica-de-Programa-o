let totalGeral = 0;
limpar();

function adicionar() {
//recuperar valores nome do produto, quantidade e valor
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
//calcular o preço, o nosso subtotal

let preço = quantidade * valorUnitario;
let carrinho = document.getElementById('lista-produtos');
//adicionar o produto ao carrinho
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
        </section>`;
        //atualizar o total geral
        totalGeral = totalGeral + preço;
        let total = document.getElementById('valor-total');
        total.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = 0;














}


function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}