(() => {
  const container = document.querySelector("#random-anime");
  if (!container) return;

  fetch("https://api.jikan.moe/v4/anime")
    .then(response => {
      if (!response.ok) throw new Error("Impossibile caricare l'anime casuale");
      return response.json();
    })
    .then(data => {
        console.log("Random anime data:", data.data);

        const randomAnime = data.data.sort(() => Math.random() - 0.5).slice(0, 6);

        container.innerHTML = randomAnime.map(anime => `
            <div class="col-md-4">
                <div class="card h-100 mb-4">
                    <img src="${anime.images.jpg.image_url}" class="card-img-top" alt="${anime.title}">
                    <div class="card-body">
                        <h5 class="card-title">${anime.title}</h5>
                        <h6 class="card-subtitle mb-2 badge">${anime.type}</h6>
                        <p class="card-text">${anime.synopsis ? anime.synopsis.slice(0, 160) + "..." : "Descrizione non disponibile."}</p>
                        <p class="card-text">Score: ${anime.score}</p>
                    </div>
                </div>
            </div>
        `).join("");
    })
    .catch(error => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
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
            })
            .catch(error => {
                console.error("Error fetching fallback data:", error);
                setStatus("Errore nel caricamento dei dati.", "danger");
            });
    });
})()

const statusMessage = document.querySelector("#status-message");

function setStatus(message, type = "info") {
  if (!statusMessage) return;
  statusMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}
