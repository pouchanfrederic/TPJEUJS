var config = {
    width: 400,
    height: 490,
    scene: {
      preload: preload,  // Chargement des ressources
      create: create,    // Initialisation des variables & objets
      update: update     // Fonction appelée 60 fois par seconde
    },
    parent: '2048', // Affiche le jeu dans le div id="2048"
    physics: {
      default: 'arcade', // Permet d'appliquer un set de mouvements aux objets
      arcade: {
        gravity: {
          y: 0
        },
      },
    },
    backgroundColor: '#eff5f3', // Ciel bleu
};
  
var game = new Phaser.Game(config);

function preload () {

}

function create () {

}

function update () {

}