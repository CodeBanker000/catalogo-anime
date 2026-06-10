((() => {
    fetch("https://api.jikan.moe/v4/top/anime")
    .then(response => response.json())
    .then(data => {
        console.log(data.data);
        // Process the anime data and display it
        const container = document.querySelector("#data-container");
        if (!container) return;
        container.innerHTML = data.data.map(anime => `
                <li class="list-group-item">
                        <div class="d-flex align-items-center gap-3">
                            <div class="anime-image">
                                <img src="${anime.images.jpg.image_url}" class="card-img-start" alt="${anime.title}">
                            </div>
                            <div>
                                <h3>${anime.title}</h3>
                                <p>Score: ${anime.score}</p>
                            </div>
                        </div>
                    </div>
                </li>
        `).join("");
    }).catch(error => {
        console.error("Error fetching anime data:", error);
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                const container = document.querySelector("#data-container");
                if (!container) return;
                container.innerHTML = data.items.map(item => `
                    <li class="list-group-item">
                        <div class="d-flex align-items-center gap-3">
                            <div class="anime-image">
                                <img src="${item.image}" class="card-img-start" alt="${item.title}">
                            </div>
                            <div>
                                <h3>${item.title}</h3>
                                <p>${item.body}</p>
                            </div>
                        </div>
                    </li>
                `).join("");
            }).catch(error => {
                console.error("Error fetching fallback data:", error);
                setStatus("Errore nel caricamento dei dati.", "danger");
            });
    });
})())

const statusMessage = document.querySelector("#status-message");

function setStatus(message, type = "info") {
  if (!statusMessage) return;
  statusMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}