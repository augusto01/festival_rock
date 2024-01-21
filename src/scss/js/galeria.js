document.addEventListener('DOMContentLoaded',function(){

iniciarApp();

});

function iniciarApp(){
    crearGaleria();
}


function crearGaleria(){

    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i<13; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="../img/thumb/${i}.jpg" type= " image/jpg">
            <img loading = "lazy" width ="200" height="300" src="../img/thumb/${i}.jpg" alt ="imagen galeria">
        `;

        galeria.appendChild(imagen);
        
        
        
    }
}

