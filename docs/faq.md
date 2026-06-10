# FAQ

## Non riesco ad aprire il sito, cosa posso fare?

- Assicurarsi che la repository sia stata clonata correttamente e che si stia aprendo il file `index.html` con un browser moderno.

- Se si preferisce, è possibile utilizzare un server locale (ad esempio con Live Server di Visual Studio Code) per servire i file, invece di aprirli direttamente.

## Non visualizzo lo stile o i vari anime o la classifica, cosa posso fare?

- Verificare di essere connessi a Internet, poiché il sito dipende da Bootstrap e dalle API esterne per funzionare correttamente.

### Perchè non visualizzo gli anime e la classifica se ho una connessione ad internet?

- Potrebbe esserci un problema temporaneo con le API di Jikan, che forniscono i dati per gli anime e la classifica. Cmq, gli script del sito sono progettati per gestire questo tipo di errori, quindi se le API non sono disponibili, i dati vengono caricati da un file JSON locale (`data.json`) che contiene dati fittizzi degli anime. In questo modo, il sito dovrebbe comunque funzionare e mostrare gli anime e la classifica anche se le API non sono raggiungibili.
- Potrebbe non essere stato caricato corretetamente il file `script.js` che si occupa di fetchare i dati dalle API. Verificare che il file sia presente e correttamente collegato al file HTML.
- controllare che il file `script.js` sia presente nella directory principale del progetto
- assicurarsi che il file `script.js` sia correttamente collegato al file HTML (ad esempio, con un tag `<script src="script.js"></script>` posizionato prima della chiusura del tag `</body>`)
- assicurarsi che nei file `anime.html` e `classifica.html` ci siano i container corretti con gli ID `anime-list` e `ranking-list` rispettivamente, poiché il file `script.js` si aspetta di trovare questi elementi per inserire i dati fetchati dalle API.

## Posso modificare il progetto?

- Sì, il progetto è open source e può essere modificato.

## Da dove vengono presi i dati per gli anime e la classifica?

- I dati per gli anime e la classifica vengono presi dalle API di Jikan, che forniscono dati reali sugli anime se disponibili, altrimenti vengono utilizzati dati fittizzi da un file JSON locale.
- Non richiede autenticazione e i dati sono statici, quindi non cambiano nel tempo.
