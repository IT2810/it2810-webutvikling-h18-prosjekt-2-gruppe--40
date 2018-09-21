# Readme for Strong As Bull
#### Mathias Wahl, Ole Kristian Vingdal, Sondre Grav Skjåstad


### Node/ viewport:
Helt i starten lastet vi ned Node.js og npm, og brukte disse verktøyene for å generere et skjelett-prosjekt i React. Samtidig ble det automatisk lastet inn en vanvittig mengde moduler og templates, i tillegg til noen start/eksempelfiler. I index.html ble det blant annet satt inn viewport, som endret på nettsiden innholdet i forhold til enhetens bredde, så allerede her fikk vi en liten forsmak på responsivt webdesign.

### React:
Øverst på siden valgte vi å endre på headeren som ble generert til å være slik som vi ville ha den. Under det har vi Tabs komponenten som inneholder tre Tab komponenter (Animals, Drake og Fruit). For hver Tab er det en ArtSection komponent der kunsten og knappene ligger. Kunsten består av en Image komponent, en Text komponent og en Sound komponent. Hver kunst type har 4 alternativer for hver kategori og de kan velges ved å trykke på radio knappene. Disse er generert av RadioButtons komponenten.

Vi valgte at når siden lastes inn så blir kunst sammensetningen bli tilfeldig. Når man trykker på radioknappene så lastes innholdet med AJAX og fetch (gjelder for bildet og teksten). Dette gjøres ved at når verdien på radioknappene endres så kalles en funksjon i ArtSection, som endrer på states (imageState, textState og soundState). Disse statesene blir gitt til kunst komponentene slik at de viser riktig fil/kunst.

### Art filepath & AJAX:
Vi puttet tekst(json)- og blide(svg)filene i et systematisk mappehierarki i public-mappen. Dette gjorde vi for å enklest mulig sette opp funksjoner som kunne hente ut filene på en filepath som var generert av en funksjon. Selve hierarkiet ligger under public-mappen da brukeren av nettsiden nødvendigvis må ha tilgang til disse filene når de skal hentes ut og vises på nettsiden. 
For selve innhentingen av  son- og svg-filene valgte vi å ta i bruk javascript sitt fetch-bibliotek. Dette biblioteket tilbyr asynkron innhenting av data og virket lett å forholde seg til sammenliknet med andre biblioteker vi undersøkte. Her kan det være verdt å nevne at fetch som standard leter i public-mappen for å hente ut data, som er grunnen til at teksten og bildene (men ikke lydfilene) ligger nettopp her.

### Lyd:
Lyden er laget med en HTML5 Audio tag der filepathen er gitt ved category propertyen og soundState staten. I oppgaven sto det at vi skulle bruke HTML5 Audio tag og at vi ikke trengte å implementere noe for å hente data, slik som for bildet og teksten.

### Tabs:
Tabs var det første vi lagde, fordi innholdet på siden skulle ligge i tabs. Ingen av oss hadde erfaring med React fra før og da var det greit å ha noe å jobbe ut i fra. Derfor fant vi kode på nettet for å lage tabs og jobbet ut i fra denne. Vi gjorde endringer slik at den fungerte slik som vi ville ha den. 

### Responsiv design:
For å oppnå et ryddig og responsivt webdesign på flere plattformer benyttet vi oss av media queries i css. Media queries-teknikken lar oss tilpasse designet til forskjellige skjermstørrelser, noe som er meget nyttig. Det er vanlig å scrolle nedover, men ikke sidelengs, derfor må man passe på at ingenting er for bredt for skjermen, samtidig som at det ikke blir for smått. Med media queries kan man gjøre det slik at hvis skjermen er smalere enn visse bredder, i vårt tilfelle 800 og 510 piksler, endres sideoppsettet slik at alt blir ryddig. Formatet bredere enn 800 piksler er ment for Laptop og Desktop. Mellom 800 og 510 er ment for noen nettbrett og mobiler vendt horisontalt. Mindre enn 510 piksler er ment for mobiler vendt vertikalt.

### Viewbox:
Viewbox er et nyttig verktøy som blant annet brukes for å definere rammen rundt “innmaten” av en svg-fil. Ved å manipulere viewboxen kan en altså for eksempel endre formatet til bildet, slik at det kan passe bedre inn på siden en jobber på. I dette prosjektet var nettopp denne funksjonen praktisk, da svg-filene fra før hadde ulike format som gjorde at siden “hoppet” når bildene ble skiftet. Med viewbox kunne vi enkelt manipulere dem slik at alle bildene var kvadratiske, som gjorde at sidens layout ble uendret mellom skift av bilder. Dette skapte et penere utseende og en mer sømløs opplevelse.

### Testing:
Gjennom utviklingen av siden testet vi hovedsakelig med Google Chrome og Opera på PC. Av og til åpnet vi på en mobil og sjekket, men det var ikke så relevant før vi implementerte media queries. Vi valgte at oppsettet skulle endres ved bredde 800 og 510 og dette fungerte som vi ville på alle mobilene våre. Vi brukte også en Chrome Extension som kunne sette vindusstørrelsen lik mange forskjellige skjermtyper. På PC har vi testet i Chrome, Firefox, Opera og Edge. På mobil har vi testet i Chrome, Safari og Firefox.

### Kilder:

Tabs:
https://alligator.io/react/tabs-component/

RadioButtons:
http://react.tips/radio-buttons-in-reactjs/

SVG art:
https://all-free-download.com/free-vector/download/red-dragon_6818275.html  
https://lovesvg.com  
https://shopcraftables.com  
https://publicdomainvectors.org

Sounds:
https://freesound.org/

Media-queries:
https://www.w3schools.com/Css/css3_mediaqueries_ex.asp

