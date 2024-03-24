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



