const Engine;
const World;
const Bodies;
const Mouse constraints;

var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;

function setup(){
    canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    };
    mConstraint = MouseConstraint.create(enigine, options);
    World.add(world, mConstraint);

    startBobPositionX=width/2;
	startBobPositionY=height/4+500;

    bob1= new Pendulum();
    bob2= new Pendulum();
    bob3= new Pendulum();
    bob4= new Pendulum();
    bob5= new Pendulum();

    sling1= new Sling();
    sling2= new Sling();
    sling3= new Sling();
    sling4= new Sling();
    sling5= new Sling();
}
function draw(){
Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
    
    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body, {x: mouseX, mouseY});
}