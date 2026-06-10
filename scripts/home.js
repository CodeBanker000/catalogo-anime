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
                        <p class="card-text">${anime.synopsis ? anime.synopsis.slice(0, 160) + "..." : "Descrizione non disponibile."}</p>
                        <p class="card-text">Score: ${anime.score}</p>
                    </div>
                </div>
            </div>
        `).join("");
    })
    .catch(error => {
      console.error("Error loading random anime:", error);
      setStatus("Impossibile caricare i dati.", "danger");
    });
})()
