
document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.getElementById("input");
  const listElement = document.getElementById("list-group");
  const buttonPlay = document.getElementById("button-play");
  

  const names = [];
  

  function updateList() {
      listElement.innerHTML = ""; 
      console.log(names)
      names.forEach((name, index) => {
          const listItem = document.createElement("li");
          listItem.textContent = name;
          console.log(listItem)
          
          
          
          listElement.appendChild(listItem);
      });
  }
  

  document.getElementById("addPlayer").addEventListener("click", function () {
      const playerName = inputElement.value;
      if (playerName.trim() !== "") {
          console.log("nombre agregado",playerName)
          names.push(playerName);
          inputElement.value = ""; 
          updateList();
      }
  });
  
  
  buttonPlay.addEventListener("click", function () {
      
      console.log("JUGAR button clicked");
      names.shift()
      updateList()
          
  });
});