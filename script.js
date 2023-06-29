const carouselItems = document.querySelectorAll(".carousel-item");

carouselItems.forEach((item) => {
  const description = item.querySelector(".description");

  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-5px)";
    item.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    description.style.display = "block";
  });

  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
    item.style.boxShadow = "none";
    description.style.display = "none";
  });
});
var eventosSection = document.getElementById('eventos-section');

eventosSection.addEventListener('mouseover', function() {
  this.classList.add('levantado');
});

eventosSection.addEventListener('mouseout', function() {
  this.classList.remove('levantado');
});
