document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
  
    // Add hover parallax 3D effect
    boxes.forEach((box) => {
      box.addEventListener("mousemove", (e) => {
        const { offsetX, offsetY, target } = e;
        const { clientWidth, clientHeight } = target;
        const xRotation = ((offsetY / clientHeight) - 0.5) * 20;
        const yRotation = ((offsetX / clientWidth) - 0.5) * -20;
        
        box.style.transform = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1)`;
      });
  
      box.addEventListener("mouseleave", () => {
        box.style.transform = "perspective(500px) rotateX(0) rotateY(0) scale(1)";
        box.style.transition = "transform 0.3s ease";
      });
    });
  
    // Fade-in animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.3 });
  
    boxes.forEach((box) => {
      observer.observe(box);
    });
  });
  