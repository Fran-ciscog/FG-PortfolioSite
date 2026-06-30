// JS from Portfolio home page 2 \\

      const hamburger = document.getElementById("hamburger");
      const mobileMenu = document.getElementById("mobileMenu");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        const expanded = hamburger.classList.contains("active");
        hamburger.setAttribute("aria-expanded", expanded);
      });

      // Close mobile menu when resizing to desktop
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          hamburger.classList.remove("active");
          mobileMenu.classList.remove("active");
          hamburger.setAttribute("aria-expanded", "false");
        }
      });


// 0g JS for Portfolio home page 3 was... but did not work... why ?? \\

// const hamburger = document.getElementById('hamburger');
// const navMenu = document.getElementById('nav-menu');

//hamburger.addEventListener('click', () => {
    // navMenu.classList.toggle('active');
//});