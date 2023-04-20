const hamburger = document.querySelectorAll('.fa-bars')
const menuMobile = document.querySelectorAll('.menu__mobile')

hamburger.onclick('click', function(){
    
    if ( menuMobile.hasClass('menu__show') )
    {
        menuMobile.removeClass('menu__show')
    }
    else
    {
        menuMobile.addClass('menu__show')
    }
} )
