var canvas = new fabric.canvas("myCanvas");
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 10;
var player_object = "";
block_image_object = "";
//-----------------------
function player_update()
{
    fabric.Image.fromURL("8BFBE81DB-8836-49C2-8C88-EEE7956BE440.jpeg", function(Img) {   
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });
}
 function new_image(get_image)
 {
    fabric.Image.fromURL(get_image, function(Img) {   
        block_image_object = Img;
    
        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_image_object);
    
        });
 }