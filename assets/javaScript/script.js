// MENU MOBILE
const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event){
  if(event.type === 'touchstart') event.preventDefault();


  const menuPrincipal = document.getElementById('menu-principal');

  menuPrincipal.classList.toggle('active');
  
  const active = menuPrincipal.classList.contains('active');

  event.currentTarget.setAttribute('aria-expanded', active);
  if(active) {
    event.currentTarget.setAttribute('arial-label', 'Fechar menu');
  
  } else{
    event.currentTarget.setAttribute('arial-label', 'Abrir menu');
  }

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


// LOGIN - MODAL
function abrirModal(){
  document.getElementById('modal').style.top = '0';
};

function fecharModal(){
  document.getElementById('modal').style.top = '-100%';
};

// INCRIÇÃO - MODAL
function abrirCadastro(){
  document.getElementById('modal-cadastro').style.top = '0';
};

function fecharCadastro(){
  document.getElementById('modal-cadastro').style.top = '-100%';
};