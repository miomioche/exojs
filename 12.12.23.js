


// 1-  ecrire un algorithme qui utilise une structure conditionnelle if et qui demande à l'utilisateur son age et le classe dans une catégorie
// 0-2 ans : bébé
// 3-12 ans : enfant
// 13-18 ans : adolescent
// 19-59 ans : adulte
// 60 ans et plus : senior

let age = prompt("Quel est votre âge ?");





if (age >= 0 && age <= 2) {
    alert("Vous êtes un bébé.");
} else if (age >= 3 && age <= 12) {
    alert("Vous êtes un enfant.");
} else if (age >= 13 && age <= 18) {
    alert("Vous êtes un adolescent.");
} else if (age >= 19 && age <= 59) {
    alert("Vous êtes un adulte.");
} else if (age >= 60) {
    alert("Vous êtes un senior.");
} else {
    alert("L'âge que vous avez saisi n'est pas valide.");
}

// 2- même chose avec des switch



switch (true) {
    case (age >= 0 && age <= 2):
        categorie = "bébé";
        break;
    case (age >= 3 && age <= 12):
        categorie = "enfant";
        break;
    case (age >= 13 && age <= 18):
        categorie = "adolescent";
        break;
    case (age >= 19 && age <= 59):
        categorie = "adulte";
        break;
    case (age >= 60):
        categorie = "senior";
        break;
    default:
        categorie = "âge non valide";
}





// 3- même chose avec des ternaires


let age = prompt("Quel est votre âge ?");





let categorie = (age >= 0 && age <= 2) ? "bébé" :
                (age >= 3 && age <= 12) ? "enfant" :
                (age >= 13 && age <= 18) ? "adolescent" :
                (age >= 19 && age <= 59) ? "adulte" :
                (age >= 60) ? "senior" :
                "âge non valide";


alert(message);


// 4- exercice avec la boucle while
// faire un programme qui demande à l'utilisateur de saisir un nombre
// tant que le nombre n'est pas compris entre 1 et 10, on lui redemande de saisir un nombre
// une fois le nombre compris entre 1 et 10, on affiche le nombre



let nombre = prompt(" saisir un nombre entre 1 et 10 :");

while (nombre < 1 || nombre > 10 ) {
    
    nombre = prompt("Nombre non valide.  saisir un nombre entre 1 et 10 :");

}   
    
alert( nombre);



// 5- exercice avec la boucle do...while
// faire un programme qui demande à l'utilisateur de saisir un nombre
// tant que le nombre n'est pas compris entre 1 et 10, on lui redemande de saisir un nombre
// une fois le nombre compris entre 1 et 10, on affiche le nombre

let nombre = prompt("Veuillez saisir un nombre entre 1 et 10 :");


do {
   
    nombre = prompt("Veuillez saisir un nombre entre 1 et 10 :");

      
} while (nombre < 1 || nombre > 10 || );


alert( nombre);


// 6- exercice avec la boucle for
// faire un programme qui demande à l'utilisateur de saisir un nombre
// tant que le nombre n'est pas compris entre 1 et 10, on lui redemande de saisir un nombre
// une fois le nombre compris entre 1 et 10, on affiche le nombre

let nombre = prompt("Veuillez saisir un nombre entre 1 et 10 :");


for (; !(nombre >= 1 && nombre <= 10); ) {
   
    nombre = prompt("Nombre invalide. Veuillez saisir un nombre entre 1 et 10 :");
}


console.log("Le nombre que vous avez saisi est : " + nombre);



// 7- exercice avec break et continue
// faire un programme qui affiche les nombres de 1 à 10
// sauf les nombres 5 et 7


for (let i = 1; i <= 10; i++) {
    
    if (i === 5 || i === 7) {
        continue;
    }

    
    alert(i);
}







// 8- exercice try catch throw finally
// faire un programme qui demande à l'utilisateur de saisir un nombre
// tant que le nombre n'est pas compris entre 1 et 10, on lui redemande de saisir un nombre
// une fois le nombre compris entre 1 et 10, on affiche le nombre

// Déclarer la variable pour stocker le nombre saisi par l'utilisateur






    try {
        
       let  nombre = prompt("Veuillez saisir un nombre entre 1 et 10 :");

        
        if (!(nombre >= 1 && nombre <= 10)) {
           
            throw "Le nombre n'est pas compris entre 1 et 10";
        }

        
        alert( nombre);
    } catch (error) {
        alert(error);
    }
        
       

// 9- Affichez un triangle de 9 lignes de 1 à 9


for (let i = 1; i <= 9; i++) {
    
    let ligne = "";

    
    for (let nombre = 1; nombre <= i; nombre++) {
        ligne+= nombre ;
    }

    
    console.log(ligne);
}

// 1. Loggez dans la console le résultat de l'expression d'une opération ternaire.
// Si metreCarre est supérieur à 70, loggez "Grand logement", si c'est inférieur, loggez "Logement petit/moyen".




let metreCarre;


let message = (metreCarre > 70) ? "Grand logement" : "Logement petit/moyen";


console.log(message);

// 2. Créez une boucle for qui affiche dans la console une suite de nombres de 100 à 0 en pas de 1.
// 100,99,98,97,96 ...

for (let i = 100; i >= 0; i--) {
    console.log(i);
}