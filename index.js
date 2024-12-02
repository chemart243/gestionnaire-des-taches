

function Bienvenu(){
    console.log('bienvenue');
}


Bienvenu();

let compteurElt = document.getElementById('nombre');

let countElement = 0;



let titreTacheElt = document.getElementById('titreTache');
let descriptionTacheElt = document.getElementById('descriptionTache');
let dateTacheElt = document.getElementById('dateTache');
let ajouterBoutonElt = document.getElementById('AjouterBouton');

ajouterBoutonElt.addEventListener("click",ajouter)


function ajouter(){
     /* console.log(titreTacheElt.value);

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
*/

if(titreTacheElt.value == "" || descriptionTacheElt.value == "" || dateTacheElt.value == ""){
  Swal.fire({
    title: "Champ de saisi !",
    text: "Veuillez compléter tous les champs",
    icon: "error"
  });
}
else{

  countElement++;

  compteurElt.textContent = countElement;

  Swal.fire({
    title: "Sauvegarde !",
    text: "Votre tache a été bien enregistré !",
    icon: "success"
  });


  var options = {
    includeUpperCase: true,
    includeNumbers: true,
    length: 5,
    startsWithLowerCase: true
  };
  
  let identifiant = strRandom(options);
  
  // renvoie par exemple : "iL0v3"

object1.identifiant = {
    a: titreTacheElt.value,
    b: descriptionTacheElt.value,
    c: dateTacheElt.value
  }

  for (const [key, value , value2] of Object.entries(object1)) {
    console.log(`${value.a}`);
    console.log(`${value.b}`);
    console.log(`${value.c}`);
    let  trLigne = document.createElement('tr');
    let  tdCellule1 = document.createElement('td');
    let  tdCellule2 = document.createElement('td');
    let  tdCellule3 = document.createElement('td');
    let tableauCorps = document.querySelector('tbody');
    let retourligne = document.createElement('br');
    let boutonElt  = document.createElement('button');
    let boutonElt2 = document.createElement('button');
    let retourLigne2 = document.createElement('br');

    boutonElt.textContent = 'modifier';
    boutonElt2.textContent = "vider"
    boutonElt.style.color = "white";
    boutonElt2.style.color = "white";

    boutonElt.className = "btn btn-warning";
    boutonElt2.className = "btn btn-primary";
    

    tdCellule1.innerHTML =  '<span>' + value.a + '</span><br> <button class="btn btn-success"  type="button">terminer</button>';
    tdCellule2.textContent =  value.b
    tdCellule3.textContent =  value.c


    tdCellule3.appendChild(retourLigne2)
    tdCellule3.appendChild(boutonElt2);



    titreTacheElt.value = "";
    descriptionTacheElt.value = "";
    dateTacheElt.value = "";




    tdCellule1.addEventListener("click", () =>{

      
      Swal.fire({
        title: "tache terminée !",
        text: 'Vous avez fini la tâche ' + value.a + ' ' + value.b + ' ' + value.c,
        icon: "success"
      });
        console.log(value.a + ' ' + value.b + ' ' + value.c); 
        
        tdCellule1.style.transition = ".5s .0s"
        tdCellule2.style.transition = ".5s .0s"
        tdCellule3.style.transition = ".5s .0s"

        tdCellule1.style.textDecoration = "line-through";
        tdCellule2.style.textDecoration = "line-through";
        tdCellule3.style.textDecoration = "line-through";



        boutonElt.style.display = "none";

       
         

        

        
        
        

        
        
    })




    boutonElt2.addEventListener("click",() =>{

      Swal.fire({
        title: "suppression !",
        text: 'Vous avez supprimé ' + value.a + ' ' + value.b + ' ' + value.c,
        icon: "success"
      });
        console.log(value.a + ' ' + value.b + ' ' + value.c); 
        
        tdCellule1.style.transition = ".5s .0s"
        tdCellule2.style.transition = ".5s .0s"
        tdCellule3.style.transition = ".5s .0s"

        tdCellule1.style.display = "none";
        tdCellule2.style.display = "none";
        tdCellule3.style.display = "none";



        boutonElt2.style.display = "none";

        countElement--;
        compteurElt.textContent = countElement;

      
    });



    boutonElt.addEventListener("click", () => {

      if(titreTacheElt.value == "" || descriptionTacheElt.value == "" || dateTacheElt.value == ""){
        Swal.fire({
          title: "Champ de saisi !",
          text: "Veuillez inserer les nouvelles pour mettre à jour",
          icon: "error"
        });
      }else{
        Swal.fire({
          title: "modification !",
          text: 'vous avez remplacé ' + value.a + ' par ' + titreTacheElt.value,
          icon: "success"
        });
        tdCellule1.style.display = "none";
        tdCellule2.style.display = "none";
        tdCellule3.style.display = "none";

           
           object1.identifiant = {
            a: titreTacheElt.value,
            b: descriptionTacheElt.value,
            c: dateTacheElt.value
          }
         boutonElt.textContent = 'mis à jour'
  
           recharger();


    titreTacheElt.value = "";
    descriptionTacheElt.value = "";
    dateTacheElt.value = "";

      }
      
    });



    tdCellule2.appendChild(retourligne);
    tdCellule2.appendChild(boutonElt);
    

    trLigne.appendChild(tdCellule1);
    trLigne.appendChild(tdCellule2);
    trLigne.appendChild(tdCellule3);


    tableauCorps.appendChild(trLigne);

  }
}
    
};

const object1 = {

    

    
  };

  
  
  

  
  function strRandom(o) {
    var a = 10,
        b = 'abcdefghijklmnopqrstuvwxyz',
        c = '',
        d = 0,
        e = ''+b;
    if (o) {
      if (o.startsWithLowerCase) {
        c = b[Math.floor(Math.random() * b.length)];
        d = 1;
      }
      if (o.length) {
        a = o.length;
      }
      if (o.includeUpperCase) {
        e += b.toUpperCase();
      }
      if (o.includeNumbers) {
        e += '1234567890';
      }
    }
    for (; d < a; d++) {
      c += e[Math.floor(Math.random() * e.length)];
    }
    return c;
  }


  function recharger(){
    for (const [key, value , value2] of Object.entries(object1)) {
        console.log(`${value.a}`);
        console.log(`${value.b}`);
        console.log(`${value.c}`);
        let  trLigne = document.createElement('tr');
        let  tdCellule1 = document.createElement('td');
        let  tdCellule2 = document.createElement('td');
        let  tdCellule3 = document.createElement('td');
        let tableauCorps = document.querySelector('tbody');

        tdCellule1.innerHTML =  '<span>' + value.a + '</span> <button class="btn btn-danger"  type="button">Supprimer</button>';
        tdCellule2.textContent =  value.b
        tdCellule3.textContent =  value.c

        trLigne.appendChild(tdCellule1);
        trLigne.appendChild(tdCellule2);
        trLigne.appendChild(tdCellule3);


        tableauCorps.appendChild(trLigne);
  }
}

