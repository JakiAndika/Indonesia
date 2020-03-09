// jQuery
// let lebarContainer = $('.container').width();

// for( let i = 0; i < lebarContainer; i++ ) {
//     let bendera = $('<div class="bendera">');
//     bendera.css('animation-delay', i * 10 + 'ms');
//     $('.container').append(bendera);
// }

// javascript murni
let container = document.querySelector('.container');
let lebarContainer = parseInt(getComputedStyle(container).width, 10);
for (let i = 0; i < lebarContainer; i++) {
    let elBendera = document.createElement('div');
    elBendera.classList.add('bendera');
    elBendera.style.animationDelay = i * 10 + 'ms';
    container.appendChild(elBendera);
}