// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementsByClassName("close")[0];

// Open lightbox on certificate click
document.querySelectorAll(".certificate-card img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Close lightbox on X click or outside image
closeBtn.onclick = () => (lightbox.style.display = "none");
lightbox.onclick = e => {
  if (e.target === lightbox) lightbox.style.display = "none";
};
