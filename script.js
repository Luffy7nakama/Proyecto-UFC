window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.classList.add("hide-loader");
        setTimeout(() => loader.style.display = "none", 800);
    }
});

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("menu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("menu-visible");
        menuBtn.classList.toggle("menu-open");
    });
}
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll(".fade, .slide, .zoom").forEach(el => {
    observer.observe(el);
});

window.addEventListener("scroll", () => {
    const heroImg = document.querySelector(".hero-img");
    if (heroImg) {
        let scroll = window.scrollY;
        heroImg.style.transform = `translateY(${scroll * 0.25}px)`;
    }
});

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("hover-card");
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("hover-card");
    });
});
const topBtn = document.createElement("button");
topBtn.id = "top-btn";
topBtn.textContent = "▲";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    topBtn.classList.toggle("visible-btn", window.scrollY > 500);
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
const darkBtn = document.getElementById("dark-btn");
if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("oscuro");
}

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    document.body.classList.add("transition");
    setTimeout(() => document.body.classList.remove("transition"), 400);

    localStorage.setItem("modo",
        document.body.classList.contains("oscuro") ? "oscuro" : "claro"
    );
});

const typeText = document.querySelector(".typewriter");
if (typeText) {
    let index = 0;
    const text = typeText.textContent;
    typeText.textContent = "";

    function typeWriter() {
        if (index < text.length) {
            typeText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 70);
        }
    }
    typeWriter();
}
function showNotification(msg) {
    const box = document.createElement("div");
    box.className = "noti";
    box.textContent = msg;

    document.body.appendChild(box);

    setTimeout(() => box.classList.add("noti-show"), 50);
    setTimeout(() => {
        box.classList.remove("noti-show");
        setTimeout(() => box.remove(), 400);
    }, 3000);
}

setTimeout(() => {
    showNotification(" Bienvenido a IMPACTO UFC  Mantente al día con las últimas peleas");
}, 1500);
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        const secTop = sec.offsetTop - 120;
        if (scrollY >= secTop) current = sec.getAttribute("id");
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});
