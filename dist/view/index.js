import GerenciadorClientes from '../control/GerenciadoClientes.js';
const GC = new GerenciadorClientes();

document.addEventListener('DOMContentLoaded', function() {
    const BOTAOSALVAR = document.getElementById("salvar");

    BOTAOSALVAR.addEventListener("click", salvar);

  });

  function salvar() {
    let nomeCliente = document.getElementById("nomeCliente").value;
    let enderecoCliente = document.getElementById("enderecoCliente").value;

    let cliente = new Cliente(nomeCliente, enderecoCliente);


    GC.criarNovoCliente(cliente);
  }