function E(id) {
  return document.getElementById(id);
}

const input = E("input");
const addPlayer = E("addPlayer");
const listGroup = E("list-group");
const list = E("list");

let players = ["julio", "lopera", "yeni"];

addPlayer.addEventListener("click", () => {
  let player = input.value;
  input.value = "";
  input.focus();
  if (player) {
    players.push(player);
    list.style.display = "block";
    
  }
});

function showPlayers() {
  for (let index = 0; index < players.length; index++) {
    console.log(players[index]);
  }
}
