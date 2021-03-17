// CREAZIONE OGGETTO STUDENTE
var student = {
  age: 30,
  name: "Sergio",
  surname: "Marretta"

}

// STAMPA OGGETTO

for (var key in student) {
console.log(key);
}

//CREAZIONE ARRAY OGGETTI STUDENTI
var classRoom =
[

{
  studentName: "Paolo",
  studentSurname: "Bianchi"
},

{
  studentName: "Guido",
  studentSurname: "Rossi"
},

{
  studentName: "Vittorio",
  studentSurname: "Verdi"
},

{
  studentName: "",
  studentSurname: "",
  studentAge :  ""

}

]

for (var i = 0; i < classRoom.length; i++) {
console.log(classRoom[i]["studentName"] + " " + classRoom[i]["studentSurname"] );
}
classRoom[3]["studentName"] = prompt("Inserisci il tuo nome");
classRoom[3]["studentSurname"] = prompt("Inserisci il tuo cognome");
classRoom[3]["studentAge"] = prompt("Inserisci la tua età");

console.log(classRoom);
