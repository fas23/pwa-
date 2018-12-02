//service worker 
if('serviceWorker' in navigator){
    console.log('Puedes usar tus serviceWorker en tu navegador');
    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('serviceWorker cargado correctamente',res))
                            .catch(err => console.log('serviceWorker no se ha podido cargar correctamente',err));
}else{
    console.log('No puedes usar tus serviceWorker en tu navegador');
}

//scroll suavizado
$(document).ready(function(){
    $("#menu a").click(function(e){
        e.preventDefault(); 

        $("html,body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
});