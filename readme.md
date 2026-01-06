
### es.1 crea un array di libri con più di 300 pagine

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

### es.2 Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
# Parto da longBooks. Uso .map() per creare un nuovo array longBooksTitles. La callback riceve un libro alla volta (book) e ritorna book.title.
# Metodo usato: map (trasforma ogni elemento dell’array in un nuovo valore).
const longBooksTitles = longBooks.map((book) => {
    return book.title
});
console.log(longBooksTitles)

### Step 4 — Stampare ogni titolo in console
# Parto da longBooksTitles (che contiene solo stringhe/titoli). Uso .forEach() per scorrere l’array. Per ogni title faccio console.log(title).
# Metodo usato: forEach (esegue un’azione per ogni elemento, non ritorna un array).
## Nota importante (anti-confusione) books è l’array originale (lista). Dentro filter/map/forEach il parametro (book o title) rappresenta un singolo elemento alla volta.
# filter e map creano nuovi array. forEach serve per fare cose (come stampare), e ritorna undefined

longBooksTitles.forEach((title) => {
 console.log(title);
});

### Snack 2 - Il primo libro scontato Creare un array (availableBooks) che contiene tutti i libri disponibili. 