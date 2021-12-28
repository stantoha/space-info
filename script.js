
const buttons = document.querySelectorAll('.planet-list-link');
const content = document.querySelectorAll('.planet-info-list');
const solarSystem = document.querySelector('.solar-system');
const solarSButton = document.querySelector('.solarSystem-link');

const buttonClick = function () {
    solarSButton.addEventListener('click', function () {
        solarSystem.classList.toggle('hidden');
    });
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            if (!(solarSystem.classList.add('hidden'))) {
                if (!(content[i].classList.contains('hidden'))) {
                    content[i].classList.add('hidden');
                } else {
                    solarSystem.classList.add('hidden');
                    for (let j = 0; j < content.length; j++) {
                        if (j !== i) {
                            content[j].classList.add('hidden');
                        } else {
                            content[j].classList.toggle('hidden');
                        }
                    }
                }
            }
        });
    }
};
buttonClick();