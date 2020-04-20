export function scrollPage() {
  const navBarSelection = document.querySelectorAll('nav li');
  const sections = document.querySelectorAll('section');
  navBarSelection[0].addEventListener('click', () => {
    sections[0].scrollIntoView({
      block: 'start'
    });
  });
  navBarSelection[1].addEventListener('click', () => {
    sections[1].scrollIntoView({
      block: 'end'
    });
  });
  navBarSelection[2].addEventListener('click', () => {
    sections[3].scrollIntoView({
      block: 'center'
    });
  });
}