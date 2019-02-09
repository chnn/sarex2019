setInterval(() => {
  const slides = Array.from(document.querySelectorAll('.slideshow li'))

  slides.find(slide => slide.classList.contains('active')).classList.remove('active')
  slides[Math.floor(Math.random() * slides.length)].classList.add('active')
}, 7000)
