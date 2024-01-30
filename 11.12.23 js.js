//------------ EXERCICE : Les variables, commentaires & types  ------------//


// 1-  Écrire un commentaire sur plusieurs lignes

// //Ceci est un commenaire.
// .
// .
// .
// .
// .


//2-  Déclarez une constante "data" qui contient le nombre 3

const data = 3;




// 3 - Déclarez des variables correspondant à ces différents types & vérifiez leurs types 

// String (texte)
let textVariable=" un texte";

// Number (nombres)
let numberVariable = 42;
// Boolean (booleen)

let booleanVariable = true;

//undefined
let undefinedVariable;

// Object (object)

let objectVariable = {key: "valeur"};
// Tableau

let arrayVariable = [1,2,3,4,5];


// 4-  Déclarez trois variables sans valeur(undefined), en une ligne.

let variable1, variable2, variable3;


//------------ EXERCICE : Les opérateurs, chaînes  ------------//

// Déterminez ce qui est vrai ou faux.

// 1- Ce code permet d'assigner la valeur 50 000 à solde.
// Vrai ou Faux ?
let solde = 150 000;
solde += 50 000; 
Vrai

// 2- resultat est égal à 5.
// Vrai ou Faux ?
let resultat = 10 % 7;
Faux , le résultat est égale à 3.

// 3- la variable str permet-elle d'afficher le nombre de pneus dont j'ai besoin pour ma voiture ?
// Vrai ou Faux ?
let str = `J'ai besoin de $(nbPneus) pour ma voiture.`
Vrai


/////////////////// rédiger un algo ///////////////////////
// écrire un algorithme permettant d’échanger les valeurs de deux variables A et B

// Déclaration et initialisation des variables A et B
let A = 5;
let B = 10;

// Affichage des valeurs initiales

console.log("A =", A);
console.log("B =", B);

// Échange des valeurs
let temp = A;
A = B;
B = temp;

// Affichage des valeurs après l'échange

console.log("A =", A);
console.log("B =", B);