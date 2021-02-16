var config = {
    width: 400,
    height: 400,
    scene: {
      preload: preload,  // Chargement des ressources
      create: create,    // Initialisation des variables & objets
      update: update     // Fonction appelée 60 fois par seconde
    },
    parent: '2048', // Affiche le jeu dans le div id="2048"
    autoCenter: true,
    physics: {
      default: 'arcade', // Permet d'appliquer un set de mouvements aux objets
      arcade: {
        gravity: {
          y: 0
        },
      },
    },
    // backgroundColor: '#eff5f3', // Ciel bleu
};
  
var game = new Phaser.Game(config);

function preload () {
  this.load.image('carre', 'img/petitcarre.png ')
  this.load.image('background', 'img/background.png ')

}

function create () {

  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.scale.refresh();

  rightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  leftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
  topArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  bottomArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

  //TODO La ligne en dessous est sensé afficher l'image en background, mais ça ne fonctionne pas
  // this.bg = this.game.add.tileSprite(0, 0, game.stage.bounds.width, game.cache.getImage('background').height, 'background');
  this.add.image(400, 400, 'background');
  this.add.image(300, 300, 'carre');

  premierCarre = this.physics.add.sprite(40,40, 'carre'); //Affiche 'bird' en x=40 y=40
  
  generateBlock = this.time.addEvent({
    delay: 10000, 
    callback: newBlock,
    callbackScope: this, 
    loop:true,

  });

}

function update () {
  //TODO Cette condition fait bug le jeu, à voir pourquoi
  // if(Phaser.Input.Keyboard.JustDown(RIGHT)){
  //   premierCarre.x = premierCarre.x + 140;
  // }

}

function newBlock(){

  block = Math.floor(Math.random() * Math.floor(2));
  // block = Phaser.Math.RandomXY();

  //TODO : Générer un block sur une position où aucun autre block ne se trouve
  //Stocker les positions des blocks existants dans un tableau/liste

}