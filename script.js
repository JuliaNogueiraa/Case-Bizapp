const fadeElements = document.querySelectorAll(
  ".hero-title, .hero-description, .hero-description-2, .hero-buttons, .feature-card, .hero-image-box"
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => {
  el.classList.add("fade-in");
  fadeObserver.observe(el);
});

const floatingImage = document.querySelector(".hero-image-box");

setInterval(() => {
  floatingImage.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(-10px)" },
      { transform: "translateY(0px)" }
    ],
    {
      duration: 3000,
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
}, 1000);

const tiltBox = document.querySelector(".hero-image-box");

tiltBox.addEventListener("mousemove", (e) => {
  let rect = tiltBox.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  let midX = rect.width / 2;
  let midY = rect.height / 2;

  let rotateX = ((y - midY) / midY) * 5; 
  let rotateY = ((midX - x) / midX) * 5;

  tiltBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
});

tiltBox.addEventListener("mouseleave", () => {
  tiltBox.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
});

const ctaButton = document.querySelector(".btn-primary");

setInterval(() => {
  ctaButton.animate(
    [
      { transform: "scale(1)", boxShadow: "0 0 0 rgba(59,130,246,0)" },
      { transform: "scale(1.03)", boxShadow: "0 0 20px rgba(59,130,246,0.5)" },
      { transform: "scale(1)", boxShadow: "0 0 0 rgba(59,130,246,0)" }
    ],
    {
      duration: 2000,
      easing: "ease-in-out"
    }
  );
}, 3000);
