"use strict";
const buttons=document.querySelectorAll('a.object-link');
const planetBlocks=document.querySelectorAll('.planet-info-list');
const solarSystem=document.querySelector('.solar-system');
console.log(buttons);
console.log(planetBlocks);
function hid(){
    solarSystem.classList.toggle('hidden');
    console.log(solarSystem);
}

for (let i=0;i<buttons.length-1;i++){
    
    buttons[i].addEventListener('click', function(){
       hid();
    });
    if(solarSystem.classList.contains('hidden')){
        planetBlocks[i].classList.remove('hidden');
    planetBlocks[i].classList.add('shown');
    }
    else{
        planetBlocks[i].classList.add('hidden');
        planetBlocks[i].classList.remove('shown');
    }
    
}


