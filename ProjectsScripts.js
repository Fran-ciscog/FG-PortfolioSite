// JS for Portfolio site (for Header/Nav Menu Sec Mobile ph view) \\

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

      