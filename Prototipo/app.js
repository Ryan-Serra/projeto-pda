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
// Adicionando listener de evento de mudança para o filtro de Modelo de Trabalho
Filtro_ModeloTrabalho.forEach(function(item) {
    item.addEventListener('change', function () {
        console.log("Filtro de Modelo de Trabalho alterado");
    });
});

// Adicionando listener de evento de mudança para o filtro de Localidade
Filtro_Localidade.forEach(function(item) {
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
