document.addEventListener("DOMContentLoaded", function() {
    // ===== HEADER =====
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="logo">
            <img src="https://mborijnland.nl/wp-content/uploads/mboRijnland_logo_kleur_blokje.png"
                 style="margin: -10px; height: 50px;" alt="Logo">
        </div>
        <nav>
            <ul>
                <li><a href="/project/">Home</a></li>
                <li><a href="/project/opleiding.html">De opleiding</a></li>
                <li><a href="/project/beroepenveld.html">Het beroepenveld</a></li>
                <li><a style="margin-right: 45px;" href="/project/onderzoekdoorgroeimogelijkheden.html">
                    Onderzoek doorgroeimogelijkheden
                </a></li>
            </ul>
        </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);

    // ===== FOOTER =====
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="footer-links">
            <img src="https://tctam.nl/assets/social-media/youtube.svg" style="max-width: 40px;" alt="YouTube">
            <img src="https://tctam.nl/assets/social-media/tiktok.webp" style="max-width: 40px;" alt="TikTok">
            <img src="https://tctam.nl/assets/social-media/instagram.png" style="max-width: 40px;" alt="Instagram">
            <img src="https://tctam.nl/assets/social-media/x.avif" style="max-width: 40px;" alt="X">
        </div>
        <div style="margin-right: 45px;" class="footer-bar">Gemaakt door Tamer Çevik en Max Drzewinski</div>
    `;
    document.body.appendChild(footer);
});
