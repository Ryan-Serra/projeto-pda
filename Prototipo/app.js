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
// auxiliares  para realizar a busca
var busca_Localidade=''
var busca_Empresas=''
var busca_ModeloTrabalho=''
var procura=''
var contador=0
var control=0
var buscador=''
var EstadoCheckbox=[false, false, false]
for(let i=0; i<Localidade.length; i++){
busca.addEventListener('keypress', function(event){
    capa_ps[i].style.display='none'
    procura= busca.value
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
    capa_ps[i].addEventListener('click',function(){
       if(requisito_ps[i].style.display=='block') requisito_ps[i].style.display='none'
       else requisito_ps[i].style.display='block';
        
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
   
    // Adicionando listener de evento de mudança para o filtro de Localidade
/*    for (let i = 0; i < Filtro_Localidade.length; i++) {
        Filtro_Localidade[i].addEventListener('change', function(event) {
            procura = Filtro_Localidade[i].id.toUpperCase();
    
            // Verificar o estado dos checkboxes e atualizar o EstadoCheckbox
            EstadoCheckbox[i] = Filtro_Localidade[i].checked;
    
            // Verificar se pelo menos um checkbox está marcado
            let algumCheckboxMarcado = EstadoCheckbox.some(checked => checked);
    
            for (let j = 0; j < ModeloTrabalho.length; j++) {
                busca_Localidade = Localidade[j].innerHTML.toUpperCase();
    
                // Verificar se o modelo de trabalho corresponde ao filtro
                let modeloMarcado = false;
                for (let r = 0; r < EstadoCheckbox.length; r++) {
                    if (EstadoCheckbox[r] && busca_Localidade.includes(Filtro_Localidade[r].id.toUpperCase())) {
                        modeloMarcado = true;
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
  */

// Adicionando o evento para filtrar pelas Empresas
/*for (let i = 0; i < Filtro_Empresas.length; i++) {
    Filtro_Empresas[i].addEventListener('change', function(event) {
        procura = Filtro_Empresas[i].id.toUpperCase();

        // Verificar o estado dos checkboxes e atualizar o EstadoCheckbox
        EstadoCheckbox[i] = Filtro_Empresas[i].checked;

        // Verificar se pelo menos um checkbox está marcado
        let algumCheckboxMarcado = EstadoCheckbox.some(checked => checked);

        for (let j = 0; j < Empresa.length; j++) {
            busca_Empresas = Empresa[j].innerHTML.toUpperCase();

            // Verificar se o modelo de trabalho corresponde ao filtro
            let modeloMarcado = false;
            for (let r = 0; r < EstadoCheckbox.length; r++) {
                if (EstadoCheckbox[r] && busca_Empresas.includes(Filtro_Empresas[r].id.toUpperCase())) {
                    modeloMarcado = true;
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
*/  
 // Função para aplicar todos os filtros
