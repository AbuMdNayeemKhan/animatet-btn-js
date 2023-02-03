let texBtn = document.querySelector('.text-btn');
let khushi = document.querySelector('.khushi');
let sukhi = document.querySelector('.sukhi');
let sumi = document.querySelector('.sumi');
let rumi = document.querySelector('.rumi');

texBtn.addEventListener("click", function(){
    khushi.classList.toggle('active');
    sukhi.classList.toggle('active');
    sumi.classList.toggle('active');
    rumi.classList.toggle('active');
});