function randon(max){
    return Math.random() *max;
}
function simularDownload(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('Imagem baixada')
        }, randon(1000))
        })

}
function assyncDownload(){
    console.log('Renderizando a pagina');

    Promise.race([
        simularDownload(),
        simularDownload(),
        simularDownload(),
        simularDownload(),

    ]).then(res => {
        console.log("Todas as imagens foram baixadas")
    })
        console.log("Página renderizada")
}
assyncDownload()
