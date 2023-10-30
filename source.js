const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
        breakpoints: {
        300: {
            slidesPerView: 'auto',
            spaceBetween: 16,
        },
        767: {
            enabled: false,
            onAny() {
                swiper.destroy(true, true);
            }
        }

    }
});





const btnShowMore = document.querySelector('.button-showmore');
const btnHide = document.querySelector('.button-hide');
const sliders = document.querySelector('.swiper');

btnShowMore.addEventListener ('click', function () {
    btnShowMore.classList.add('button--hidden');
    sliders.classList.add ('swiper-total');
    btnHide.classList.remove('button--hidden');
});

btnHide.addEventListener ('click', function () {
    btnHide.classList.add('button--hidden');
    sliders.classList.remove ('swiper-total');
    btnShowMore.classList.remove('button--hidden');
  });
