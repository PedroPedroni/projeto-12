var jardim,coelho,maçã,folhalaranja,folhavermelha;
var jardimFoto,coelhoFoto,folhalaranjaFoto,folhavermelhaFoto;




function preload(){
  jardimFoto = loadImage("garden.png");
  coelhoFoto = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  folhalaranjaFoto = loadImage("orangeLeaf.png");
  folhavermelhaFoto = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Plano de fundo móvel
jardim=createSprite(200,200);
jardim.addImage(jardimFoto);


//criar menino correndo
coelho = createSprite(160,340,20,20);
coelho.scale =0.09;
coelho.addImage(coelhoFoto);
}

function draw() {
  background(0);
  
  // menino movendo-se no eixo X com o mouse '
  coelho.x = World.mouseX;
  
  edges= createEdgeSprites();
  coelho.collide(edges);
  
   drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      criarmaçãs();
    } else if (select_sprites == 2) {
      createOrange();
    }else {
      createRed();
    }
  }

}

function criarmaçãs() {
maçã = createSprite(random(50, 350),40, 10, 10);
maçã.addImage(appleImg);
maçã.scale=0.07;
maçã.velocityY = 3;
maçã.lifetime = 150;
  
}

function createOrange() {
  folhalaranja = createSprite(random(50, 350),40, 10, 10);
  folhalaranja.addImage(folhalaranjaFoto);
  folhalaranja.scale=0.08;
  folhalaranja.velocityY = 3;
  folhalaranja.lifetime = 150;
}

function createRed() {
  folhavermelha = createSprite(random(50, 350),40, 10, 10);
  folhavermelha.addImage(folhavermelhaFoto);
  folhavermelha.scale=0.06;
  folhavermelha.velocityY = 3;
  folhavermelha.lifetime = 150;
}
