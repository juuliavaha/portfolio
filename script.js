const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active'); 

   if (navLinks.classList.contains('active')) {
    document.body.style.overflow = 'hidden';  
  } else {
    document.body.style.overflow = '';        
  }
});

document.querySelectorAll('.lightbox-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const instance = basicLightbox.create(`
      <img src="${link.href}" style="width: 100%;" />
    `);
    instance.show();
  });
});