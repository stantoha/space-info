
const planetButtons = document.querySelectorAll('.planet-link');
const Content = document.querySelectorAll('.planet-info-list');
const solarS = document.querySelector('.solar-system');
const solarSB = document.querySelector('.solarSystem-link');
console.log(planetButtons);

/* solarSB.addEventListener('click', function(){
    solarS.classList.toggle('hidden');
}); */

for (let i = 0; i < planetButtons.length ; i++) {
    
        planetButtons[i].addEventListener('click', function() {
            solarS.classList.add('hidden'); 
            if(!(Content[i].classList.contains('hidden'))){
                Content[i].classList.add('hidden');
            }
            else{
                for(let j=0;j<Content.length;j++){
                    if(j!==i){
                        Content[j].classList.add('hidden');
                }
                    else{
                    Content[j].classList.toggle('hidden');
                }
                }
            }
           /*  for(let j=0;j<Content.length;j++){
                if(j!==i){
                    solarS.classList.add('hidden');
                    Content[j].classList.add('hidden');
                }else{
                    Content[j].classList.toggle('hidden');
                }
        } */
    });

}



