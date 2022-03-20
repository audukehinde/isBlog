let toggle = document.querySelector('.btn-toggle');
let collapse = document.querySelectorAll('.main-nav');

toggle.addEventListener('click', function() {
  collapse.forEach(col => col.classList.toggle('collapse-toggle'));
})
