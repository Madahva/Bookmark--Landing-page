const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');

const modalLinks = document.querySelectorAll('.header__modal-body__links')
const modal = document.querySelector('#modal');

openBtn.onclick = () => {
  modal.classList.remove('hidden');
  openBtn.classList.add('hidden');
}

closeBtn.onclick = () => {
  modal.classList.add('hidden');
  openBtn.classList.remove('hidden');
}

for (var i = 0; i < modalLinks.length; i++) {
  modalLinks[i].onclick = () => {
    modal.classList.add('hidden');
    openBtn.classList.remove('hidden');
  }
}

