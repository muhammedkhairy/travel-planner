const slidingNavBar = () => {
  const dashed = document.querySelector('.dashes');
  const nav = document.querySelector('.links');
  const navLinks = document.querySelectorAll('.links li');

  dashed.addEventListener('click', () => {

    nav.classList.toggle('nav__active')

    navLinks.forEach((link, index) => {
      if(link.style.animation ) {
        link.style.animation = '';
      }else {
        link.style.animation = `navLinks 0.5s ease forwards ${index/7 + 0.4}s`;
      }
    })

    dashed.classList.toggle('dashes__animate');
  })
}

slidingNavBar();