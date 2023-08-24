const carousel = new bootstrap.Carousel('#myCarousel')
const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  direction:"right"
  relatedTarget:"div"
})

