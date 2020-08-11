$(document).ready(function () {
  /* Slick slider */
  $('.photo__slider').slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 701,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  /* Burger menu */
  let wrapper = document.querySelector('.burger__button-wrapper');
  let burger = document.querySelector('.burger__button');
  let mobileNav = document.querySelector('.menu__mobile-nav');
  let vacation = document.querySelector('.vacation__wrapper');
  let mobileLink = document.querySelectorAll('.mobile-nav__link');

  wrapper.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('active');
    mobileNav.classList.toggle('menu__mobile-nav--active');
  });
});
