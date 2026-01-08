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

// 1. crea una funzione che somma due numeri
//con arrow function
const somma = (a, b) => {
    return a + b;
};
console.log(somma(2, 3)); //5

//Crea un array (longBooks) con i libri che hanno più di 300 pagine; 

const longBooks = books.filter((books) => {
    return books.pages > 300
});
console.log(longBooks);

//Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map((book) => {
    return book.title
});
console.log(longBooksTitles)

//Stampa in console ogni titolo nella console.   SBAGLIATO!!
const longBookTitles = [books]
longBookTitles.forEach(title => {
    console.log(longBookTitles)
});

//corretto
longBooksTitles.forEach((title) => {
    console.log(title);
});

//Creare un array (availableBooks) che contiene tutti i libri disponibili.

const availableBooks = books.filter((book) => {
    return book.available === true;
});
console.log(availableBooks)

//Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)

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


//Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

let fullPricedBook = discountedBooks.find(book => book.price === ".00");
console.log(fullPricedBook);













