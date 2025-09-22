document.addEventListener("DOMContentLoaded", function() {
    // Maak een nieuw header element
    const header = document.createElement("header");

    // Voeg de inhoud van de header toe
    header.innerHTML = `
        <div class="logo">
            <img src="https://mborijnland.nl/wp-content/uploads/mboRijnland_logo_kleur_blokje.png"
                 style="margin: -10px; height: 50px;" alt="Logo">
        </div>
        <nav>
            <ul>
                <li><a href="/project/index.html">Home</a></li>
                <li><a href="/project/opleiding.html">De opleiding</a></li>
                <li><a href="/project/beroepenveld.html">Het beroepenveld</a></li>
                <li><a style="margin-right: 45px;" href="/project/onderzoekdoorgroeimogelijkheden.html">
                    Onderzoek doorgroeimogelijkheden
                </a></li>
            </ul>
        </nav>
    `;

    // Zet het header element bovenaan de body
    document.body.insertBefore(header, document.body.firstChild);
});