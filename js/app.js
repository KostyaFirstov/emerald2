const anchors = document.querySelectorAll('.anchor__links')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

new Swiper('.blog-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    simulateTouch: true,
    speed: 800,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 25,
    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: false
    // },
    breakpoints: {
      100: {
        slidesPerView: 1.26,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 1.5,
      },
      510: {
        slidesPerView: 1.8,
      },
      610: {
        slidesPerView: 2.2,
        spaceBetween: 25,  
      },
      1023: {
        slidesPerView: 3,
      },
    },
  });

  new Swiper('.message-slider', {
    spaceBetween: 25, 
    slidesPerView: 3,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
      100: {
        slidesPerView: 1.26,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1.5,
      },
      510: {
        slidesPerView: 1.8,
      },
      610: {
        slidesPerView: 2.5,
        spaceBetween: 25,  
      },
      1023: {
        slidesPerView: 3,
      },
    }
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
    autoFocus: true,
  });
  

const menuBtn = document.querySelector('.navigation__menu');
const menuBtnClose = document.querySelector('.menu-close');
const menuLinks = document.querySelector('.menu__wrapper');
const logo = document.querySelector('.navigation__logo')


menuBtn.addEventListener('click', function(){
  menuLinks.classList.add('active');
  setTimeout(function(){menuLinks.classList.add('anim')}, 0);
  logo.classList.add('active');
  document.body.style.overflow = 'hidden';
});

menuBtnClose.addEventListener('click', function(){
  menuLinks.classList.remove('anim');
  setTimeout(function(){menuLinks.classList.remove('active')}, 350);
  logo.classList.remove('active');
  document.body.style.overflow = 'auto';
});

const modalBtnsOpen = document.querySelectorAll('.navigation__request');
const modalBtnClose = document.querySelector('.modal__btn-close');
const modal = document.querySelector('.modal__window');
const modalContainer = document.querySelector('.modal__container');

modalBtnsOpen.forEach(function(btn){
  btn.addEventListener('click', function(){
    modal.classList.add('active');
    setTimeout(function(){modal.classList.add('anim')}, 100)
    document.body.style.overflow = 'hidden';
  })
});

modalBtnClose.addEventListener('click', function(){
    modal.classList.remove('anim');
    setTimeout(function(){modal.classList.remove('active')}, 400);
    if(!menuLinks.classList.contains('active')){
      document.body.style.overflow = 'auto';
    }
});

modal.addEventListener('click', function(event){
	if(!event.composedPath().includes(modalContainer)){
    modal.classList.remove('anim');
    setTimeout(function(){modal.classList.remove('active')}, 400);
    if(!menuLinks.classList.contains('active')){
      document.body.style.overflow = 'auto';
    }
	}
})


function chooseGoods(){

const filterBtn = document.querySelectorAll('.portfolio-page__filter');
const filterTable = document.querySelectorAll('.portfolio-page__table');
      
function findTable(items, category){
    items.forEach(function(card){
    const isItemFiltered = card.classList.contains(category);
    if(!isItemFiltered){
        card.classList.add('none');
        card.classList.add('hide');
    }
    else{
        card.classList.remove('none');
        setTimeout(function(){card.classList.remove('hide')}, 0);
    }
  })
}
    
filterBtn.forEach(function(button){
    button.addEventListener('click', function(){
    isActive()
    button.classList.add('active')
    const btnData = button.dataset.filter;
    findTable(filterTable, btnData);
    })
})
  
  
function isActive(){
    filterBtn.forEach(function(button){
    const haveActive = button.classList.contains('active');
    if(haveActive){
        button.classList.remove('active');
    }
    })
  } 
}
      
chooseGoods();


const portfolioConteiners = document.querySelectorAll('.portfolio-page__table');
const btnsLoadmore = document.querySelectorAll('.page-more__btn');

btnsLoadmore.forEach(function(btn){
  btn.addEventListener('click', function(){

    let whatContainer = btn.parentNode.parentNode;

    let allContainerItems = whatContainer.querySelectorAll('.portfolio__wrapper');

    allContainerItems.forEach(function(item){
      if(item.classList.contains('none')){
        item.classList.remove('none');
        setTimeout(function(){item.classList.remove('hide')}, 100);
      }
    });

  });
});


const columnBtns = document.querySelectorAll('.column__name');

columnBtns.forEach(function(btn){
  btn.addEventListener('click', function(){
  btn.classList.toggle('active');
  let columnPanel = btn.nextElementSibling;
  
  if (columnPanel.style.maxHeight) {
    columnPanel.style.maxHeight = null;
  } else {
    columnPanel.style.maxHeight = columnPanel.scrollHeight + "px";
  }
  });
});


const addTest = document.querySelector('.test__btns');
const openAddTest = document.querySelector('.test__add-open');
const closeAddTest = document.querySelector('.test__add-close');
const closeTest = document.querySelector('.test__btn-close');
const testWindow = document.querySelector('.test__window');
const testContainer = document.querySelector('.test__container');
const btnNext = document.querySelectorAll('.test__btn');
const btnPrev = document.querySelectorAll('.test__btn-prev');
const testCards = document.querySelectorAll('.test__card');

openAddTest.addEventListener('click', function(){
  testWindow.classList.add('active');
  setTimeout(function(){testWindow.classList.add('anim'),100});
  document.body.style.overflow = 'hidden';
});

closeTest.addEventListener('click', function(){
  testWindow.classList.remove('anim');
  setTimeout(function(){testWindow.classList.remove('active')}, 400);
  document.body.style.overflow = 'auto';
});

testWindow.addEventListener('click', function(event){
	if(!event.composedPath().includes(testContainer)){
    testWindow.classList.remove('anim');
    setTimeout(function(){testWindow.classList.remove('active')}, 400);
    document.body.style.overflow = 'auto';
	}
});

closeAddTest.addEventListener('click', function(){
  addTest.classList.add('none');
});

btnNext.forEach(function(btn){
  btn.addEventListener('click', function(){
    let neededPlace = btn.parentNode.parentNode.parentNode;
    let nextPlace = neededPlace.nextElementSibling;
    neededPlace.classList.add('none');
    nextPlace.classList.remove('none');
    nextPlace.classList.remove('anim');
    setTimeout(function(){nextPlace.classList.add('anim');}, 0);
  });
});

btnPrev.forEach(function(btn){
  btn.addEventListener('click', function(){
    let neededPlace = btn.parentNode.parentNode.parentNode;
    let prevPlace = neededPlace.previousElementSibling;
    neededPlace.classList.add('none');
    prevPlace.classList.remove('none');
    setTimeout(function(){prevPlace.classList.add('anim');}, 0);
  });
});

testCards.forEach(function(card){
  card.addEventListener('click', function(){
    card.classList.toggle('active');
  });
});

let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
	labelVal = label.querySelector('.input__file-button-text').innerText;

  input.addEventListener('change', function (e) {
	let countFiles = '';
	if (this.files && this.files.length >= 1)
	  countFiles = this.files.length;

	if (countFiles)
	  label.querySelector('.input__file-button-text').innerText = 'Файл успешно загружен';
	else
	  label.querySelector('.input__file-button-text').innerText = 'Загрузить';
  });
});




const materialOpenBtn = document.querySelectorAll('.material__btn');
const materialCloseBtn = document.querySelectorAll('.material__btn-close');

materialOpenBtn.forEach(function(btn){
  btn.addEventListener('click', function(){
    let parentBtn = btn.parentElement.parentElement;
    parentBtn.classList.add('active');
  });
});

materialCloseBtn.forEach(function(btn){
  btn.addEventListener('click', function(){
    let parentBtn = btn.parentElement.parentElement.parentElement;
    parentBtn.classList.remove('active');
  });
});


const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');


modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
  const modalId = this.dataset.modalButton;
  const modal = document.querySelector('#' + modalId);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'

  modal.querySelector('.modal__container').addEventListener('click', function (e) {
    e.stopPropagation();
  });
})
})


modalClosebuttons.forEach(function (item) {
  item.addEventListener('click', function () {
      const modal = this.closest('[data-modal]');
      modal.classList.remove('active');
      document.body.style.overflow = 'auto'
  })


  allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.remove('active');
        document.body.style.overflow = 'auto'
  });
});
});