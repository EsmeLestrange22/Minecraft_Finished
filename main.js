canvas = new fabric.Canvas("myCanvas");

Player_x = 30;
Player_y = 30;

width_block = 30;
height_block = 30;

player_o = "";
block_o = "";

function player_update() {
    fabric.Image.fromURL("player.png",
        function (Img) {
            player_o = Img;
            player_o.scaleToWidth(150);
            player_o.scaleToHeight(140);
            player_o.set({
                top: Player_y,
                left: Player_x
            });
            canvas.add(player_o);
        }




    );
}

function object_update(get_img) {
    fabric.Image.fromURL(get_img,
        function (Img) {
            block_o = Img;
            block_o.scaleToWidth(width_block);
            block_o.scaleToHeight(height_block);
            block_o.set({
                top: Player_y,
                left: Player_x
            });
            canvas.add(block_o);
        }




    );
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress = e.keyCode;
    //shift+p

    if (e.shiftKey == true && keypress == "80") {
        width_block = width_block + 10
        height_block = height_block + 10
        document.getElementById("cw1").innerHTML = width_block;
        document.getElementById("ch1").innerHTML = height_block;

    }
    //shift+77
    if (e.shiftKey == true && keypress == "77") {
        width_block = width_block - 10
        height_block = height_block - 10
        document.getElementById("cw1").innerHTML = width_block;
        document.getElementById("ch1").innerHTML = height_block;

    }

    if (keypress == "65" || keypress == "37") {
        left();
    }
    if (keypress == "87" || keypress == "38") {
        up();
    }
    if (keypress == "83" || keypress == "40") {
        down();
    }
    if (keypress == "68" || keypress == "39") {
        right();
    }
    if (keypress == "67") {
        object_update("cloud.jpg");
    }
    if (keypress == "71") {
        object_update("dark_green.png");
    }
    if (keypress == "70") {
        object_update("ground.png");
    }
    if (keypress == "76") {
        object_update("light_green.png");
    }
    if (keypress == "82") {
        object_update("roof.jpg");
    }
    if (keypress == "84") {
        object_update("trunk.jpg");
    }
    if (keypress == "85") {
        object_update("unique.png");
    }
    if (keypress == "66") {
        object_update("wall.jpg");
    }
    if (keypress == "73") {
        object_update("yellow_wall.png");
    }
}

function left() {
    if (Player_x > 0) {
        Player_x = Player_x - width_block;
        canvas.remove(player_o);
        player_update();
    }
}
function right() {
    if (Player_x < 750) {
        Player_x = Player_x + width_block;
        canvas.remove(player_o);
        player_update();
    }
}
function up() {
    if (Player_y > 0) {
        Player_y = Player_y - height_block;
        canvas.remove(player_o);
        player_update();
    }
}
function down() {
    if (Player_y < 350) {
        Player_y = Player_y + height_block;
        canvas.remove(player_o);
        player_update();
    }
}