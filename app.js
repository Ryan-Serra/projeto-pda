/*
    |------|------------------------------|---------|----------|----------|----------|
    |                                                                                |
            Esse arquivo é para a criação estrutural do site 
    |                                                                                |
    |________________________________________________________________________________|

*/
//Array com os links
let links = [
    'https://mercedes-benz_cars.gupy.io/jobs/5428668?jobBoardSource=gupy_public_page',
    'https://www.ciadeestagios.com.br/programas/sumitomo',
    'https://sanofiestagio.across.jobs/',
    'https://vagas.ciadetalentos.com.br/hotsite/estagiobracell2024',
    'https://fa-eolm-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/pt-BR/sites/CX_1001/requisitions?keyword=estagiario&mode=location',
    'https://genteraizen.gupy.io/jobs/6831972?jobBoardSource=@camilacroz',
    'https://programa-de-estagio-farm.gupy.io/jobs/3889788?utm_source=@camilacroz&utm_medium=@camilacroz&utm_campaign=@camiilacroz&utm_content=inscricoesabertas_Bio_lancamento&utm_term=29_02_24'
];

// Selecionar o botão de inscrição
// Adicionar evento de clique ao botão
function gotoLink(link){
	location.href = link.value
	window.open(link.value);
}
// Variavel responsavel por alocar o conteúdo dos checkbox do modelo de trabalho
var ModeloDeTrabalho=[
    {descricao:"Presencial"},
    {descricao:"Remoto"},
    {descricao:"Hibrido"}
]
var Estados=[
    {descricao:"Acre"},
    {descricao:"Alagoas"},
    {descricao:"Amapá"},
    {descricao:"Amazonas"},
    {descricao:"Bahia"},
    {descricao:"Ceará"},
    {descricao:"Distrito Federal"},
    {descricao:"Espírito Santo"},
    {descricao:"Goiás"},
    {descricao:"Maranhão"},
    {descricao:"Mato Grosso"},
    {descricao:"Mato Grosso do Sul"},
    {descricao:"Minas Gerais"},
    {descricao:"Pará"},
    {descricao:"Paraíba"},
    {descricao:"Paraná"},
    {descricao:"Pernambuco"},
    {descricao:"Piauí"},
    {descricao:"Rio de Janeiro"},
    {descricao:"Rio Grande do Norte"},
    {descricao:"Rio Grande do Sul"},
    {descricao:"Rondônia"},
    {descricao:"Roraima"},
    {descricao:"Santa Catarina"},
    {descricao:"São Paulo"},
    {descricao:"Sergipe"},
    {descricao:"Tocantins"}
];
var Empresas=[
    {descricao:"Bracell"},
    {descricao:"CCR"},
    {descricao:"Farm"},
    {descricao:"Mercedes-Benz Cars"},
    {descricao:"Raízen"},
    {descricao:"Sanofi"},
    {descricao:"Sumitomo Chemical"}
];
Empresas.sort((a, b) => (a.descricao > b.descricao) ? 1 : -1);



let div_filtro=document.createElement("div");
div_filtro.id="responsive--filtro";

let div_modelodetrabalho= document.createElement( "div" );
div_modelodetrabalho.classList.add('responsive--filro_modelodetrabalho');

let div_Localidade=document.createElement( "div" );
div_Localidade.classList.add('responsive--filtro_Localidade');


let div_Empresas=document.createElement( "div" );
div_Empresas.classList.add('responsive--filtro_Empresa');


// Cria o elemento <div> com a classe "range-filter"
var divRangeFilter = document.createElement("div");
divRangeFilter.classList.add("range-filter");

// Cria o elemento <div> com a classe "price-controls"
var divPriceControls = document.createElement("div");
divPriceControls.classList.add("price-controls");

// Cria o elemento <label> com a classe "min-price"
var labelMinPrice = document.createElement("label");
labelMinPrice.classList.add("min-price");
labelMinPrice.textContent = "min ";

// Cria o elemento <input> para o valor mínimo
var inputMinPrice = document.createElement("input");
inputMinPrice.setAttribute("type", "text");
inputMinPrice.setAttribute("value", "1000");
inputMinPrice.setAttribute("name", "min_price");

// Adiciona o input ao label
labelMinPrice.appendChild(inputMinPrice);

// Adiciona o label ao div de controles de preço
divPriceControls.appendChild(labelMinPrice);

// Cria o elemento <label> com a classe "max-price"
var labelMaxPrice = document.createElement("label");
labelMaxPrice.classList.add("max-price");
labelMaxPrice.textContent = "max ";

// Cria o elemento <input> para o valor máximo
var inputMaxPrice = document.createElement("input");
inputMaxPrice.setAttribute("type", "text");
inputMaxPrice.setAttribute("value", "4000");
inputMaxPrice.setAttribute("name", "max_price");

// Adiciona o input ao label
labelMaxPrice.appendChild(inputMaxPrice);

// Adiciona o label ao div de controles de preço
divPriceControls.appendChild(labelMaxPrice);

// Adiciona o div de controles de preço ao div de filtro de alcance
divRangeFilter.appendChild(divPriceControls);



let img=document.createElement("img");
img.src="https://www.svgrepo.com/show/12848/x-symbol.svg"
img.classList.add("responsive--img--filtros")

var h2_filtro= document.createElement("h2");
h2_filtro.innerHTML = "Filtros";
h2_filtro.classList.add("responsive--Texto_filtro--container");

var h3_filtro0= document.createElement("h3");
h3_filtro0.innerHTML="Modelo De Trabalho"
h3_filtro0.classList.add('responsive--Texto_principal--checbox')

var h3_filtro1= document.createElement("h3");
h3_filtro1.innerHTML="Localidade"
h3_filtro1.classList.add('responsive--Texto_principal--checbox')

var h3_filtro2= document.createElement("h3");
h3_filtro2.innerHTML="Empresas"
h3_filtro2.classList.add('responsive--Texto_principal--checbox');

var h3_filtro3= document.createElement("h3");
h3_filtro3.innerHTML="Valor Estágio"
h3_filtro3.classList.add('responsive--Texto_principal--checbox')
//Colocando tudo na div_filtro
div_filtro.appendChild(img)
div_filtro.appendChild(h2_filtro)
div_filtro.appendChild(h3_filtro0)
div_filtro.appendChild(div_modelodetrabalho)
div_filtro.appendChild(h3_filtro1)
div_filtro.appendChild(div_Localidade)
div_filtro.appendChild(h3_filtro2)
div_filtro.appendChild(div_Empresas)
div_filtro.appendChild(h3_filtro3)
div_filtro.appendChild(divRangeFilter)
// Criando dinamicamente os checkboxes para o modelo de trabalho
ModeloDeTrabalho.forEach(function(item, i) {
    // Criando um elemento <input> do tipo checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "modetrabalho"; // Definindo o nome do grupo de checkboxes
    checkbox.id = item.descricao+i; // Definindo um ID único para cada checkbox
    checkbox.classList.add('responsive--filtros');

    // Criando uma label para o checkbox
    let label = document.createElement("label");
    label.setAttribute("for", checkbox.id); // Associando a label ao checkbox
    label.innerHTML = item.descricao; // Definindo o texto da label

    // Adicionando o checkbox e a label ao documento
    div_modelodetrabalho.appendChild(checkbox); 
    div_modelodetrabalho.appendChild(label);
    div_modelodetrabalho.appendChild(document.createElement('br'));
});

//Criando e alocando os estados
Estados.forEach(function(item, i){
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "filtroEstado"; // Definindo o nome do grupo de checkboxes
    checkbox.id = item.descricao + i; // Definindo um ID único para cada checkbox
    checkbox.classList.add('responsive--filtros');

    // Criando uma label para o checkbox
    let label = document.createElement("label");
    label.setAttribute("for", checkbox.id); // Associando a label ao checkbox
    label.innerHTML = item.descricao; // Definindo o texto da label
    // Adicionando o checkbox e a label ao documento

    div_Localidade.appendChild(checkbox); 
    div_Localidade.appendChild(label);
    div_Localidade.appendChild(document.createElement('br'));
    
});

//Criando e alocando as empresas
Empresas.forEach(function(item, i){
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "Nome_Empresas"; // Definindo o nome do grupo de checkboxes
    checkbox.id = item.descricao + i; // Definindo um ID único para cada checkbox
    checkbox.classList.add('responsive--filtros');

    // Criando uma label para o checkbox
    let label = document.createElement("label");
    label.setAttribute("for", checkbox.id); // Associando a label ao checkbox
    label.innerHTML = item.descricao; // Definindo o texto da label
    // Adicionando o checkbox e a label ao documento

    div_Empresas.appendChild(checkbox); 
    div_Empresas.appendChild(label);
    div_Empresas.appendChild(document.createElement('br'));
    
});

document.body.appendChild(div_filtro);

div_filtro.style.display=  'none'
