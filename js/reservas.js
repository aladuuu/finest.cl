$(function(){
    $('#boton-reservas').click(function(){ 
        if(!$('#iframe-reserva').length) {
                $('#iframeHolder').html('<iframe id="iframe-reserva" class="iframe-reservas" src="https://santiagofinest.setmore.com" frameborder="0"></iframe>');
        }
    });   
});