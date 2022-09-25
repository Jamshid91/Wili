const mobileMenu = document.querySelector('.mobile-menu'),
        menuBurger = document.querySelector('.menu-burger'),
      mobileMenuLists = document.querySelectorAll('.mobile-menu ul li'),
      body = document.querySelector('body'),
      catalog = document.querySelector('.catalog'),
      catalogMob = document.querySelector('.catalog-mob'),
      catalogInfo = document.querySelector('.catalog-info'),
      more = document.querySelector('.more'),
      moreInfo = document.querySelector('.more-info'),
      moreMob = document.querySelector('.more-mob'),
      moreInfoMob = document.querySelector('.more-info-mob'),
      selectionBtn = document.querySelectorAll('.selection__btn'),
      selectionInfoList = document.querySelectorAll('.selection-info-list');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('change');
    mobileMenu.classList.toggle('showMobileMenu');
    body.classList.toggle('showScroll')
});

catalog.addEventListener('click', () => {
  catalogInfo.classList.toggle('d-none')
});
catalogMob.addEventListener('click', () => {
  catalogInfo.classList.toggle('d-none')
});

moreInfo.addEventListener('click', () => {
  more.classList.toggle('d-none')
});
moreInfoMob.addEventListener('click', () => {
  moreMob.classList.toggle('d-none')
});

selectionBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('d-none')
  });
})

selectionInfoList.forEach(elem => {
  elem.addEventListener('click', () => {
    elem.parentElement.parentElement.children[0].children[0].children[1].children[1].innerText = elem.innerText;
    elem.parentElement.classList.toggle('d-none');
  })
})


$('.wrapper-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  focusOnSelect: true,
  touchMove: true,
  arrows: false,
  autoplay: true,
    autoplaySpeed: 7000,
    speed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          centerPadding: '15px',
        }
      },
    ]
})