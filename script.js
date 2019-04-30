const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const container = document.querySelector('.images');

let counter = 0;

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function nextSlide(){
    container.animate([{opacity:'0.1'}, {opacity:'0.3'}, {opacity:'0.5'}, {opacity:'0.8'}], {duration: 1000, fill: 'forwards'});
    
/** counter goes back to default image and starts again*/
    if(counter === 3){
        counter = -1;
    }

    counter++;

    container.style.backgroundImage = `url(images/img-${counter}.JPG)`;
}

function prevSlide(){
    container.animate([{opacity:'0.1'}, {opacity:'0.3'}, {opacity:'0.5'}, {opacity:'0.8'}], {duration: 1000, fill: 'forwards'});

    if(counter === 0){
        counter = 3;
    }

    counter--;

    container.style.backgroundImage = `url(images/img-${counter}.JPG)`;
 
}