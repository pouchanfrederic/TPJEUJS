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


  premierCarre = this.physics.add.sprite(0, 0, 'carre');
  text = this.add.text(-20, 0, "2", { font: "32px Arial", fill: getColorFromValue(2) });

  deuxiemeCarre = this.physics.add.sprite(0, 0, 'carre');
  text2 = this.add.text(-20, 0, "2", { font: "32px Arial", fill: getColorFromValue(2) });

  troisiemeCarre = this.physics.add.sprite(0, 0, 'carre');
  text3 = this.add.text(-20, 0, "8", { font: "32px Arial", fill: getColorFromValue(8) });

  quatriemeCarre = this.physics.add.sprite(0, 0, 'carre');
  text4 = this.add.text(-20, 0, "8", { font: "32px Arial", fill: getColorFromValue(8) });

  cinquiemeCarre = this.physics.add.sprite(0, 0, 'carre');
  text5 = this.add.text(-20, 0, "8", { font: "32px Arial", fill: getColorFromValue(8) });

  sixiemeCarre = this.physics.add.sprite(0, 0, 'carre');
  text6 = this.add.text(-20, 0, "4", { font: "32px Arial", fill: getColorFromValue(4) });

  septiemeCarre = this.physics.add.sprite(0, 0, 'carre');
  text7 = this.add.text(-20, 0, "2", { font: "32px Arial", fill: getColorFromValue(2) });

  huitiemeCarre = this.physics.add.sprite(0, 0, 'carre');
  text8 = this.add.text(-20, 0, "1024", { font: "32px Arial", fill: getColorFromValue(1024) });


  container = this.add.container(55, 55, [premierCarre, text]);
  container2 = this.add.container(152, 55, [deuxiemeCarre, text2]);
  container3 = this.add.container(249, 55, [troisiemeCarre, text3]);

  container4 = this.add.container(55, 152, [quatriemeCarre, text4]);
  container5 = this.add.container(249, 152, [cinquiemeCarre, text5]);

  container6 = this.add.container(152, 249, [sixiemeCarre, text6]);
  container7 = this.add.container(249, 249, [septiemeCarre, text7]);

  container8 = this.add.container(55, 346, [huitiemeCarre, text8]);


  squareCoords = [container, container2, container3, container4, container5, container6, container7, container8];

  console.log(squareCoords[1].list[1]._text); //Permet de connaître la valeur d'un carré
  console.log(squareCoords); //Permet de connaître la valeur d'un carré


}
var rightBlock;
var leftBlock;
var topBlock;
var bottomBlock;
var nouveauCarre;
var label;

function update() {

  // checkBorders(squareCoords);

  // if (this.physics.collide(premierCarre, deuxiemeCarre)){
  //   container.destroy();
  // }
  if (rightArrow.isDown) {
    if (!rightBlock) {
      mooveRight(squareCoords, this);
      rightBlock = true;
    }
  }
  if (rightArrow.isUp) {
    rightBlock = false;
  }

  if (leftArrow.isDown) {
    if (!leftBlock) {
      mooveLeft(squareCoords);
      leftBlock = true;
    }
  }
  if (leftArrow.isUp) {
    leftBlock = false;
  }
  if (topArrow.isDown) {
    if (!topBlock) {
      mooveTop(squareCoords);
      topBlock = true;
    }
  }
  if (topArrow.isUp) {
    topBlock = false;
  }
  if (bottomArrow.isDown) {
    if (!bottomBlock) {
      mooveBottom(squareCoords);
      bottomBlock = true;
    }
  }
  if (bottomArrow.isUp) {
    bottomBlock = false;
  }

}

function addAnotherCarre(nouveauCarre) {
  nouveauCarre = this.physics.add.sprite(150, 55, 'carre'); //TODO : A voir pour changer le nom de la variable
}

function mooveRight(squareCoords, scene) {
  console.clear();
  var containersToDestroyList = [];
  squareCoords.sort((a, b) => b.x - a.x);
  squareCoords.forEach(container => {

    console.log(squareCoords);

    displayCoords(container)

    var aimedContainer = getContainerByCoords(squareCoords, container.x + 291, container.y);
    

    if (isInBoundaries(container.x + 291, container.y)) {

      //Si la place est déjà prise et que le carré qui se trouve à cette place est de même valeur ... ALORS 
      if (checkIfPlaceIsTaken(squareCoords, container.x + 291, container.y) && aimedContainer.list[1]._text == container.list[1]._text) {


        aimedContainer.list[1] = updateSquareText(aimedContainer, scene);

        containersToDestroyList.push(container);


        console.log("On fusionne");

        return;
      }

      if (!checkIfPlaceIsTaken(squareCoords, container.x + 291, container.y)) {
        container.x += 291;
        return;
      }
    }
    console.log("La place du carré : " + getSquareValue(container) + " est déjà prise (+3)");

    // -----------------------------------------------------------------------------------------------------------------------------------------------------

    aimedContainer = getContainerByCoords(squareCoords, container.x + 194, container.y);

    if (isInBoundaries(container.x + 194, container.y)) {

      //Si la place est déjà prise et que le carré qui se trouve à cette place est de même valeur ... ALORS 
      if (checkIfPlaceIsTaken(squareCoords, container.x + 194, container.y) && aimedContainer.list[1]._text == container.list[1]._text) {

        aimedContainer.list[1] = updateSquareText(aimedContainer, scene);

        containersToDestroyList.push(container);

        console.log("On fusionne");

        return;
      }

      if (!checkIfPlaceIsTaken(squareCoords, container.x + 194, container.y)) {
        container.x += 194;
        return;
      }
    }

    console.log("La place du carré : " + getSquareValue(container) + " est déjà prise (+2)");

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------

    aimedContainer = getContainerByCoords(squareCoords, container.x + 97, container.y);

    if (isInBoundaries(container.x + 97, container.y)) {

      //Si la place est déjà prise et que le carré qui se trouve à cette place est de même valeur ... ALORS 
      if (checkIfPlaceIsTaken(squareCoords, container.x + 97, container.y) && aimedContainer.list[1]._text == container.list[1]._text) {

        aimedContainer.list[1] = updateSquareText(aimedContainer, scene);

        console.log("On fusionne");

        containersToDestroyList.push(container);


        return;
      }

      if (!checkIfPlaceIsTaken(squareCoords, container.x + 97, container.y)) {
        container.x += 97;
        return;
      }
    }

    // ------------------------------------------------------------------------------------------------------------------------------------------------------------



  });

  destroyContainers(squareCoords, containersToDestroyList);


}
function mooveLeft(squareCoords) {
  console.clear();
  squareCoords.forEach(container => {
    displayCoords(container)
    if (container.x == 55) { console.log("Coordonnées limite (dans le if)"); console.log("-----------------------------------------------"); return; }
    else { container.x = container.x - 97; }
    displayCoords(container)
    console.log("----------------------------------------------------------------------------");

  });
}
function mooveBottom(squareCoords) {
  console.clear();
  squareCoords.forEach(container => {
    displayCoords(container)
    if (container.y == 346) { console.log("Coordonnées limite (dans le if)"); return; }
    else { container.y = container.y + 97; }
    displayCoords(container)
    console.log("----------------------------------------------------------------------------");

  });
}
function mooveTop(squareCoords) {
  console.clear();
  squareCoords.forEach(container => {
    displayCoords(container)
    if (container.y == 55) { console.log("Coordonnées limite (dans le if)"); return; }
    else { container.y = container.y - 97; }
    displayCoords(container)
    console.log("----------------------------------------------------------------------------");

  });
}

function checkIfSameValue(container1, container2) {
  var isSameValue = false;
  console.log(container1.list[1]._text + container2.list[1]._text);

  if (container1.list[1]._text == container2.list[1]._text) {

    console.log("Les 2 carrés ont la même valeur");
    isSameValue = true;
  }

  return isSameValue;
}

function getContainerByCoords(squareCoords, x, y) {


  var containerToReturn;
  squareCoords.forEach(container => {
    // console.log("Je m'applique au container qui a la valeur : " + container.list[1]._text);
    if (container.x == x && container.y == y) { containerToReturn = container; }
    else { return; }
  });

  return containerToReturn;

}

function destroyContainers(squareCoords, containersToDestroy) {
  
  containersToDestroy.forEach(container => {
     destroyContainer(squareCoords, container);
    
  });

}

function destroyContainer(squareCoords, containerToDestroy) {

  squareCoords.forEach(container => {
    // console.log("Je m'applique au container qui a la valeur : " + container.list[1]._text);
    if (container.x == containerToDestroy.x && container.y == containerToDestroy.y) { container.destroy(); squareCoords.splice(squareCoords.indexOf(container), 1); }
    else { return; }
  });

}

function checkIfPlaceIsTaken(squareCoords, desiredX, desiredY) {
  var isTaken = false;
  if (!isInBoundaries(desiredX, desiredY)) { return true; } //Si les coordonées souhaitées sont hors limite 
  squareCoords.forEach(container => {
    // console.log("Je m'applique au container qui a la valeur : " + container.list[1]._text);
    if (container.x == desiredX && container.y == desiredY) { isTaken = true; }
    else { return; }
  });


  return isTaken;

}

function isInBoundaries(x, y) {
  if (x > 346 || y > 346 || x < 55 || y < 55) { return false; } //Si les coordonées souhaitées sont hors limite 
  else { return true; }

}

function updateSquareText(container, scene) {

  let newValue = parseInt(container.list[1]._text) * 2;

  return scene.add.text(-20, 0, newValue, { font: "32px Arial", fill: getColorFromValue(newValue) });
}

function getSquareValue(container) {

  return container.list[1]._text;
}

function displayCoords(container) { //Cette méthode sert à afficher les coordonnées d'un container, à des fins de test 

  var today = new Date();

  console.log("Valeur du carré = " + container.list[1]._text + " | X : " + container.x + " |  Y : " + container.y + " | Heure : " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

function getColorFromValue(value) {

  if (value == 2) {
    return '#f54242';
  }

  if (value == 4) {
    return '#4245f5';
  }

  if (value == 8) {
    return '#AEF';
  }

  if (value == 16) {
    return '#42f5d7';
  }

  if (value == 1024) {
    return '#AFC';
  }
}
