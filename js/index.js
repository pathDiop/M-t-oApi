// Récupération des éléments du dom
let inputRecherche = document.querySelector('#inputRecherche').value;
let afficher = document.querySelector('#afficher');
let maville = document.querySelector('#maville');
let infoMaville = document.querySelector('#infoMaville');
let meteo = document.querySelector('#meteo');
let meteo5j = document.querySelector('#meteo5j');
let lat = document.querySelector('#lat');
let long = document.querySelector('#long');
let pays = document.querySelector('#pays');
/**
 * fonction sélectionner ville
 */
const selectionnerVille = (event) =>{
   //let keyP =3a2ea38cb56c448cf5d6ee86eaa67cf5;
    
    let url ="https://api.openweathermap.org/data/2.5/forecast?q="+ inputRecherche +" &units=metric&appid=97f55fd2ae2ca497a45766b111b0ff0e"
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
        // définir la liste des jours
        let dataListe = new Array(data.list.slice(0,5));
        console.log(dataListe);
        //on boucle sur la météo des 5 jours
       for(let i = 0; i < dataListe[0].length ; i++){
            let meteoDuJour = document.createElement('div');
            meteoDuJour.setAttribute("id", "meteoDuJour");
            meteo5j.appendChild(meteoDuJour);

            let cloud = document.createElement('img');
            cloud.src="http://openweathermap.org/img/wn/"+dataListe[0][i].weather[0].icon+".png";
            meteoDuJour.appendChild(cloud);
        
            let tempMin = document.createElement('h5');
            tempMin.innerHTML += "Temp_Min : "+dataListe[0][i].main.temp_min;
            meteoDuJour.appendChild(tempMin);

            let tempMax = document.createElement('h5');
            tempMax.innerHTML += "Temp_Max : "+ dataListe[0][i].main.temp_max;
            meteoDuJour.appendChild(tempMax);

             
            
        } 
    })
    .catch(function(error){
        console.log(" Le Fichier est vide");
    })
}
     


// Ecoute de l'évenment sur le bouton 
afficher.addEventListener("click", selectionnerVille)