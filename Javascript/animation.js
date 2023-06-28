window.sr = ScrollReveal ();

sr.reveal('.presentation , .subtitle', {
    duration: 1500, 
    origin: 'bottom',
    distance: '150px'
}); 

sr.reveal('.about-text', {
    duration: 1500, 
    origin: 'right',
    distance: '-200px'
}); 

sr.reveal('.about-img', {
    duration: 1500, 
    origin: 'left',
    distance: '-200px'
}); 

ScrollReveal().reveal('.projects-items', { reset: true, interval: 100 });

sr.reveal('.testimony-item', {
    duration: 1500, 
    origin: 'top',
    distance: '-200px'
}); 


