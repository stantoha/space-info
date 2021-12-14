"use strict";
const planetButtons = document.querySelectorAll('.planet-link');
const Content = document.querySelectorAll('.content section');
const solarS = document.querySelector('.solar-system');
const solarSB = document.querySelector('.solarSystem');
console.log(solarSB);

/* solarSB.addEventListener('click', function(){
    solarS.classList.toggle('hidden');
}); */

for (let i = 0; i < planetButtons.length ; i++) {
    if(!(Content[i].classList.contains('solar-system'))){
        planetButtons[i].addEventListener('click', function() {
            for(let j=0;j<Content.length;j++){
                if(j!==i){
                    solarS.classList.add('hidden');
                    Content[j].classList.add('hidden');
                }else{
                    Content[j].classList.toggle('hidden');
                }
        }
    });
}
else{
    solarS.classList.toggle('hidden');
}
}



