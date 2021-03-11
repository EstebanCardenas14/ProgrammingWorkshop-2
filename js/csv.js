
let globalData;
const todoList = document.querySelector(".animals-container");

d3.dsv(";","./data/pets-citizens.csv",function(d) {
  return {
    microchip: d.microchip,
    species: d.species,
    sex: d.sex,
    size: d.size,
    potentDangerous : d.potentDangerous,
    neighborhood :d.neighborhood
  };
}).then( function( data ) {
    console.log( data.length ); 
    for (let index = 0; index < data.length; index++) {
      if(data ===""){
        alert("the csv is not charge");
      }else{
       
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("card-animals");
        
        const imgCard = document.createElement("img");
        imgCard.classList.add("animalPicture");
        imgCard.src = "img/dog.jpg";
        imgCard.alt = "perro";
        todoDiv.appendChild(imgCard);
        
        const namePet = document.createElement("h5");
        namePet.classList.add("card-titleName");
        namePet.innerText = data[index].microchip;
        todoDiv.appendChild(namePet);
        
        const nameBreed = document.createElement("h5");
        nameBreed.classList.add("card-textBreed");
        nameBreed.innerText = data[index].species;
        todoDiv.appendChild(nameBreed);
       
        const nameOwner = document.createElement("h5");
        nameOwner.classList.add("card-textOwner");
        nameOwner.innerText = data[index].size;
        todoDiv.appendChild(nameOwner);
       
        todoList.appendChild(todoDiv);
        
      }
      
    }
    globalData = data;   
  } )
  .catch( function( error ) {
    // handle error
    console.log('error', error);    
       
  } );



  
 
  

  