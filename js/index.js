  async function showNavbar() {
    const response = await fetch('includes/navbar.html');
    const navbar = await response.text();
    document.getElementById('nav').innerHTML = navbar;
    console.log(navbar);
  }
  
  showNavbar();