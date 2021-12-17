const planetListButton=document.querySelector('.planet-list-object-link');
const planetList=document.querySelector('.planet-list');
const solarSystemModelBut=document.querySelector('.solar-system-modelbut');
const solarSystemModel=document.querySelector('.solar-system-model');
planetListButton.addEventListener('click', function(){
    planetList.classList.toggle('hidden');
});
solarSystemModelBut.addEventListener('click', function(){
    solarSystemModel.classList.toggle('hidden');
    console.log(solarSystemModel);

});