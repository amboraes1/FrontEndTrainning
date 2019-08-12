var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var buttonno = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector(".main-nav__item--cta");

for (var i = 0;i<selectPlanButtons.length;i++){
  selectPlanButtons[i].addEventListener('click',function(){
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

if(buttonno){
  buttonno.addEventListener('click',cerrar);
}

backdrop.addEventListener('click',function(){
  mobileNav.classList.remove('open');
  cerrar();
});

function cerrar(){
  if(modal){
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
};

toggleButton.addEventListener('click',function(){
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});

ctaButton.addEventListener('animationstart', function(event){
  console.log('Animation Ended ', event);
});

ctaButton.addEventListener('animationend', function(event){
  console.log('Animation Started ', event);
});

ctaButton.addEventListener('animationiteration', function(event){
  console.log('Animation iteration ', event);
});
