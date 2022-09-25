const mobileMenu = document.querySelector('.mobile-menu'),
        menuBurger = document.querySelector('.menu-burger'),
      mobileMenuLists = document.querySelectorAll('.mobile-menu ul li'),
      body = document.querySelector('body');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('change');
    mobileMenu.classList.toggle('showMobileMenu');
    body.classList.toggle('showScroll')
});


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