import Phaser from 'phaser';

var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};


var game = new Phaser.Game(config);

function preload() {
    console.log('preload');
    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    //this.load.baseURL = 'src/';
    this.load.setBaseURL('http://localhost:1234');
    this.load.image('bob', "https://raw.githubusercontent.com/bhunk/towerdeez/master/src/assets/sprite.png");
    console.log('post-preload');

}

function create() {
    console.log('create');
    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
  //  this.add.sprite(0, 0, 'einstein');
  //  this.bob = this.add.image(10,10,'bob');
    this.add.image(200,200,'bob');
    //this.image.preload.add.image(0,0,'bob');
    console.log('after image add')

}