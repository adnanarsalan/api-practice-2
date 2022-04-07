const loadData =() => {
const searchField = document.getElementById("search-field");
const searchText = searchField.value;





fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`)
.then(res=>res.json())
.then(data=>showPlayerDetails(data.player));

}
const showPlayerDetails = (players) => {
              
            
          

for(const player of players){
               
               const parent = document.getElementById("player-container");

               const div = document.createElement('div');
               div.innerHTML = `
               
               
               <div class="card" style="width: 18rem;">
                 <img src="${player.strRender}" class="card-img-top" alt="...">
                 <div class="card-body">
                 <h2>name:${player.strPlayer}</h2>
                   <h5 class="card-title"></h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
                   <button onclick="next('${player.idPlayer}')"
                   class="btn btn-success">DETAILS</button>
                 </div>
               </div>
               
               
               
               `;
               
               parent.appendChild(div);


   console.log(player);

}


};
const next =(id) => {
               const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
               fetch(url)
.then((response) => response.json())
.then((data) => setDetails(data.players[0]));

};
const setDetails=(info) => {

               document.getElementById("player-container").innerHTML=`
               
               <div class="alignment">

               <img src="${info. strRender} " width="250"  height="250" alt=""> 
               <h1> Name: ${info.strPlayer} </h1>
               <h1> Born: ${info.dateBorn} </h1>
               <h2> height: ${info.strHeight} </h2>
               <h2> weight: ${info.strWeight} <h2>

               </div>`;
               
              


}
  



function pic ()
{

     let isha = document.getElementById("img02")
    isha.src="image/football.jpg"
}
function pic2 ()
{

     let isha = document.getElementById("img02")
    isha.src="image/adnan.jpg"
}


  