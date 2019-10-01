const age = prompt("quel est votre age ?");
const user = age;

if(user > 18){
  alert("Vous etes majeur");
} else if (user < 17) {
  alert("Bonjour simple user");
} else {
  console.log("retaper erreur");
}

const question = prompt("quel est votre role dans la société ?");
const admin = "admin";
if (question === admin && user>18) {
  alert("Bienvenue admin");
} else {
  alert("Bienvenue user");
}

const askPassword = prompt("quel est votre mdp ?");
const password = askPassword.length;
if (password > 5 && user > 18 && question === admin ) {
  alert("Bienvenue master user");
  } else {
    console.log("Bienvenue user");
  }
