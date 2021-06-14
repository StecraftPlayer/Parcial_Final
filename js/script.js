// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){

    // Activación de transición del menú principal y del menú móvil
    $('header article nav a, aside#menu-moviles nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });



    // Funciones de Abrir y Cerrar el Menú Responsive
    $('a#abrir-menu').click(function(){
        $('aside#menu-moviles').animate({
            right: 0
        },500,'easeOutExpo');

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();

        event.preventDefault();
    });

    $('a#cerrar-menu, aside#menu-moviles nav a').click(function(){
        $('aside#menu-moviles').animate({
            right: -290
        },1000,'easeOutElastic');
        
        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        event.preventDefault();
    });

$ (document).ready(function(){

    $('#Switch').click (function(){
        $('main section#Filtro article img').hide(200);
        $('main section#Filtro article img.Switch').show(200);

        $('#Switch').addClass('Activo')
        $('#Switch').removeClass('inactivo')

        $('#Todos, #Wii, #Cube ').removeClass('Activo')
        $('#Todos, #Wii, #Cube ').addClass('Inactivo')

    })

    $('#Wii').click (function(){
        $('main section#Filtro article img').hide(200);
        $('main section#Filtro article img.Wii').show(200);

        $('#Wii').addClass('Activo')
        $('#Wii').removeClass('inactivo')

        $('#Todos, #Switch, #Cube ').removeClass('Activo')
        $('#Todos, #Switch, #Cube ').addClass('Inactivo')


    })

    $('#Cube').click (function(){
        $('main section#Filtro article img').hide(200);
        $('main section#Filtro article img.Cube').show(200);

        
        $('#Cube').addClass('Activo')
        $('#Cube').removeClass('inactivo')

        $('#Todos, #Switch, #Wii ').removeClass('Activo')
        $('#Todos, #Switch, #Wii ').addClass('Inactivo')


    })

    $('#Todos').click (function(){
        $('main section#Filtro article img').show(200);

        $('#Todos').addClass('Activo')
        $('#Todos').removeClass('Inactivo')

        $('#Switch, #Wii, #Cube ').removeClass('Activo')
        $('#Switch, #Wii, #Cube ').removeClass('inactivo')


    })
})

});