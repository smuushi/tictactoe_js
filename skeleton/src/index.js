const View = require ("./ttt-view.js") // require appropriate file
const Game = require ("../ttt_node/game.js") // require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here

  const viewElement = document.querySelector(".ttt")
  // window.viewElement = viewElement

  const gameInstance = new Game();
  // gameInstance.run()
  let viewer = new View(gameInstance, viewElement);
  viewer.setupBoard();
  viewer.bindEvents();
  window.viewer = viewer;


});
