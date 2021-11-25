// Récupération des éléments du dom
let inputRecherche = document.querySelector('#inputRecherche').value;
let afficher = document.querySelector('#afficher');
let maville = document.querySelector('#maville');
let infoMaville = document.querySelector('#infoMaville');
let lat = document.querySelector('#lat');
let long = document.querySelector('#long');
let pays = document.querySelector('#pays');
let météoDuJour = document.querySelector('#météoDuJour');
//let key = 'ae3e8b28d061817c1890064e35ccfe46';
//let town = inputRecherche.Value;
   
    console.log(inputRecherche);
/**
 * fonction sélectionner ville
 */
const selectionnerVille = (event) =>{
    event.preventDefault()
   //let keyP =3a2ea38cb56c448cf5d6ee86eaa67cf5;
    
    let url ="https://api.openweathermap.org/data/2.5/forecast?q="+ inputRecherche +"&appid=97f55fd2ae2ca497a45766b111b0ff0e"
    console.log("c'est good");
    fetch(url)
    .then(function(response) {
        if(response.ok) {
            return  response.json();
        }
    })
    .then(function(value){
        return value; 
 
     })
    .then(function(data) {
      //récupération des données de ma ville
      maville.innerHTML = data.city.name;
        lat.innerHTML= data.city.coord.lat; 
        long.innerHTML= data.city.coord.lon; 
        pays.innerHTML=  " "+ data.city.country; 
        //on boucle sur la météo des 5 jours
        
        for(let i = 0; i <= data.list[4].length; i++){
           console.log("data.list"+[i]);
           /* let div = document.createElements('div'); 
            div.document.s
            météoDuJour.appendChild()*/
         
        } 
    })
    .catch(function(error){
        console.log(" Le Fichier est vide");
    })
}
     


// Ecoute de l'évenment sur le bouton 
afficher.addEventListener("click", selectionnerVille)