// Nav menu

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



// Tab section

const firstBtn = document.querySelector('#tab-btn-1');
const secondBtn = document.querySelector('#tab-btn-2');
const thirdBtn = document.querySelector('#tab-btn-3');

const firstTab = document.querySelector('#tab-1');
const secondTab = document.querySelector('#tab-2');
const thirdTab = document.querySelector('#tab-3');


firstBtn.onclick = () => {
  toShow(firstTab, firstBtn);
  toHide(secondTab, secondBtn)
  toHide(thirdTab, thirdBtn)
}

secondBtn.onclick = () => {
  toShow(secondTab, secondBtn);
  toHide(firstTab, firstBtn)
  toHide(thirdTab, thirdBtn)
}

thirdBtn.onclick = () => {
  toShow(thirdTab, thirdBtn);
  toHide(firstTab, firstBtn);
  toHide(secondTab, secondBtn);
}

function toShow(tab, btn) {
  if (tab.classList.contains('features__tab--hidden')) {
    tab.classList.remove('features__tab--hidden');
    btn.classList.add('features__tab-buttons--active');
  }
}

function toHide(tab, btn) {
  if (!tab.classList.contains('features__tab--hidden')) {
    tab.classList.add('features__tab--hidden');
    btn.classList.remove('features__tab-buttons--active');
  }
}