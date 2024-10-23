"use strict";

{
  const open = document.getElementById('open');
  const menuButton = document.getElementById('menu-button')
  const hiddenButton = document.getElementById('hidden-button');

  menuButton.addEventListener('click', () => {
    open.classList.add('slide');
    menuButton.classList.add('none');
    hiddenButton.classList.remove('none');
  });

  hiddenButton.addEventListener('click', () => {
    open.classList.remove('slide');
    menuButton.classList.remove('none');
    hiddenButton.classList.add('none');
  });
}