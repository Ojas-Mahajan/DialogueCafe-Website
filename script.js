
// // Hamburger menu for mobile
// const hamburgerBtn = document.getElementById("hamburger-btn");
// const navLinks = document.getElementById("nav-links");
// hamburgerBtn.addEventListener("click", () => {
//   navLinks.classList.toggle("show");
// });

// // Modal for gallery images
// const modal = document.getElementById("imgModal");
// const modalImg = document.getElementById("imgInModal");
// const captionText = document.getElementById("caption");
// const closeBtn = document.querySelector(".close");

// document.querySelectorAll('.modal-img, .hero-gallery img').forEach(img => {
//   img.addEventListener('click', function() {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
//   });
// });

// closeBtn.onclick = function() {
//   modal.style.display = "none";
// };

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };


// const menuBtn = document.querySelector('a[href="#menu"]');
// const menuSection = document.getElementById('menu-section');

// menuBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   menuSection.classList.remove('hidden');
//   menuSection.scrollIntoView({ behavior: 'smooth' });
// });













// 🍔 Hamburger menu for mobile
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");
hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// 🖼️ Modal setup
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("imgInModal");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const modalImages = Array.from(document.querySelectorAll('.modal-img, .hero-gallery img'));
let currentIndex = -1;

// 🔍 Open image in modal
modalImages.forEach((img, index) => {
  img.addEventListener('click', function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    currentIndex = index;
  });
});

// ❌ Close modal on close icon
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// ❌ Close modal when clicking outside image
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// 🧭 Side navigation inside modal
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

// 🍽️ Show menu section on Menu button click
const menuBtn = document.querySelector('a[href="#menu"]');
const menuSection = document.getElementById('menu-section');

menuBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  menuSection.classList.remove('hidden');
  menuSection.scrollIntoView({ behavior: 'smooth' });
});
