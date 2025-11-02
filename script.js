document.addEventListener("DOMContentLoaded", () => {
    // --- Theme Toggle (Assignment Requirement) ---
    // [cite_start]// This is the logic for the button [cite: 14]
    // I've hidden the button with CSS to match the video,
    // but the functionality is here as required.
    const themeToggleBtn = document.getElementById("theme-toggle");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else {
        document.body.classList.add("dark-mode"); // Default to dark
    }

    themeToggleBtn.addEventListener("click", () => {
        let theme;
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            theme = "light-mode";
        } else {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            theme = "dark-mode";
        }
        localStorage.setItem("theme", theme);
    });

    // --- Smooth Scroll (Assignment Requirement) ---
    // [cite_start]// [cite: 15]
    // This is handled by 'scroll-behavior: smooth;' in the CSS file.
    // For JavaScript-driven smooth scroll (more robust):
    const navLinks = document.querySelectorAll(
        ".nav-link, .logo, .hero-socials a"
    );

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        });
    });

    // --- Scroll-Reveal Animation (from video) ---
    const sectionsToFade = document.querySelectorAll(".fade-in-section");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15, // 15% of the element must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sectionsToFade.forEach((section) => {
        observer.observe(section);
    });
});
