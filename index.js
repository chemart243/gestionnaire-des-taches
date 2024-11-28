

function Bienvenu(){
    console.log('bienvenue');
}


Bienvenu();

let titreTacheElt = document.getElementById('titreTache');
let descriptionTacheElt = document.getElementById('descriptionTache');
let dateTacheElt = document.getElementById('dateTache');
let ajouterBoutonElt = document.getElementById('AjouterBouton');



ajouterBoutonElt.addEventListener("click",() =>{
    console.log(titreTacheElt.value);

    let tableaux = [];
    tableaux.push(titreTacheElt.value,descriptionTacheElt.value,dateTacheElt.value);

    for(i = 0 ; i < tableaux.length ; i++){
        let  trLigne = document.createElement('tr');
        let  tdCellule = document.createElement('td');
        let tableauCorps = document.querySelector('tbody');

        tdCellule.textContent = tableaux[i];

        trLigne.appendChild(tdCellule);

        tableauCorps.appendChild(trLigne);

    }

    tableaux.forEach((element) => console.log(element));
});


