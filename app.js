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
var Localidade=document.querySelectorAll('.Localidade');
// Todos os paragrafos que terá o nome da empresa
var Empresa=document.querySelectorAll('.Empresa');
// Todos os paragrafos que terá o modelo de trabalho 
var ModeloTrabalho=document.querySelectorAll('.modelotrabalho');
// input de busca 
var busca=document.querySelector('#busca')
// Todos  os filtros juntos 
 var filtros= document.querySelectorAll(".filtros")
 // Filtro Salário
 var min_price=document.querySelector("input[type='text'][name='min_price']"); // Preço minímo 
 var max_price=document.querySelector("input[type='text'][name='max_price']"); // Preço máximo
 var menu=document.querySelector('.menu_bar')
 //var busca_responsive= document.querySelector( '.busca_responsive' )
// auxiliares  para realizar a busca
var busca_Localidade=''
var busca_Empresas=''
var busca_ModeloTrabalho=''
var procura=''
var buscador=''
var EstadoCheckbox=[false, false, false]
// Selecionar o elemento busca_responsive
var busca_responsive = document.querySelector('.busca_reponsive');

// Adicionar um evento de clique a busca_responsive
busca_responsive.addEventListener('click', function() {
    // Lógica para manipular o clique no elemento busca_responsive
    if(busca.style.display!='none') busca.style.display='block';
    else busca.style.display='none';
    // Adicione aqui o código para exibir ou ocultar a barra de busca ou realizar outras ações necessárias
});

var div_filtros=document.querySelector("#filtros")
menu.addEventListener( 'click', function(){
   
        if(div_filtros.style.display!='none') div_filtros.style.display='block';
       else if(div_filtros.style.display=="block") div_filtros.style.display="none";
        
        for(let i= 0; i< capa_ps.length; i++)capa_ps[i].style.display='none'
    
})
for(let i=0; i<Localidade.length; i++){
busca.addEventListener('keypress', function(event){
    capa_ps[i].style.display='none'
    procura= busca.value
    console.log(procura)
    procura=procura.toUpperCase()
    busca_Localidade= Localidade[i].innerHTML;
    busca_Localidade=busca_Localidade.toUpperCase();
    if(event.key==='Enter'){
        for(let j=0; j<Localidade.length;j++)
    if (busca_Localidade.includes(procura)) {
        capa_ps[i].style.display='block'
    }
    
    
}});
}
for(let i=0; i<ModeloTrabalho.length;i++){
    busca.addEventListener('keypress', function(event){
        capa_ps[i].style.display='none'
        procura=busca.value
        procura=procura.toUpperCase()
        busca_ModeloTrabalho= ModeloTrabalho[i].innerHTML;
        busca_ModeloTrabalho=busca_ModeloTrabalho.toUpperCase();
        if(event.key=='Enter'){
            if(busca_ModeloTrabalho.includes(procura)){
               capa_ps[i].style.display='block';
        }
        }
    })
}
for(let i=0; i<Empresa.length;i++){
    busca.addEventListener('keypress', function(event){
        capa_ps[i].style.display='none'
        procura=busca.value
        procura=procura.toUpperCase()
        busca_Empresas= Empresa[i].innerHTML;
        busca_Empresas=busca_Empresas.toUpperCase();
        if(event.key=='Enter'){
            if(busca_Empresas.includes(procura)){
                capa_ps[i].style.display='block';
        }
        }
    })
}

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
