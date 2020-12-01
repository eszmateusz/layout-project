function clickHamburgerButton() {
  const button = document.querySelector('.hamb-menu');
  const topBar = document.querySelector('.top-bar');
  const hambMenu = document.querySelector('.burger-menu .button');
  const textMenu = document.querySelector('.burger-menu .text');
  const underMenu = document.querySelector('.under-menu');
  const sidebar = document.querySelector('.sidebar');
  console.log(hambMenu);
  console.log(topBar);

  button.addEventListener('click', function () {
    const thisButton = this;
    const button = thisButton.querySelector('.box-line');
    const sidebarMenu = document.querySelector('.list-menu');
    console.log(sidebarMenu);
    console.log(button);
    button.classList.toggle('active');
    sidebarMenu.classList.toggle('hidden');
    topBar.classList.toggle('close-menu');
    underMenu.classList.toggle('close-menu');
    textMenu.classList.toggle('close-menu');
    sidebar.classList.toggle('width-menu');
  });
}

clickHamburgerButton();