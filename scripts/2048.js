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
  this.load.image('background', 'img/background.png')
  this.load.image('carre', 'img/petitcarre.png')
}

function create () {

  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.scale.refresh();

  rightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  // rightArrow.onDown.add(addPhaserDude, this); //Permettra d'ajouter d'autres blocs quand on appuie sur une touche
  leftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
  topArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  bottomArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

  //TODO La ligne en dessous est sensé afficher l'image en background, mais ça ne fonctionne pas
  // this.bg = this.game.add.tileSprite(0, 0, game.stage.bounds.width, game.cache.getImage('background').height, 'background');
  this.add.image(200,200, 'background');
  this.add.image(55,55,'carre')

//this.add.image(150,55,'carre')
//this.add.image(250,55,'carre')
//this.add.image(345,55,'carre')

// this.add.image(55,150,'carre')
// this.add.image(55,250,'carre')
// this.add.image(55,345,'carre')

// this.add.image(150,150,'carre')
// this.add.image(150,250,'carre')
// this.add.image(150,345,'carre')
  
// this.add.image(250,150,'carre')
// this.add.image(250,250,'carre')
//  this.add.image(250,345,'carre')
  
// this.add.image(345,150,'carre')
//this.add.image(345,250,'carre')
//  this.add.image(345,345,'carre')


  premierCarre = this.physics.add.sprite(40,40, 'carre'); //Affiche 'bird' en x=40 y=40
  
  // generateBlock = this.time.addEvent({
  //   delay: 10000, 
  //   callback: newBlock,
  //   callbackScope: this, 
  //   loop:true,

  // });

}

function update () {
  //TODO Cette condition fait bug le jeu, à voir pourquoi
  if(rightArrow.isDown){
   premierCarre.x = premierCarre.x + 10;
  }
  if(leftArrow.isDown){
    premierCarre.x = premierCarre.x - 10;
   }
  if(topArrow.isDown){
  premierCarre.x = premierCarre.x - 10;
  }
  if(bottomArrow.isDown){
  premierCarre.x = premierCarre.x - 10;
  }

}

function newBlock(){

  block = Math.floor(Math.random() * Math.floor(2));
  // block = Phaser.Math.RandomXY();

  //TODO : Générer un block sur une position où aucun autre block ne se trouve
  //Stocker les positions des blocks existants dans un tableau/liste

}