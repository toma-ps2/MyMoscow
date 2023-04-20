const line = document.querySelector('.slider__line')
const images = document.querySelectorAll('.slider__item')
const total = images.length-1
let counter = 0

function rollSlider()
{
    line.style = 'transform:translateX(-'+(counter * 150) +'%)';
}

document.querySelector('.fa-arrow-circle-right').onclick = function() {
    document.querySelectorAll('.dotted')[counter].classList.remove('dotted_active')
    counter++
    if (counter > total ) counter = 0
    document.querySelectorAll('.dotted')[counter].classList.add('dotted_active')
    rollSlider()
}

document.querySelector('.fa-arrow-circle-left').onclick = function() {
    document.querySelectorAll('.dotted')[counter].classList.remove('dotted_active')
    counter--
    if (counter < 0) counter = total
    document.querySelectorAll('.dotted')[counter].classList.add('dotted_active')

    rollSlider()
}

document.querySelector('.slider__dotted').onclick = function(event){
    let elem = event.target
    if (!elem.classList.contains('dotted')) return
 
     document.querySelector('.slider__dotted .dotted_active').classList.remove('dotted_active')
     elem.classList.add('dotted_active')
    
    let id = elem.getAttribute('data-id') - 1 
    
    counter = id
    
    rollSlider()
}

