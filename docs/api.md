# API utilizzate

Il progetto utilizza le API di Jikan per recuperare i dati degli anime da mostrare nelle pagine del sito.

## Summary

| Risorsa       | Endpoint                                            | Uso nel sito           |
|---------------|-----------------------------------------------------|------------------------|
| Anime         | <https://api.jikan.moe/v4/anime>                    | Pagina anime.html      |
| Anime Naruto  | <https://api.jikan.moe/v4/anime?q=naruto&limit=12>  | Pagina autori.html     |
| Top Anime     | <https://api.jikan.moe/v4/anime/top>                | Pagina classifica.html |

## Dettagli API

- **Anime**: Questa API fornisce informazioni dettagliate sugli anime.
  - Endpoint: `https://api.jikan.moe/v4/anime`
  - Utilizzo: I dati ottenuti da questa API ne vengono selezionati 6 casuali nella pagina `index.html`, dove ogni anime viene visualizzato con la sua immagine, titolo, descrizione, score e tipo.

- **Anime Naruto**: Questa API fornisce informazioni sugli anime di tipo Naruto.
  - Endpoint: `https://api.jikan.moe/v4/anime?q=naruto&limit=12`
  - Utilizzo: I dati ottenuti da questa API vengono mostrati nella pagina `anime.html`, dove ogni anime viene visualizzato con la sua immagine, titolo, descrizione, score e tipo.

- **Top Anime**: Questa API fornisce informazioni sugli anime più popolari.
  - Endpoint: `https://api.jikan.moe/v4/anime/top`
  - Utilizzo: I dati ottenuti da questa API vengono mostrati nella pagina `classifica.html` tramite una lista, dove ogni anime viene visualizzato con la sua immagine, titolo, descrizione, score e tipo.

## Campi Utilizzati

| Campo                  | Significato  |
|------------------------|--------------|
| `title`                | Titolo anime |
| `synopsis`             | Descrizione  |
| `score`                | Punteggio    |
| `type`                 | Tipo         |
| `images.jpg.image_url` | Immagine     |
