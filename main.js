const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

//  crea una funzione che somma due numeri
//con arrow function
const somma = (a, b) => {
    return a + b;
};
console.log(somma(2, 3)); //5

//snack 1 es.1  Crea un array (longBooks) con i libri che hanno più di 300 pagine; 

const longBooks = books.filter((books) => {
    return books.pages > 300
});
console.log(longBooks);

//es.2   Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map((book) => {
    return book.title
});
console.log(longBooksTitles)

//es.3    Stampa in console ogni titolo nella console.   SBAGLIATO!!
const longBookTitles = [books]
longBookTitles.forEach(title => {
    console.log(longBookTitles)
});

//corretto
longBooksTitles.forEach((title) => {
    console.log(title);
});

//SNACK 2 es.1   Creare un array (availableBooks) che contiene tutti i libri disponibili.

const availableBooks = books.filter((book) => {
    return book.available === true;
});
console.log(availableBooks)

// es.2   Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)

// Snack: discountedBooks (solo libri disponibili, prezzo scontato del 20%)
// Mantieni formato "xx.xx€" e arrotonda al centesimo

const discountedBooks = availableBooks.map((book) => {
    // 1) Prendo il prezzo come stringa, es: "25€"
    const priceString = book.price;

    // 2) Tolgo il simbolo "€" e converto a numero, es: "25" -> 25
    const priceNumber = parseFloat(priceString.replace("€", ""));

    // 3) Applico sconto 20% (cioè pago l'80%)
    const discountedNumber = priceNumber * 0.8;

    // 4) Arrotondo a 2 decimali con toFixed (centesimi) -> torna una stringa tipo "20.00"
    const discountedFixed = discountedNumber.toFixed(2);

    // 5) Rimetto il simbolo euro, stesso formato richiesto
    const discountedPrice = discountedFix + "€";

    // 6) Ritorno un NUOVO oggetto libro uguale al precedente, ma con price aggiornato. uso lo spread
    return {
        ...book,
        price: discountedPrice,
    };
});

// Per verificare
console.log("SNACK - discountedBooks:", discountedBooks);
console.table(discountedBooks);


//es.3  Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

let fullPricedBook = discountedBooks.find(book => book.price === ".00");
console.log(fullPricedBook);

//3 Snack 3 - es.1   Ordinare gli Autori     Creare un array (authors) che contiene gli autori dei libri.

/*const authors = books.map((book) => {
    return authors
})
console.log(authors);*/

//es.2 Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.   
// (Sono tutti maggiorenni dovrebbe dirmi = false      uso metodo EVERY)

/*let areAuthorsAdults = books.every (book => book.author.age) >=18 
console.log(areAuthorsAdults);*/

//es.3 Ordina l’array authors in base all’età, senza creare un nuovo array (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
//(PENSO DI USARE SORT)

// 1) Creo l'array authors (estraggo gli autori dai libri)
const authors = books.map((book) => {
    return book.author;
});
// 2) Controllo se tutti gli autori sono maggiorenni
let areAuthorsAdults1 = books.every((book) => book.author.age >= 18);

// 3) Se tutti sono maggiorenni -> ordine crescente, altrimenti -> decrescente
if (areAuthorsAdults === true) {
    authors.sort((a, b) => a.age - b.age);
} else {
    authors.sort((a, b) => b.age - a.age);
}

// 4) Stampo per verificare
console.log(authors);


//Snack 4 -es.1  Calcola l’età media es.1 Creare un array (ages) che contiene le età degli autori dei libri.

const ages = books.map((book) => {
    return ages;
});
console.log(ages);

//es.2 Calcola la somma delle età (agesSum) usando reduce. 
const agesSum = ages.reduce((accumulatore, age) => {
    return accumulatore + age; // Aggiunge l'età corrente all'accumulatore
}, 0); // Il valore iniziale dell'accumulatore è 0

console.log(agesSum); // Output: 122


//es.3 Stampa in console l’età media degli autori dei libri.           quindi somma delle età/divisione per il numero di autori/età/console.log del risultato

const agesAverage = agesSum / ages.length;
console.log("La somma è " + agesSum);
console.log("La media è " + agesAverage);





















