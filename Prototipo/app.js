// Seletor corrigido para os checkboxes do Modelo de Trabalho
var Filtro_ModeloTrabalho = document.querySelectorAll("input[type='checkbox'][name='modetrabalho']");
// Seletor corrigido para os checkboxes de Localidade
var Filtro_Localidade = document.querySelectorAll("input[type='checkbox'][name='filtroEstado']");
// Seletor corrigido para os checkboxes de Empresa
var Filtro_Empresas = document.querySelectorAll("input[type='checkbox'][name='Nome Empresas']");
// label para efetuar as comparações com o modelo de trabalho
var label_ModeloTrabalho = document.querySelectorAll('label[for="modetrabalho"]')
// label para efetuar as comparações  com a localidade
var label_Localidade= document.querySelectorAll( 'label[for="Estados"]' )
// label para efetuar as comparações com as empresas
var label_Empresas= document.querySelectorAll( "label[for='NomesEmpresas']" );
var capa_ps=document.querySelectorAll('.capa_ps');
var requisito_ps= document.querySelectorAll( '.Requisitos' );
var Localidade=document.querySelectorAll('.Localidade');
var Empresa=document.querySelectorAll('.Empresa');
var ModeloTrabalho=document.querySelectorAll('.modelotrabalho');
var procura= document.querySelector('#busca').value
console.log(Localidade[0].innerHTML);

busca.addEventListener('enter', function(){
    if(Localidade.includes(procura))
        console.log ('achou na localidade');
});
for(let i=0; i < capa_ps.length; i++ ){
    capa_ps[i].addEventListener('click',function(){
        requisito_ps[i].style.display='block';
        console.log("funcionou")
    });
}

// Adicionando listener de evento de mudança para o filtro de Modelo de Trabalho
  /* for(let i=0;i< Filtro_ModeloTrabalho.length; i++){
        Filtro_ModeloTrabalho[i].addEventListener('change',function() {
          if(Filtro_ModeloTrabalho[i].checked)
          console.log(label_ModeloTrabalho[i].getAttribute('for'))
    });
    }*/
    // Adicionando listener de evento de mudança para o filtro de Localidade
/*    Filtro_Localidade.forEach(function(item) {
        item.addEventListener('change', function () {
            console.log("Filtro de Localidade alterado");
        });
    });

    // Adicionando listener de evento de mudança para o filtro de Empresa
    Filtro_Empresas.forEach(function(item) {
        item.addEventListener('change', function () {
            console.log("Filtro de Empresa alterado");
        });
    });
*/
