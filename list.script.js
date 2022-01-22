      window.addEventListener('DOMContentLoaded', ()=>{

        const planetButton=document.querySelector('.nav-link','.planets'),
        planets=document.querySelector('.tabheader__items'),
    tabs=document.querySelectorAll('.tabheader__link'),
    tabsContent=document.querySelectorAll('.tabcontent'),
    titleLink=document.querySelector('.title-link'),
    upButton = document.querySelector('.up__button');

   
    planetButton.addEventListener('click',()=>{
            console.log('ciao');
            if(!planets.classList.contains('hidden')){
                planets.classList.add('hidden');
            }
             else if(planets.classList.contains('hidden')){
                planets.classList.remove('hidden');
             }
        });
  
   
        console.log(tabs);



    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });
        tabs.forEach(item=>{
           item.classList.remove('tabheader__link__active');
        });
    }
   
   function showTabContent(i=0){
       tabsContent[i].classList.add('show','fade');
       tabsContent[i].classList.remove('hide');
       tabs[i].classList.add('tabheader__link__active');
   }
   
   hideTabContent();
   showTabContent();

    titleLink.addEventListener('click',()=>{
        hideTabContent();
        showTabContent(0);
    });

    tabs.forEach(item=>{
        item.addEventListener('click',(event)=>{
            const target=event.target;
            if(target && target.classList.contains('tabheader__link')){
                tabs.forEach((item,i)=>{
                     if(target==item){
                        hideTabContent();
                        showTabContent(i);
                     }
                });
            }
        });
    });
    window.onscroll = function () {
        if (window.pageYOffset > 200) {
          upButton.classList.remove('hidden');
        } else{
          upButton.classList.add('hidden');}
      };
      
      upButton.onclick = function () {
        window.scrollTo(0, 0);
      };


   });

 /*   
const planetButtons = document.querySelectorAll('.planet-link');
const Content = document.querySelectorAll('.planet-info-list');
const solarS = document.querySelector('.solar-system');
const solarSB = document.querySelector('.solarSystem-link');
console.log(planetButtons);

solarSB.addEventListener('click', function(){
    solarS.classList.toggle('hidden');
});

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



 */