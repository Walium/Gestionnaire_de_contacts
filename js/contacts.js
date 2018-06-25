/*
Activité : gestion des contacts
*/
console.log("Bienvenue dans le gestionnaire des contacts");
var Contact = {
  // Initialise le contact
  init: function (nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  },
  // Renvoie la description du contact
  decrire: function () {
    var description = "Nom : "+this.nom + ", Prénom : " + this.prenom;
    return description;
  }
};
// Les contacts qui existe par defaut dans le repertoire
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

//  Insersion des contacts
var contacts = [];
contacts.push(contact1);
contacts.push(contact2);

// La variable cond pour boucler dans le while tant que l'utilisateur ne sors pas
var cond = true;

// Debut de la boucle while
while(cond){
  console.log("\n");
  console.log("1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
  console.log("\n");
  // Choix de l'option
  var option = prompt("Choisissez une option :");

// Si l'utilisateur choisi l'option 1
if(option==1){
  console.log("Voici le liste de tous vos contacts");
  // On lui affiche ses contacts
  contacts.forEach(function (contact) {
    console.log(contact.decrire());
  });
}
// Si l'utilisateur choisit l'option 2
if(option == 2){
  // On lui fais entrer les données du nouveau contact
  var nouveauNom = prompt("Entrez le nom du nouveau contact :");
  var nouveauPrenom = prompt("Entrez le prenom du nnouveau contact :");

  var nouveauContact = Object.create(Contact);
  nouveauContact.init(nouveauNom, nouveauPrenom);
  // On l'ajoute a notre tableau
  contacts.push(nouveauContact);
  // On lui indique avec un petit message que son contact a bien été ajouté
  console.log("Le nouveau contact a bien été ajouté");
}
// Si l'utilisateur choisi l'option 0
else if(option == 0){
  // On change la valeur de la variable cond pour sortir de la boucle while
  cond = false;
  // Et on affiche un petit message pour lui dire qu'il est bien sorti du gestionnaire de contacts :)
  console.log("Fermeture du gestionnaire, au revoir :)");
}
}
