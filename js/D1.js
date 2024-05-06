/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* I principali datatype di javascript sono: numeri, stringhe, null, undefined e operatori boleani
  numeri:
    i numeri si dividono in: numeri interi 5, numeri decimali 5.5, numeri interi negativi -12 e zero 0.
    i numeri si scrivono senza apici: 5 NO "5"

    le stringhe:
    Le stringhe sono una sequenza di caratteri delimitati apici. Esempio "Questa è una stringa"

    null:
    il null è un operatore che ci permette di "svuotare" una variabile precendentemente assegnata.
    Esempio: let num1 = 5 PRIMA
              let num1 = null DA QUI IN POI(nel codice)
    
    undefined: undefined rappresenta un valore che non esiste.
    Esempio: const miaVariabile =
              console.log(miaVariabile) in questo caso non mi esegue nulla perchè non assegnato nessun valore alla
              variabile miaVariabile, quindi undefined
    
    boleani(o boolean):
      gli operatori boleani servono a dare due opzioni: False e true
      nello specifico ci aiutano a dare esiti postivi o negativi in base a quello che vogliamo far fare a determinate condizioni
      o funzioni.
        Oltre a false o true ci sono degli operatori che ci permettono di comunicare al megio con questa funzionalità:
          and && ----> in questo caso le condizioni devono essere vere (per avere una risposta true)
          or || ----> una o l'altra condizione deve essere vera (per avere una risposta true)
          not ! ----> la condizione viene negata */


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "Federico"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12
let num2 = 20
const addizione = num1 + num2
console.log("il risultato di num1 + num2 è: " + addizione)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Di Presa"
console.log(myName)
const myName = "Di Presa" /** racchiudere questa variabile tra un commento per far funzionare gli esercizi sottostanti */
console.log(myName) /* ora mi dà errore perchè myName è stata dichiarata precedentemente con un costrutto let

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y = 4
let sottrazione = x - y
console.log("il risultato di x-y è: ", sottrazione)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name1 = "john"
const name2 = "John"
console.log(name1 === name2)
/****** EXTRA ******/
console.log(name1 !== name2)


