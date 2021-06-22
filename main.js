var canvas = new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = "player.png";
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
   
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keypress=e.keyCode;

if(keypress=='38'){
    up();console.log("up")
}
if(keypress=='40'){
    down();console.log("down")
}
if(keypress=='37'){
    left();console.log("left")
}
if(keypress=='39'){
    right();console.log("right")
}
if(keypress=='70'){
    new_image('ironman_face.png');console.log("f")
}
if(keypress=='66'){
    new_image('spiderman_body.png');console.log("b")
}
if(keypress=='76'){
    new_image('hulk_legs.png');console.log("l")
}
if(keypress=='82'){
    new_image('thor_right_hand.jpg');console.log("r")
}
if(keypress=='72'){
    new_image('captain_america_left_hand.jpg');console.log("h")
}

}

function up(){
    if(player_y>=0){
        player_y= player_y - block_image_height;
        canvas.remove(player_object)
        player_update()
    }
}
function down(){
    if(player_y<=500){
        player_y= player_y + block_image_height;
        canvas.remove(player_object)
        player_update()
    }
}
function left(){
    if(player_x>=0){
        player_x= player_x - block_image_width;
        canvas.remove(player_object)
        player_update()
    }
}
function right(){
    if(player_x<=850){
        player_x= player_x + block_image_width;
        canvas.remove(player_object)
        player_update()
    }
}
