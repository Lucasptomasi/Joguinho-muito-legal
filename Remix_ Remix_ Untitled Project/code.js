var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f83d6468-0c6e-4f0d-87d4-4671beb63eb2","91dfe0d6-f1d2-4d01-ae7a-36d1e1d5d3ba","e8ee7893-a7cc-4c99-b04d-fb822b762a5e"],"propsByKey":{"f83d6468-0c6e-4f0d-87d4-4671beb63eb2":{"name":"ending","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"rC1LsdgDE95arb2G0jbg8BiGB8lDkWOj","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/f83d6468-0c6e-4f0d-87d4-4671beb63eb2.png"},"91dfe0d6-f1d2-4d01-ae7a-36d1e1d5d3ba":{"name":"enemys","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"DPB_YDhOGjQQas4FhPOb3eYiClb.nKf4","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/91dfe0d6-f1d2-4d01-ae7a-36d1e1d5d3ba.png"},"e8ee7893-a7cc-4c99-b04d-fb822b762a5e":{"name":"player","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"fUTP_TQiKx1e0V2DMoaXfRkItFAnbclh","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/e8ee7893-a7cc-4c99-b04d-fb822b762a5e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player = createSprite(200,372,20,20);
var parede1 = createSprite(320,200,10,400);
var parede2 = createSprite(80,200,10,400);
var enemy1 = createSprite(285,305,30,30);
var enemy2 = createSprite(285,185,30,30);
var enemy3 = createSprite(110,245,30,30);
var enemy4 = createSprite(110,130,30,30);
var enemy5 = createSprite(285,70,30,30);

enemy1.setAnimation("enemys");
enemy2.setAnimation("enemys");
enemy3.setAnimation("enemys");
enemy4.setAnimation("enemys");
enemy5.setAnimation("enemys");
player.setAnimation("player");

playSound("assets/category_background/repitition.mp3",true);

var tentativas = 0;
var GameStage = 0;


enemy1.shapeColor = "red";
enemy2.shapeColor = "red";
enemy3.shapeColor = "red";
enemy4.shapeColor = "red";
enemy5.shapeColor = "red";
player.shapeColor = "lightgreen";


 
enemy1.velocityX = -5;
enemy2.velocityX = -5;
enemy5.velocityX = -5;

enemy3.velocityX = 5;
enemy4.velocityX = 5;

function draw() {
  background("white");
  text("tentativas:" + tentativas,90,390);
  
  
  createEdgeSprites();
  
  enemy1.bounceOff(parede2);
  enemy1.bounceOff(parede1);
  
  enemy2.bounceOff(parede1);
  enemy2.bounceOff(parede2);
  
  enemy3.bounceOff(parede1);
  enemy3.bounceOff(parede2);
  
  enemy4.bounceOff(parede1);
  enemy4.bounceOff(parede2);
  
  enemy5.bounceOff(parede1);
  enemy5.bounceOff(parede2);
  
  player.bounceOff(edges);
 
  if (player.isTouching(topEdge)) {
      GameStage = GameStage + 1;
    }
      
  
  if (keyDown(UP_ARROW)) {
    player.y = player.y - 5;
  }
 
  if (keyDown(DOWN_ARROW)) {
    player.y = player.y + 5;
  }
  
  if(
     player.isTouching(enemy1)||
     player.isTouching(enemy2)||
     player.isTouching(enemy3)||
     player.isTouching(enemy4)||
     player.isTouching(enemy5))
  {
     player.x = 200;
     player.y = 372;
     tentativas = tentativas + 1;
     
  }
  if (GameStage == 1) {
    var final = createSprite(200,200,400,400);
    final.setAnimation("ending");
    
    
    
    
    
    
    
  }
  
  
  
  
  
  
  
  
  
  
  drawSprites();
  
 
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
