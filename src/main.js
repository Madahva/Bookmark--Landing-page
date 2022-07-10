// Nav menu

const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const headerImage = document.querySelector('#header-image');

const modalLinks = document.querySelectorAll('.header__modal-body__links')
const modal = document.querySelector('#modal');

openBtn.onclick = () => {
  modal.classList.remove('hidden');
  openBtn.classList.add('hidden');
  headerImage.style.visibility = 'hidden'
}

closeBtn.onclick = () => {
  modal.classList.add('hidden');
  openBtn.classList.remove('hidden');
  headerImage.style.visibility = 'visible'
}

for (var i = 0; i < modalLinks.length; i++) {
  modalLinks[i].onclick = () => {
    modal.classList.add('hidden');
    headerImage.style.visibility = 'visible';
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



//FAQ Accordion Section

var acc = document.querySelectorAll(".faq__accordion-question");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("faq__accordion-question--active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    panel.classList.toggle('show-text');
  });
}



// Contact Section

const email = document.querySelector('#email');
const inputContainer = document.querySelector('.contact__input-container');
const msgContainer = document.querySelector('.contact__msg');
const errorMsg = document.querySelector('.contact__msg-error');
const errorImg = document.querySelector('.contact__input-image--error');
const succestMsg = document.querySelector('.contact__msg-succest');
const succestImg = document.querySelector('.contact__input-image--succest');

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  validateEmail((email.value.trim()));
})

function validateEmail(mail) {
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);

  isValid ? handleSuccest() : handleError();

  function handleSuccest() {
    errorMsg.style.display = 'none';
    errorImg.style.display = 'none';
    inputContainer.classList.remove('contact__input-container--error');

    inputContainer.classList.add('contact__input-container--succest');
    msgContainer.style.display = 'block'
    succestMsg.style.display = 'block'
    succestImg.style.visibility = 'visible'
    email.value = '';
  }

  function handleError() {
    succestMsg.style.display = 'none';
    succestImg.style.visibility = 'hidden'
    inputContainer.classList.remove('contact__input-container--succest');

    inputContainer.classList.add('contact__input-container--error');
    msgContainer.style.display = 'block';
    errorMsg.style.display = 'block';
    errorImg.style.display = 'block';
  }
}
