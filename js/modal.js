const modalOpenBtn =  document.getElementById('modalOpen');
const modalCloseBtn =  document.querySelector('.modalClose');
const easyModal =  document.getElementById('easyModal');

modalOpenBtn.addEventListener('click', () => {
  easyModal.classList.add('open');
});
modalCloseBtn.addEventListener('click', () => {
  easyModal.classList.remove('open');
});