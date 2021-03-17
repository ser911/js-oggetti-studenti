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
}

]

for (var i = 0; i < classRoom.length; i++) {
console.log(classRoom[i]["studentName"]);
}
