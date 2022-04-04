'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

function openModal() {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
}

function closeModal() {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.code === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModal();
  }
});
