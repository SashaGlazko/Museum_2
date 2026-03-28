'use strict';

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector('.dropdown__trigger');
  const content = dropdown.querySelector('.dropdown__content');

  const initialHeight = content.scrollHeight;

  content.style.height = '0';

  trigger.addEventListener('click', () => {
    if (content.classList.contains('dropdown__content--active')) {
      content.classList.remove('dropdown__content--active');
      content.style.height = '0';
    } else {
      content.classList.add('dropdown__content--active');
      content.style.height = `${initialHeight}px`;
    }
  });
});
