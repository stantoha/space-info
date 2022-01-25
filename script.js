window.addEventListener('DOMContentLoaded', () => {
    
    const tabsDescrBtns = document.querySelectorAll('.tabcontent__descr__btn'),
    tabsDescrContent = document.querySelectorAll('.tabcontent__descr');

    function hideTabDescrContent() {
        tabsDescrContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabsDescrBtns.forEach(item => {
            item.classList.remove('tabcontent__descr__btn__active');
            item.textContent='Show more';
        });
    }

    function showTabDescrContent(i = 0) {
        tabsDescrContent[i].classList.add('show', 'fade');
        tabsDescrContent[i].classList.remove('hide');
        tabsDescrBtns[i].classList.add('tabcontent__descr__btn__active');
        tabsDescrBtns[i].textContent='Show less';
    }

    hideTabDescrContent();
    showTabDescrContent();

    tabsDescrBtns.forEach(item => {
        item.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('tabcontent__descr__btn')) {
                tabsDescrBtns.forEach((item, i) => {
                    if (target == item) {
                        hideTabDescrContent();
                        showTabDescrContent(i);
                    }
                });
            }
        });
    });





});