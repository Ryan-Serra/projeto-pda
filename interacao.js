/*
    |------|------------------------------|---------|----------|----------|----------|
    |                                                                                |
        Esse arquivo é para interação com o usúario
    |                                                                                |
    |________________________________________________________________________________|

*/
// capa dos processos seletivos
var capa_ps=document.querySelectorAll('.capa_ps');
var busca_responsive = document.querySelector('.busca_reponsive');
//Interação com os filtros

// Adicionar um evento de clique a busca_responsive
busca_responsive.addEventListener('click', function() {
    // Lógica para manipular o clique no elemento busca_responsive
    if(window.innerWidth<=475 && busca.style.display=='none') busca.style.display='flex';
    else  busca.style.display='none';
    // Adicione aqui o código para exibir ou ocultar a barra de busca ou realizar outras ações necessárias
});
if(window.innerWidth<=475){
    busca.style.display='none'
    
}


var modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll(".close");

closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest(".modal");
    if (modal) {
      modal.style.display = "none";
    }
  };
});

window.onclick = function (e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};
