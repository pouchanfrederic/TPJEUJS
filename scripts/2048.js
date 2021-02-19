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

function preload() {
  this.load.image('background', 'img/background.png')
  this.load.image('carre', 'img/petitcarre.png')
}

function create() {

  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
  this.scale.refresh();

  rightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

  leftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

  topArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

  bottomArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

  this.add.image(200, 200, 'background');

  // this.add.image(55,55,'carre')
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


  premierCarre = this.physics.add.sprite(0, 0, 'carre'); //Affiche 'bird' en x=40 y=40
  text = this.add.text(0, 0, "2", {font: "16px Arial", fill: "#dd1f1f"});
  // premierCarre.addChild(text);
  container = this.add.container(55, 55,[premierCarre,text]);
  
  // let label = this.add.text(20,20,"2",style);

  // generateBlock = this.time.addEvent({
  //   delay: 10000, 
  //   callback: newBlock,
  //   callbackScope: this, 
  //   loop:true,

  // });

}
var rightBlock;
var leftBlock;
var topBlock;
var bottomBlock;
var nouveauCarre;
var label;

function update() {

  if (container.x == 346 && rightArrow.isDown) {return;}
  if (container.x == 55 && leftArrow.isDown) {return;}
  if (container.y == 55 && topArrow.isDown) {return;}
  if (container.y == 346 && bottomArrow.isDown) {return;}
    if (rightArrow.isDown) {
      if (!rightBlock) {
        container.x = container.x + 97;
        console.log(container.x, container.y)
        // addAnotherCarre(nouveauCarre)
        rightBlock = true;
      }
    }
    if (rightArrow.isUp) {
      rightBlock = false;
    }

    if (leftArrow.isDown) {
      if (!leftBlock) {
        container.x = container.x - 97;
        console.log(container.x, container.y)
        leftBlock = true;
      }
    }
    if (leftArrow.isUp) {
      leftBlock = false;
    }
    if (topArrow.isDown) {
      if (!topBlock) {
        container.y = container.y - 97;
        console.log(container.x, container.y)
        topBlock = true;
      }
    }
    if (topArrow.isUp) {
      topBlock = false;
    }
    if (bottomArrow.isDown) {
      if (!bottomBlock) {
        container.y = container.y + 97;
        console.log(container.x, container.y)
        bottomBlock = true;
      }
    }
    if (bottomArrow.isUp) {
      bottomBlock = false;
    }

  }

function newBlock() {

  block = Math.floor(Math.random() * Math.floor(2));
  // block = Phaser.Math.RandomXY();

  //TODO : Générer un block sur une position où aucun autre block ne se trouve
  //Stocker les positions des blocks existants dans un tableau/liste

}

function addAnotherCarre(nouveauCarre) {
  nouveauCarre = this.physics.add.sprite(150, 55, 'carre'); //TODO : A voir pour changer le nom de la variable
}

