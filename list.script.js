      window.addEventListener('DOMContentLoaded', () => {

          const planetButton = document.querySelector('.nav-link', '.planets'),
              planets = document.querySelector('.tabheader__items'),
              tabs = document.querySelectorAll('.tabheader__link'),
              tabsContent = document.querySelectorAll('.tabcontent'),
              titleLink = document.querySelector('.title-link'),
              upButton = document.querySelector('.up__button'),
              tabsDescrBtns = document.querySelectorAll('.tabcontent__descr__btn'),
              tabsDescrContent = document.querySelectorAll('.tabcontent__descr'),
              sliedeIn=document.querySelectorAll('.slidein');


          console.log(sliedeIn);

          planetButton.addEventListener('click', () => {
              console.log('ciao');
              if (!planets.classList.contains('hidden')) {
                  planets.classList.add('hidden');
              } else if (planets.classList.contains('hidden')) {
                  planets.classList.remove('hidden');
                  for(let i=0;i<tabs.length;i++){
                      const delay=0+i;
                      tabs[i].classList.add('slidein');
                      
                  }
              }
          });

          function hideTabContent() {
              tabsContent.forEach(item => {
                  item.classList.add('hide');
                  item.classList.remove('show', 'fade');
              });
              tabs.forEach(item => {
                  item.classList.remove('tabheader__link__active');
              });
          }

          function showTabContent(i = 0) {
              tabsContent[i].classList.add('show', 'fade');
              /* let childs= tabsContent[i].children;

                     console.log(childs); */
              tabsContent[i].classList.remove('hide');
              tabs[i].classList.add('tabheader__link__active');
          }

          hideTabContent();
          showTabContent();

          titleLink.addEventListener('click', () => {
              hideTabContent();
              showTabContent(0);
          });

          
       /*    function hideTabDescrContent() {
            tabsDescrContent.forEach(item => {
                item.classList.remove('show', 'fade');
                item.classList.add('hide');
            });
            tabsDescrBtns.forEach(item => {
                item.classList.remove('tabcontent__descr__btn__active');
                item.textContent = 'Show more';
            });
        }

        function showTabDescrContent(i = 0) {
        
                tabsDescrContent[i].classList.remove('hide');
                tabsDescrContent[i].classList.add('show', 'fade');
                tabsDescrBtns[i].classList.remove('tabcontent__descr__btn');
                tabsDescrBtns[i].classList.add('tabcontent__descr__btn__active');
                tabsDescrBtns[i].textContent = 'Show less';      
        }
        hideTabDescrContent();
        showTabDescrContent(); */

          tabs.forEach(item => {
              item.addEventListener('click', (event) => {
                  const target = event.target;
                  if (target && target.classList.contains('tabheader__link')) {
                      tabs.forEach((item, i) => {
                          if (target == item) {
                              hideTabContent();
                              showTabContent(i);
                             /*  hideTabDescrContent() ;
                              showTabDescrContent(); */
                          }
                      });
                  }
              });
          });

         /*  tabsDescrBtns.forEach(item => {
              item.addEventListener('click', (event) => {
                  const target = event.target;
                  if (target && target.classList.contains('tabcontent__descr__btn')) {
                      tabsDescrBtns.forEach((item, j) => {
                          if (target == item) {
                              hideTabDescrContent();
                              showTabDescrContent(j);
                          }
                      });
                  }
              });
          }); */


          window.onscroll = function () {
              if (window.pageYOffset > 200) {
                  upButton.classList.remove('hidden');
              } else {
                  upButton.classList.add('hidden');
              }
          };

          upButton.onclick = function () {
              window.scrollTo(0, 0);
          };

      });