document.addEventListener("DOMContentLoaded", function () {
    // ===== HEADER =====
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="logo">
        <a href="home">
            <img src="https://mborijnland.nl/wp-content/uploads/mboRijnland_logo_kleur_blokje.png"
                style="margin: -10px; height: 50px;" alt="Logo">
        </a>
        </div>
        <nav>
            <ul>
                <li><a href="home">Home</a></li>
                <li><a href="opleiding">De opleiding</a></li>
                <li><a href="beroepenveld">Het beroepenveld</a></li>
                <li><a style="margin-right: 45px;" href="onderzoekdoorgroeimogelijkheden">
                    Onderzoek doorgroeimogelijkheden
                </a></li>
            </ul>
        </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);

    // ===== FOOTER =====
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div style="max-width: 60%;" id="social-media">
        <div class="footer-links">
            <a target="_blank" style="border-bottom: none;"
                href="https://www.youtube.com/@Tamer-Cevik?sub_confirmation=1">
                <img loading="lazy" style="margin: 5px;" width="40px" height="40px"
                    src="https://tctam-site-oud.github.io/assets/social-media/youtube.svg" alt="YouTube Link">
            <a target="_blank" style="border-bottom: none;" href="https://www.tiktok.com/@tc_tam">
                <img loading="lazy" style="margin: 5px;" width="40px" height="40px"
                    src="https://tctam-site-oud.github.io/assets/social-media/tiktok.webp" alt="TikTok Link">
            </a>
            <a target="_blank" style="border-bottom: none;" href="https://www.instagram.com/tamer.cevik123/">
                <img loading="lazy" style="margin: 5px;" width="40px" height="40px"
                    src="https://tctam-site-oud.github.io/assets/social-media/instagram.png" alt="Instagram Link">
            <a target="_blank" style="border-bottom: none;" href="https://x.com/YT_TC_tam">
                <img loading="lazy" style="margin: 5px;" width="40px" height="40px" src="https://tctam-site-oud.github.io/assets/social-media/x.avif"
                    alt="X Link">
            </a>
        </div>
        </div>
        <div style="margin-right: 45px;" class="footer-bar">Gemaakt door Tamer Çevik en Max Drzewinski</div>
    `;
    document.body.appendChild(footer);
});

function changeFavicon(src) {
    // Remove old favicons
    const links = document.querySelectorAll("link[rel~='icon']");
    links.forEach(link => link.parentNode.removeChild(link));

    // Create new favicon
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = src;
    document.head.appendChild(link);
}

// Run directly on load
changeFavicon("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTf55YkTnz7djxtA15JCN8FukhFXCoMR9qBQ&s");