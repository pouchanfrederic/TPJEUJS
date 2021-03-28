# TPJEUJS
Jeu en phaser 

# Installation :

- Etape 1 : npm install phaser
- Etape 2 : git clone https://github.com/pouchanfrederic/TPJEUJS
- Etape 3 : Utiliser Xamp/Wamp pour se rendre sur la page index.html
- Etape 4 : Jouer ! 

# Règles du jeu : 

Voici les règles de ce jeu : dans le tableau de 4 cases sur 4, des carreaux numérotés à partir de 2 apparaissent. Il faut ensuite glisser ces éléments avec les flèches du clavier, afin que deux carreaux portant le même montant se percutent et fusionnent en un, dont le montant est égal à la somme des deux précédents. 2+2=4, 4+4=8, 8+8=16, 16+16=32... jusqu'à atteindre le but ultime, le nombre 2048 dans une des "tuiles".
# Fonctionnalités : 

- Les touches directionnelles permettent de déplacer l'ensemble des carrés dans une direction
- Si 2 carrés sont de même valeur, ils vont donc fusionner

# Problèmes à règler : 

- La mécanique de déplacement est bien avancée, il reste certains cas qui ne fonctionneront malheureusement pas (Exemple lorsqu'un carré se trouve entre 2 carrés de même valeur : ils vont quand même fusionner)
- Pas de balise pour comptabiliser le score
- Il manque une condition de victoire (très facile à faire)
- La génération de bloc à chaque déplacement
- Faire une limite de 1 fusion par déplacement


