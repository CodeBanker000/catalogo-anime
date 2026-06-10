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
    })
})())