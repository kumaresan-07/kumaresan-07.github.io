// Typewriter Effect
document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".typewriter");
  const textContent = text.textContent;
  text.textContent = "";
  let i = 0;

  function type() {
    if (i < textContent.length) {
      text.textContent += textContent.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
