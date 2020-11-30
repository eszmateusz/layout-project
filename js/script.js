function clickHamburgerButton() {
  const button = document.querySelector('.hamb-menu');
  
  button.addEventListener('click', function () {
    const thisButton = this;
    const button = thisButton.querySelector('.box-line');
    const sidebarMenu = document.querySelector('.list-menu');
    console.log(sidebarMenu);
    console.log(button);
    button.classList.toggle('active');
    sidebarMenu.classList.toggle('hidden');
  });
}

clickHamburgerButton();