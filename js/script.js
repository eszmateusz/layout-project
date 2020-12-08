function clickHamburgerButton() {
  const button = document.querySelector('.hamb-menu');

  const topBar = document.querySelector('.top-bar');

  const hambMenu = document.querySelector('.container .container-sidebar .burger-menu .button');
  const underMenu = document.querySelector('.under-menu');

  const containerSidebar = document.querySelector('.container-sidebar');
  const sidebar = document.querySelector('.sidebar');
  const container = document.querySelector('.container');

  button.addEventListener('click', function() {
    const thisButton = this;
    const button = thisButton.querySelector('.box-line');
    const sidebarMenu = document.querySelector('.list-menu');

    button.classList.toggle('active');
    sidebarMenu.classList.toggle('hidden');
    topBar.classList.toggle('close-menu');
    underMenu.classList.toggle('close-menu');
    sidebar.classList.toggle('close-menu');
    containerSidebar.classList.toggle('close-menu');
    hambMenu.classList.toggle('vis-hamb');
    container.classList.toggle('content-max-width');
  });
}

clickHamburgerButton();