// 🍔 Hamburger menu for mobile
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");
hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});



// Modal setup
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("imgInModal");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const modalImages = Array.from(document.querySelectorAll('.modal-img, .hero-gallery img'));
const socialBar = document.querySelector('.floating-social');
let currentIndex = -1;



// Open modal
modalImages.forEach((img, index) => {
  img.addEventListener('click', function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    currentIndex = index;

    socialBar.classList.add('hide-social'); // ✅ hide social
  });
});



// Close modal on 'x'
closeBtn.onclick = function () {
  modal.style.display = "none";
  socialBar.classList.remove('hide-social'); // ✅ show social
};




window.addEventListener("click", function (event) {
  if (event.target === modal || event.target.classList.contains("modal")) {
    modal.style.display = "none";
    socialBar.classList.remove('hide-social');
  }
});








// Modal next/prev
function showModalImage() {
  const img = modalImages[currentIndex];
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

document.querySelector(".prev")?.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showModalImage();
  }
});

document.querySelector(".next")?.addEventListener("click", () => {
  if (currentIndex < modalImages.length - 1) {
    currentIndex++;
    showModalImage();
  }
});

// Smooth scroll for Menu button
const menuBtn = document.querySelector('a[href="#menu"]');
const menuSection = document.getElementById('menu-section');

menuBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  menuSection.classList.remove('hidden');
  menuSection.scrollIntoView({ behavior: 'smooth' });
});





