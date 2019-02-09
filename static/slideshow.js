setInterval(() => {
  const slides = Array.from(document.querySelectorAll('.slideshow li'))
  const activeIndex = slides.findIndex(slide => slide.classList.contains('active'))

  slides[activeIndex].classList.remove('active')
  slides[(activeIndex + 1) % slides.length].classList.add('active')
}, 7000)
