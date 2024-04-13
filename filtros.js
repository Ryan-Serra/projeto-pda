/*
    |------|------------------------------|---------|----------|----------|----------|
    |                                                                                |
        Esse arquivo é para a manipulção dos filtros  de busca do site.
    |                                                                                |
    |________________________________________________________________________________|

*/
//  Eventos de click nos checkboxes
var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
// capa dos processos seletivos
var capa_ps=document.querySelectorAll('.capa_ps');
// Todos os paragrafos que terá a localidade
var Localidade=document.querySelectorAll('.Localidade_Req');
// Todos os paragrafos que terá o nome da empresa
var Empresa=document.querySelectorAll('.Empresa');
// Todos os paragrafos que terá o modelo de trabalho 
var ModeloTrabalho=document.querySelectorAll('.modelodetrabalho');
//Todos os paragrafos modelo de curso aceitos 
var modelodecurso= document.querySelectorAll(".modelodecurso")
//Todos os paragrafos cursos aceitos
var cursosaceitos=document.querySelectorAll(".cursosaceitos")
//Todos os paragrafos para o setor da empresa
var setor=document.querySelectorAll('.setor')
//Todos os paragrafos para a área de estágio
var areadeestagio= document.querySelectorAll(".areadeestagio")
// input de busca 
var busca=document.querySelector('#busca')
// Todos  os filtros juntos 
 var filtros= document.querySelectorAll(".filtros")
 //Abrir e fechar a aba de requistos
 var menu_bar=document.querySelector( ".menu_bar" )
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
var busca_modeloDeCurso=''
var busca_cursosaceitos =''
var busca_setor=''
var busca_areadeestagio=''
var procura=''
var buscador=''
var EstadoCheckbox=[false, false, false]


// Selecionar o elemento busca_responsive
var busca_responsive = document.querySelector('.busca_reponsive');

function removerAcentos(texto) {
    // Normalize a string para transformar caracteres acentuados em suas formas não acentuadas
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
busca.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var procura = removerAcentos(busca.value.trim().toUpperCase());
        // Verificar Localidade
        for (let i = 0; i < Localidade.length; i++) {
            busca_Localidade = removerAcentos(Localidade[i].innerHTML.trim().toUpperCase())
            busca_ModeloTrabalho = removerAcentos(ModeloTrabalho[i].innerHTML.trim().toUpperCase());
            busca_Empresas = Empresa[i].innerHTML.trim().toUpperCase();
            busca_titulo=removerAcentos(titulo_capa[i].innerHTML.trim().toUpperCase())
            busca_modeloDeCurso=removerAcentos(modelodecurso[i].innerHTML.trim( ).toUpperCase())
            busca_cursosaceitos=removerAcentos(cursosaceitos[i].innerHTML.trim( ).toUpperCase())
            busca_setor=removerAcentos(setor[i].innerHTML.trim( ).toUpperCase())
            busca_areadeestagio=removerAcentos(areadeestagio[i].innerHTML.trim( ).toUpperCase())
            var match = salario[i].textContent.match(/\d+/);
            salarioAtual = match ? parseInt(match[0]) : 0;

            if (
                (busca_Localidade.includes("LOCALIDADE:") && busca_Localidade.includes(procura))
                ||
                (busca_ModeloTrabalho.includes(procura) && busca_ModeloTrabalho.includes("MODELO DE TRABALHO"))
                ||
                (busca_Empresas.includes(procura))
                ||
                (busca_titulo.includes(procura))
            ) {
                if (capa_ps[i]) capa_ps[i].style.display = 'block';
            
                
            }
            else if ((salarioAtual>= parseInt(procura))&& (salarioAtual!="")){
                if (capa_ps[i]) capa_ps[i].style.display = 'block';
            }
            
  
             else {
                if (capa_ps[i]) capa_ps[i].style.display = 'none';
            }
        }
    }
});

// Adicionando listener de evento de mudança para o filtro de Modelo de Trabalho

for (let i = 0; i < filtros.length; i++) {
    filtros[i].addEventListener('change', function(event) {
        // Verificar o estado dos checkboxes e atualizar o EstadoCheckbox
        EstadoCheckbox[i] = filtros[i].checked;

        // Verificar se pelo menos um checkbox está marcado
        let algumCheckboxMarcado = EstadoCheckbox.some(checked => checked);

        for (let j = 0; j < ModeloTrabalho.length; j++) {

            // Verificar se o modelao de trabalho corresponde ao filtro
            let modeloMarcado = false;
            for (let r = 0; r < EstadoCheckbox.length; r++) {
                buscador = removerAcentos(ModeloTrabalho[j].innerHTML.toUpperCase())
                if (EstadoCheckbox[r] && buscador.includes(removerAcentos(filtros[r].id.toUpperCase()))) {
                    modeloMarcado = true;
                    break;
                } 
                
                buscador=removerAcentos(Empresa[j].innerHTML.toUpperCase())
                if(EstadoCheckbox[r] && buscador.includes(removerAcentos(filtros[r].id.toUpperCase()))) {
                    modeloMarcado=true;
                    break;
                }
                buscador=removerAcentos(Localidade[j].innerHTML.toUpperCase())
             
                if(EstadoCheckbox[r] && buscador.includes(removerAcentos(filtros[r].id.toUpperCase()))) {
                    
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
let salarioAtual = ''
let minSalario = ''
let maxSalario = ''
max_price.addEventListener('keypress', function(event){
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
// Adicionando evento para  o botão de filtro responsivo 
let img_responsive_filter= document.querySelector('.responsive--img--filtros');
var div_filtros=document.getElementById('responsive--filtro')
let responsive_filter=document.querySelectorAll(".responsive--filtros")
for (let i = 0; i < responsive_filter.length; i++) {
    responsive_filter[i].addEventListener('change', function(event) {
        // Verificar o estado dos checkboxes e atualizar o EstadoCheckbox
        EstadoCheckbox[i] = responsive_filter[i].checked;

        // Verificar se pelo menos um checkbox está marcado
        let algumCheckboxMarcado = EstadoCheckbox.some(checked => checked);

        for (let j = 0; j < ModeloTrabalho.length; j++) {

            // Verificar se o modelao de trabalho corresponde ao filtro
            let modeloMarcado = false;
            for (let r = 0; r < EstadoCheckbox.length; r++) {
                buscador = removerAcentos(ModeloTrabalho[j].innerHTML.toUpperCase())
                //console.log(buscador);
                if (EstadoCheckbox[r] && buscador.includes(removerAcentos(responsive_filter[i].id.replace(/\d/g,'').toUpperCase()))) {
                    modeloMarcado = true;
                    break;
                } 
                
                buscador=removerAcentos(Empresa[j].innerHTML.toUpperCase())
                if(EstadoCheckbox[r] && buscador.includes(removerAcentos(responsive_filter[i].id.replace(/\d/g,'').toUpperCase()))) {
                    modeloMarcado=true;
                    break;
                }
                buscador=removerAcentos(Localidade[j].innerHTML.toUpperCase())
             
                if(EstadoCheckbox[r] && buscador.includes(removerAcentos(responsive_filter[i].id.replace(/\d/g,'').toUpperCase()))) {
                    
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
img_responsive_filter.addEventListener('click',function(){
    filtrar();
});
//Função responsável por abrir e fechar a aba de filtros 
menu_bar.addEventListener('click',function(){
    filtrar();
})
function filtrar(){
    if(div_filtros.style.display=='none') div_filtros.style.display= 'block'
    else{
        for(let i=0; i<responsive_filter.length;i ++){
    
            // Verificar o estado dos checkboxes e atualizar o EstadoCheckbox
            if(responsive_filter[i].checked == true){


                EstadoCheckbox[i] = responsive_filter[i].checked;
        
            // Verificar se pelo menos um checkbox está marcado
            let algumCheckboxMarcado = EstadoCheckbox.some(checked => checked);
        
            for (let j = 0; j < ModeloTrabalho.length; j++) {
              //  buscador = ModeloTrabalho[j].innerHTML.toUpperCase();
        
                // Verificar se o modelao de trabalho corresponde ao filtro
                let modeloMarcado = false;
                for (let r = 0; r < EstadoCheckbox.length; r++) {
                    buscador = ModeloTrabalho[j].innerHTML.toUpperCase();
                    if (EstadoCheckbox[r] && buscador.includes(responsive_filter[r].id.toUpperCase())) {
                        modeloMarcado = true;
                        break;
                    } 
                    
                    buscador=Empresa[j].innerHTML.toUpperCase()
                    if(EstadoCheckbox[r] && buscador.includes(responsive_filter[r].id.toUpperCase())) {
                        modeloMarcado=true;
                        break;
                    }
                    buscador=Localidade[j].innerHTML.toUpperCase()
                    
                    if(EstadoCheckbox[r] && buscador.includes(responsive_filter[r].id.toUpperCase())) {
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
        }
        }
        div_filtros.style.display='none'
    }
}
