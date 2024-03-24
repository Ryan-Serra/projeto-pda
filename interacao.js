/*
    |------|------------------------------|---------|----------|----------|----------|
    |                                                                                |
        Esse arquivo é para interação com o usúario
    |                                                                                |
    |________________________________________________________________________________|

*/
// capa dos processos seletivos
var capa_ps=document.querySelectorAll('.capa_ps');
// div dos requisitos do processos seletivos
var requisito_ps= document.querySelectorAll( '.Requisitos' );
// Botão para voltar a página inicial
var voltar=document.querySelectorAll('.btn_voltar');
//Botão para abrir o input text responsivo
var busca_responsive = document.querySelector('.busca_reponsive');
//Interação com os filtros
var div_filtros=document.querySelector("#filtros")
// Adicionar um evento de clique a busca_responsive
busca_responsive.addEventListener('click', function() {
    // Lógica para manipular o clique no elemento busca_responsive
    if(window.innerWidth<=475 && busca.style.display=='none') busca.style.display='flex';
    else  busca.style.display='none';
    // Adicione aqui o código para exibir ou ocultar a barra de busca ou realizar outras ações necessárias
});
if(window.innerWidth<=475){
    busca.style.display='none'
    div_filtros.style.display='none'
}
//Função responsável por abrir a aba de requisitos
for(let i=0; i < capa_ps.length; i++ ){
    //capa_ps[i].style.display = 'none'
    capa_ps[i].addEventListener('click',function(){
       if(requisito_ps[i].style.display=='block') requisito_ps[i].style.display='none'
       else requisito_ps[i].style.display='block';
       for(let j=0; j<capa_ps.length ;j++) {
         capa_ps[j].style.display='none'
    }
    div_filtros.style.display='none'
});
}
// Função responsável por fechar a aba de requisitos 
for(let i=0; i <voltar.length;i++){
    voltar[i].addEventListener("click", function (e) {
        if(requisito_ps[i].style.display=='block' ) {
            requisito_ps[i].style.display='none'
            for(let j=0; j< capa_ps.length;j++)
                capa_ps[j].style.display='block'
           if( window.innerWidth>475) div_filtros.style.display='block'        
            }
       
    });
}

