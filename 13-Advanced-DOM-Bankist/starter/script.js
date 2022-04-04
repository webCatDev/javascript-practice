'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const allSections = document.querySelectorAll('.section');
const images = document.querySelectorAll('img[data-src]');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// // cookie

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookies for improved
// functionality and analytics.
// <button class="btn btn--close-cookie">Got it!</button>`;

// header.append(message);

btnScrollTo.addEventListener('click', e => {
  const s1Coords = section1.getBoundingClientRect();
  window.scrollTo({
    left: s1Coords.left + window.pageXOffset,
    top: s1Coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  // section1.scrollIntoView({behavior:"smooth"}) for modern browsers
});

// Page Navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Components

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;

      logo.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Bad practice
// const  initialCoords = section1.getBoundingClientRect()

// window.addEventListener("scroll", function(e){
//   if(window.scrollY > initialCoords.top){
//     nav.classList.add("sticky")
//   } else {
//     nav.classList.remove("sticky")
//   }
// })

const obsCb = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.classList.remove('sticky');
    } else {
      nav.classList.add('sticky');
    }
  });
};

const headerObserver = new IntersectionObserver(obsCb, {
  root: null,
  threshold: 0,
  rootMargin: '-' + getComputedStyle(nav).height,
});

headerObserver.observe(header);

function showSections(entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }
  });
}

const sectionObserver = new IntersectionObserver(showSections, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

function showImages(entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.setAttribute('src', entry.target.dataset.src);
    entry.target.addEventListener('load', () => {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  });
}

const imgObserver = new IntersectionObserver(showImages, {
  root: null,
  threshold: 0.15,
  rootMargin:"200px"
});

images.forEach(img => imgObserver.observe(img));

const slides = document.querySelectorAll(".slide")
const btnLeft = document.querySelector(".slider__btn--left")
const btnRight = document.querySelector(".slider__btn--right")
let currentSlide = 0;
const maxSlides = slides.length

const goToSlide = slide =>
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
  );

goToSlide(0)

const prevSlide = ()=> {
 if (currentSlide === 0) {
   currentSlide = maxSlides - 1;
 } else {
   currentSlide--;
 }
 goToSlide(currentSlide);
 activateDots(currentSlide);

}

const nextSlide = ()=>{
if (currentSlide === maxSlides - 1) {
  currentSlide = 0;
} else {
  currentSlide++;
}
goToSlide(currentSlide);
activateDots(currentSlide);

}

btnRight.addEventListener("click", nextSlide)

btnLeft.addEventListener('click', prevSlide);

document.addEventListener("keyup", (e)=>{
  
  if(e.code==="ArrowRight"){
nextSlide();
activateDots(currentSlide)
  } 
  if(e.code==="ArrowLeft"){
prevSlide();
activateDots(currentSlide)
  } 
  
})


const dotContainer = document.querySelector(".dots")

const createDots = ()=>{
  slides.forEach((_ , i)=> {
    dotContainer.insertAdjacentHTML("beforeend", 
    `<button class="dots__dot" data-slide="${i}"></button>`)
    
  })

  document.querySelectorAll('.dots__dot').forEach(dot =>
    dot.addEventListener('click', function () {
      currentSlide = Number(this.dataset.slide);
      goToSlide(currentSlide);
      activateDots(currentSlide)
    })
  );
}

createDots();

function activateDots(slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
} 


