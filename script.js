"use strict";
const buttons = document.querySelectorAll('.object-link');
const content = document.querySelectorAll('.planet-info-list');
const solarSystem = document.querySelector('.solar-system');
const solarSButton = document.querySelector('.solarSystem');
console.log(buttons);
console.log(solarSButton);

/* solarSButton.addEventListener('click', function(){
    solarSystem.classList.toggle('hidden');
}); */

for (let i = 0; i < buttons.length ; i++) {
    /* if(!(content[i].classList.contains('solar-system'))){ */
        buttons[i].addEventListener('click', function() {
            for(let j=0;j<content.length;j++){
                if(j!==i){
                 /*    solarSystem.classList.add('hidden'); */
                    content[j].classList.add('hidden');
                }else{
                    content[j].classList.toggle('hidden');
                }
        }
    });

}



