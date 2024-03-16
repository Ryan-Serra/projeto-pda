// Seletor corrigido para os checkboxes do Modelo de Trabalho
var Filtro_ModeloTrabalho = document.querySelectorAll("input[type='checkbox'][name='modetrabalho']");
//  Eventos de click nos checkboxes
var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
// Seletor corrigido para os checkboxes de Localidade
var Filtro_Localidade = document.querySelectorAll("input[type='checkbox'][name='filtroEstado']");
// Seletor corrigido para os checkboxes de Empresa
var Filtro_Empresas = document.querySelectorAll("input[type='checkbox'][name='Nome_Empresas']");
// capa dos processos seletivos
var capa_ps=document.querySelectorAll('.capa_ps');
// div dos requisitos do processos seletivos
var requisito_ps= document.querySelectorAll( '.Requisitos' );
// Todos os paragrafos que terá a localidade
var Localidade=document.querySelectorAll('.Localidade_Req');
// Todos os paragrafos que terá o nome da empresa
var Empresa=document.querySelectorAll('.Empresa');
// Todos os paragrafos que terá o modelo de trabalho 
var ModeloTrabalho=document.querySelectorAll('.modelodetrabalho');
// input de busca 
var busca=document.querySelector('#busca')
// Todos  os filtros juntos 
 var filtros= document.querySelectorAll(".filtros")
 // Filtro Salário
 var min_price=document.querySelector("input[type='text'][name='min_price']"); // Preço minímo 
 var max_price=document.querySelector("input[type='text'][name='max_price']"); // Preço máximo
//Buscar Pelo titulo 
var titulo_capa=document.querySelectorAll(".Texto__vagas--container")
// auxiliares  para realizar a busca
var busca_Localidade=''
var busca_Empresas=''
var busca_ModeloTrabalho=''
var busca_titulo=''
var procura=''
var buscador=''
var EstadoCheckbox=[false, false, false]
// Selecionar o elemento busca_responsive
var busca_responsive = document.querySelector('.busca_reponsive');
var voltar=document.querySelectorAll('.btn_voltar');
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

// Adicionar um evento de clique a busca_responsive
busca_responsive.addEventListener('click', function() {
    // Lógica para manipular o clique no elemento busca_responsive
    if(window.innerWidth<=475 && busca.style.display=='none') busca.style.display='flex';
    else  busca.style.display='none';
    // Adicione aqui o código para exibir ou ocultar a barra de busca ou realizar outras ações necessárias
});

var div_filtros=document.querySelector("#filtros")
if(window.innerWidth<=475){
    busca.style.display='none'
    div_filtros.style.display='none'
}
function removerAcentos(texto) {
    // Normalize a string para transformar caracteres acentuados em suas formas não acentuadas
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
busca.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var procura = removerAcentos(busca.value.trim().toUpperCase());

        // Verificar Localidade
        for (let i = 0; i < Localidade.length; i++) {
            busca_Localidade = removerAcentos(Localidade[i].innerHTML.trim().toUpperCase());
            busca_ModeloTrabalho = removerAcentos(ModeloTrabalho[i].innerHTML.trim().toUpperCase());
            busca_Empresas = Empresa[i].innerHTML.trim().toUpperCase();
            busca_titulo=removerAcentos(titulo_capa[i].innerHTML.trim().toUpperCase())
            if ((busca_Localidade.includes("LOCALIDADE:") && busca_Localidade.includes(procura))||(busca_ModeloTrabalho.includes(procura) && busca_ModeloTrabalho.includes("MODELO DE TRABALHO"))||(busca_Empresas.includes(procura))||(busca_titulo.includes(procura))) {
                if (capa_ps[i]) capa_ps[i].style.display = 'block';
                console.log("Encontrado na div Localidade", i);
            } else {
                if (capa_ps[i]) capa_ps[i].style.display = 'none';
            }
        }
    }
});

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

// Adicionando listener de evento de mudança para o filtro de Modelo de Trabalho
 for (let i = 0; i < filtros.length; i++) {
        filtros[i].addEventListener('change', function(event) {
            procura = filtros[i].id.toUpperCase();
    
            // Verificar o estado dos checkboxes e atualizar o EstadoCheckbox
            EstadoCheckbox[i] = filtros[i].checked;
    
            // Verificar se pelo menos um checkbox está marcado
            let algumCheckboxMarcado = EstadoCheckbox.some(checked => checked);
    
            for (let j = 0; j < ModeloTrabalho.length; j++) {
              //  buscador = ModeloTrabalho[j].innerHTML.toUpperCase();
    
                // Verificar se o modelao de trabalho corresponde ao filtro
                let modeloMarcado = false;
                for (let r = 0; r < EstadoCheckbox.length; r++) {
                    buscador = ModeloTrabalho[j].innerHTML.toUpperCase();
                    if (EstadoCheckbox[r] && buscador.includes(filtros[r].id.toUpperCase())) {
                        modeloMarcado = true;
                        break;
                    } 
                    
                    buscador=Empresa[j].innerHTML.toUpperCase()
                    if(EstadoCheckbox[r] && buscador.includes(filtros[r].id.toUpperCase())) {
                        modeloMarcado=true;
                        break;
                    }
                    buscador=Localidade[j].innerHTML.toUpperCase()
                    
                    if(EstadoCheckbox[r] && buscador.includes(filtros[r].id.toUpperCase())) {
                        modeloMarcado=true;
                        break;
                    }
                }
            
    
                // Mostrar ou ocultar a vaga com base no filtro de modelo de trabalho
                if (algumCheckboxMarcado && modeloMarcado) {
                    capa_ps[j].style.display = 'block';
                } else if (!algumCheckboxMarcado) {
                    capa_ps[j].style.display = 'block'; // Mostrar todas as vagas quando nenhum checkbox estiver marcado
                } else {
                    capa_ps[j].style.display = 'none';
                }
            }
        });
    }
// Função para buscar pelo Salário
let salario=document.querySelectorAll('.salario');

min_price.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
       
        for (let i = 0; i < salario.length; i++) {
            let salarioAtual = parseInt(salario[i].textContent.replace("R$",""));
            let minSalario = parseInt(min_price.value);
            let maxSalario = parseInt(max_price.value);

            if (minSalario <= salarioAtual && salarioAtual <= maxSalario) {
                console.log("passou");
                capa_ps[i].style.display = "block";
            } else {
                capa_ps[i].style.display = "none";
            }
        }
    }
});
max_price.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
       
        for (let i = 0; i < salario.length; i++) {
            let salarioAtual = parseInt(salario[i].textContent);
            let minSalario = parseInt(min_price.value);
            let maxSalario = parseInt(max_price.value);

            if (minSalario <= salarioAtual && salarioAtual <= maxSalario) {
                console.log("passou");
                capa_ps[i].style.display = "block";
            } else {
                capa_ps[i].style.display = "none";
            }
        }
    }
});
