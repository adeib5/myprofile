
function welcome() {
    alert("Halo! Selamat datang di portfolio saya 🚀");
}

function validasiForm() {
    let nama = document.getElementById("nama");
    let email = document.getElementById("email");
    let pesan = document.getElementById("pesan");

    
    if (!nama || !email || !pesan) return true;

    let n = nama.value.trim();
    let e = email.value.trim();
    let p = pesan.value.trim();

    if (n === "" || e === "" || p === "") {
        alert("⚠️ Semua field harus diisi!");
        return false;
    }

    alert("✅ Pesan berhasil dikirim!");
    return true;
}

function toggleMode() {
    document.body.classList.toggle("light-mode");
}

function showMore() {
    let text = document.getElementById("moreText");

    
    if (!text) return;

    if (text.innerHTML === "") {
        text.innerHTML =
        "Saya sedang mengembangkan skill saya di bidang pemgroman dan desain game. Saya juga aktif mengikuti komunitas game developer untuk terus belajar";
    } else {
        text.innerHTML = "";
    }
}

function revealOnScroll() {
    let items = document.querySelectorAll(".hidden-item");

    items.forEach(item => {
        let pos = item.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (pos < windowHeight - 100) {
            item.classList.add("show");
        }
    });
}

function setActiveNav() {
    let links = document.querySelectorAll("nav a");
    let currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("text-purple-400");
        } else {
            link.classList.remove("text-purple-400");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
    revealOnScroll();
    setActiveNav();
});