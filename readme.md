
# SNACK 1
# es.1 crea un array di libri con più di 300 pagine

## 01  creo una variabile longbooks che conterrà il nuovo array con solo i libri più lunghi di 300 pag
## 02 PARTO DAL NOME DELL'ARRAY ORIGINALE "books" (che contiene tutti i libri) e Uso FILTER  perché 
## filter serve a selezionare alcuni elementi e creare un nuovo array con solo quelli che mi interessano.
## 03 Quindi filter scorre tutti i libri e decide quali tenere. ((books) => { ... })           Questa è la funzione che filter usa per controllare ogni elemento.Il parametro (books) rappresenta un singolo libro alla volta (uno per uno).
### Nota importante: per chiarezza sarebbe meglio chiamarlo book (singolare), ma il senso è quello.
## 04  return books.pages > 300 Qui sto facendo la domanda per ogni libro: “Questo libro ha più di 300 pagine?”
# Se la risposta è: true → il libro viene tenuto dentro longBooks __false → il libro viene scartato

const longBooks = books.filter((books) => {
    return books.pages > 300
});
console.log(longBooks);

# es.2 Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.

## Parto da longBooks. Uso .map() per creare un nuovo array longBooksTitles. La callback riceve un libro alla volta (book) e ritorna book.title.
## Metodo usato: map (trasforma ogni elemento dell’array in un nuovo valore).
const longBooksTitles = longBooks.map((book) => {
    return book.title
});
console.log(longBooksTitles)

# es.3 Stampare ogni titolo in console

## Parto da longBooksTitles (che contiene solo stringhe/titoli). Uso .forEach() per scorrere l’array. Per ogni title faccio console.log(title).
## Metodo usato: forEach (esegue un’azione per ogni elemento, non ritorna un array).
## Nota importante (anti-confusione) books è l’array originale (lista). Dentro filter/map/forEach il parametro (book o title) rappresenta un singolo elemento alla volta.
## filter e map creano nuovi array. forEach serve per fare cose (come stampare), e ritorna undefined

longBooksTitles.forEach((title) => {
 console.log(title);
});

# SNACK 2

# es.1  Il primo libro scontato Creare un array (availableBooks) che contiene tutti i libri disponibili. 
## Parto dall’array originale books.
## Uso il metodo .filter() per creare un nuovo array.La callback di filter riceve un libro alla volta (es. book).Ritorno una condizione booleana che verifica se il libro è disponibile:
## true → il libro viene incluso in availableBooks false → il libro viene escluso Metodo usato: filter (seleziona solo gli elementi che rispettano una condizione).

const availableBooks = books.filter((book) => {
    return book.available === true;
});
console.log(availableBooks)
## Snack 3 — Prezzo scontato (20%) sui libri disponibili

### Obiettivo
Creare un array `discountedBooks` partendo da `availableBooks`, dove **ogni libro** ha il **prezzo scontato del 20%**, mantenendo:
- lo **stesso formato** della proprietà `price` (stringa con `€`)
- l’**arrotondamento al centesimo** (2 decimali)

---

### Dati di partenza
- `books`: array originale con tutti i libri
- `availableBooks`: array ottenuto con `filter` che contiene solo i libri disponibili (`available: true`)

---

### Step 1 — Partire da `availableBooks`
1. Uso `availableBooks` come base perché contiene già **solo** i libri disponibili.
2. Non serve rifiltrare `books` in questo step.

---

### Step 2 — Creare `discountedBooks` con `map`
1. Uso `map()` perché devo ottenere un **nuovo array** della stessa lunghezza di `availableBooks`.
2. Per ogni elemento (`book`) creo una versione “modificata” del libro (stesse proprietà, prezzo aggiornato).

**Perché `map`?**  
Perché sto **trasformando** ogni elemento (non sto selezionando / filtrando).

---

### Step 3 — Convertire `price` da stringa a numero
1. `book.price` è una stringa (es: `"25€"`), quindi non posso fare calcoli direttamente.
2. Rimuovo il simbolo `"€"` dalla stringa.
3. Converto la stringa risultante in numero usando `parseFloat`.

**Esempio concettuale:**
- `"25€"` → `"25"` → `25`

---

### Step 4 — Applicare lo sconto del 20%
1. Sconto 20% significa pagare l’80% del prezzo originale.
2. Calcolo: `prezzo * 0.8`

**Esempio:**
- `25 * 0.8 = 20`

---

### Step 5 — Arrotondare al centesimo (2 decimali)
1. La consegna richiede l’arrotondamento a 2 decimali.
2. Uso `toFixed(2)` per ottenere sempre due cifre dopo la virgola.

**Nota importante:**  
`toFixed(2)` restituisce una **stringa** (es: `"20.00"`).

---

### Step 6 — Ricostruire la stringa prezzo con `€`
1. Dopo l’arrotondamento ottengo una stringa numerica (es: `"20.00"`).
2. Riaggiungo il simbolo euro per mantenere il formato richiesto:
   - `"20.00" + "€"` → `"20.00€"`

---

### Step 7 — Creare un nuovo oggetto libro con spread operator
1. Non voglio perdere le altre proprietà del libro (`title`, `pages`, `author`, `tags`, ecc.).
2. Uso lo spread operator `...book` per copiare tutte le proprietà.
3. Sovrascrivo **solo** la proprietà `price` con il prezzo scontato.

**Perché usare `...book`?**  
Per mantenere l’oggetto completo e modificare solo il campo necessario (`price`).

---

### Step 8 — Verifica del risultato
1. Stampo `discountedBooks` per controllare che:
   - contenga solo i libri disponibili
   - i prezzi siano correttamente scontati e formattati
2. Strumenti di debug usati:
   - `console.log(discountedBooks)`
   - `console.table(discountedBooks)` (più leggibile per array di oggetti)

---

### Risultato atteso (in parole)
`discountedBooks` è un nuovo array di libri disponibili in cui ogni libro è identico all’originale, ma con `price` scontato del 20% e formattato con due decimali + simbolo `€`.

## Snack 4 — Primo libro con prezzo intero (senza centesimi)

### Obiettivo
Salvare in una variabile `fullPricedBook` il **primo** elemento di `discountedBooks` che ha un **prezzo intero**, cioè senza centesimi.

---

### Step 1 — Partire da `discountedBooks`
1. Uso `discountedBooks` perché contiene già i libri disponibili con prezzo scontato.
2. La proprietà `price` è una **stringa** nel formato tipo `"20.00€"`.

---

### Step 2 — Usare `find` per ottenere il primo elemento che rispetta una condizione
1. Uso `.find()` perché devo ottenere **un solo elemento** (il primo che matcha), non un array.
2. `find` scorre gli elementi in ordine e restituisce:
   - il **primo** elemento che rende la condizione `true`
   - `undefined` se nessun elemento la soddisfa

---

### Step 3 — Controllare “senza centesimi”
1. Un prezzo “intero” nel nostro formato ha centesimi pari a `00` (es: `"20.00€"`).
2. Controllo la presenza della parte `".00"` nella stringa del prezzo usando `includes`.

---

### Codice
```js
let fullPricedBook = discountedBooks.find(book => book.price.includes(".00"));
console.log(fullPricedBook);
