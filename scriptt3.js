function demarrer(){
   let prenom = prompt("entre ton prenom");
   let age = prompt("entre ton age")

   if (prenom === null || prenom.trim() === "") {
        prenom = "inconnu"
        
    }
   while(age === null || age.trim() === "" || isNaN(age) || age <0){
        alert("entre une age valide")
         age = prompt("entre ton age")
       
   }

   age = Number(age)
   console.log("Prenom : " + prenom + " Age : " +age+ " de type : "+typeof(age) )
   alert("Bonjour "+ prenom +", vous aurez "+age+" ans l’année prochaine.")

   let continuer = confirm("Souhaites-tu continuer ?");

    console.log("Réponse : " + continuer);


    
}




function sommeEntiers() {
let n = Number(document.getElementById("num").value)
    if (n < 1 || n > 100 || document.getElementById("num").value === "") {
        alert("Veuillez entrer un nombre entre 1 et 100 !");
        return;
    }
    let sum =0

    for(let i =0;i<=n;i++){
        sum +=i
    }
    document.getElementById("result").value = sum
}

function  nombresPairs(){
    let n = Number(document.getElementById("num").value)
    if (n < 1 || n > 100 || document.getElementById("num").value === "") {
        alert("Veuillez entrer un nombre entre 1 et 100 !");
        return;
    }
    let i = 0
    let resultat = ""
    while(i<= n){
        resultat += i + " ";
        i += 2;
    }
document.getElementById("result").value = resultat
}


// 1. 
let titre = document.getElementById("titreCours");


// 2. 
let section = document.getElementById("cours");
let paragraphes = section.getElementsByTagName("p");


// 3. 
let chapitres = document.getElementsByClassName("chapitre");


// 4.
let important = document.querySelector(".chapitre.important");


// 5. 
let tous = document.querySelectorAll("p.chapitre");


// 6. 
console.log("Nombre de paragraphes :", paragraphes.length);


// 7. 
let bouton = document.getElementById("modifier");

bouton.addEventListener("click", function() {

   
    titre.textContent = "JavaScript : une page interactive";

    
    for (let i = 0; i < chapitres.length; i++) {
        chapitres[i].style.color = "blue";
    }

   
    important.style.fontWeight = "bold";

    
    bouton.textContent = "Présentation modifiée";

});
//Exercice 4

function mettreEnEvidence(){
    document.getElementById("prenom").style.backgroundColor = "lightyellow"
}

function retablirStyle(){
    document.getElementById("prenom").style.backgroundColor = "white"

}

function afficherSaisie(){
    let p = document.getElementById("prenom").value
    
    document.getElementById("apercu").textContent = p


}

function changerCouleur(){
    document.getElementById("survol").style.color = "red"

}

function retablirCouleur(){
    document.getElementById("survol").style.color = "black"
}

let boutton = document.getElementById("selectionner");
let champ = document.getElementById("prenom");


boutton.addEventListener("click", function() {
    champ.focus();
    champ.select();
});

//Exercie 5



let formulaire = document.forms["inscription"];

formulaire.addEventListener("submit", function(event) {

    
    event.preventDefault();

    
    let nom = formulaire.elements["nom"];
    let profession = formulaire.elements["profession"];

    let sexe = formulaire.querySelector(
        'input[name="sexe"]:checked'
    );

    let langues = formulaire.querySelectorAll(
        'input[name="langue"]'
    );

    let message = document.getElementById("message");
    let recap = document.getElementById("recapitulatif");

    message.textContent = "";
    recap.textContent = "";

    
    if (nom.value.trim().length < 3) {

        message.textContent =
            "Erreur : le nom doit contenir au moins 3 caractères.";

        nom.focus();
        return;
    }

    
    if (profession.value === "") {

        message.textContent =
            "Erreur : veuillez choisir une profession.";

        profession.focus();
        return;
    }

    
    if (!sexe) {

        message.textContent =
            "Erreur : veuillez sélectionner un sexe.";

        return;
    }

    
    let languesChoisies = [];

    langues.forEach(function(langue) {

        if (langue.checked) {
            languesChoisies.push(langue.value);
        }

    });

    if (languesChoisies.length === 0) {

        message.textContent =
            "Erreur : veuillez choisir au moins une langue.";

        return;
    }

    
    let inscription = {

        nom: nom.value.trim(),

        profession: profession.value,

        sexe: sexe.value,

        langues: languesChoisies.join(", "),

        presenter: function() {

            return "Nom : " + this.nom +
                   "\nProfession : " + this.profession +
                   "\nSexe : " + this.sexe +
                   "\nLangues : " + this.langues;

        }

    };

    
    message.textContent = "Inscription réussie !";

    recap.textContent = inscription.presenter();

});


formulaire.addEventListener("reset", function() {

    document.getElementById("message").textContent = "";

    document.getElementById("recapitulatif").textContent = "";

});
