const words = [
  "Rice",
  "Goto",
  "Ball",
  "Chair",
  "Table",
  "Lamp",
  "Phone",
  "Book",
  "Pencil",
  "Bag",
  "Shoe",
  "Hat",
  "Clock",
  "Bottle",
  "Pillow",
  "Blanket",
  "Baseball Bat",
  "Gun",
  "Knife",
  "Plate",
  "Cup",
  "Pedestrian",
  "Chicken",
  "Pan",
  "Brush",
  "Mirror",
  "Soap",
  "Towel",
  "Toothbrush",
  "Scissors",
  "Tape",
  "Glue",
  "Ruler",
  "Eraser",
  "Stapler",
  "Notebook",
  "Folder",
  "Calculator",
  "Keyboard",
  "Map",
  "Mouse",
  "Artificial Intelligence",
  "Speaker",
  "Headphones",
  "Charger",
  "Battery",
  "Flashlight",
  "Candle",
  "Match",
  "Umbrella",
  "Wallet",
  "Keys",
  "Ring",
  "Watch",
  "Glasses",
  "Belt",
  "Socks",
  "Shirt",
  "Pants",
  "Jacket",
  "Gloves",
  "Scarf",
  "Slippers",
  "Helmet",
  "Racket",
  "Dart",
  "Dice",
  "Card",
  "Chess",
  "Guitar",
  "Drum",
  "Flute",
  "Violin",
  "Piano",
  "Microphone",
  "Remote",
  "Television",
  "Radio",
  "Fan",
  "Aircon",
  "Refrigerator",
  "Iron",
  "Vacuum",
  "Ladder",
  "Hammer",
  "Screwdriver",
  "Wrench",
  "Saw",
  "Nail",
  "Rope",
  "Chain",
  "Lock",
  "Magnet",
  "Compass",
  "Globe",
  "suklay",
  "Camera",
];
let crewMate = null;
let impostor = null;
let impostorPlayer = null;
let playerNum = null;
const showWordElement = document.getElementById("showWord");
const curtain = document.getElementById("curtain");
const instructionBtn = document.getElementById("intructionsBtn");
const startBtn = document.getElementById("startButton");
instructionBtn.onclick = function (e) {
  e.preventDefault();
  instructionBtn.classList.remove("visible");
  document.getElementById("instructions").classList.add("visible");
  curtain.classList.add("visible");
};

curtain.onclick = () => {
  instructionBtn.classList.add("visible");
  document.getElementById("instructions").classList.remove("visible");
  curtain.classList.remove("visible");
};
//startButton fucntion
startBtn.onclick = function (e) {
  e.preventDefault();
  if (startBtn.classList.contains("unclickable")) {
    return;
  }
  playerNum = Number(document.getElementById("playerNum").value);

  //checks the proper amount of player
  if (playerNum < 3) {
    showWordElement.textContent = `players must be above 2`;
    return;
  }
  startBtn.classList.add("unclickable");

  //random player gets pick to be the impostor
  impostorPlayer = Math.floor(Math.random() * playerNum) + 1;
  //while loop that avoids the probability of getting the same word
  do {
    crewMate = words[Math.floor(Math.random() * words.length)];
    impostor = words[Math.floor(Math.random() * words.length)];
  } while (impostor === crewMate);

  showWord();
};

//delay function
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

//show word for each player function
async function showWord() {
  for (let i = 1; i <= playerNum; i++) {
    //show word condition, either crewmate or impostor
    showWordElement.textContent = i === impostorPlayer ? impostor : crewMate;
    await delay(5000);

    // Last player message
    if (i === playerNum) {
      showWordElement.textContent = "Players, you may now start the game";
      startBtn.classList.remove("unclickable");
      return;
    }

    // Show next player message
    showWordElement.textContent = "Next Player";
    await delay(5000);
  }
}
