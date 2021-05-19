canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "https://www.kindpng.com/picc/m/310-3107715_fast-car-png-transparent-png.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://pngimage.net/wp-content/uploads/2018/05/fast-cars-png-5.png";
car2_x = 10;
car2_y = 100;

background_image = "https://images.unsplash.com/photo-1451481086097-f6a15d5f8d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";

function add(){
    background_imgTag = new Image();//defining a variable with a new image
    background_imgTag.onload = uploadBackground;//setting a function, onloading this variable
    background_imgTag.src = background_image;//Load image

    car1_imgTag = new Image();//defining variable with new image
    car1_imgTag.onload = uploadcar1;//setting a function, onloading this variable
    car1_imgTag.src = car1_image;//load image

    car2_imgTag = new Image();//defining variable with new image
    car2_imgTag.onload = uploadcar2;//setting a function, onloading this variable
    car2_imgTag.src = car2_image;//load image

}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown" , myKeyDown);
function myKeyDown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        car1_up();
        console.log("up arrow key");
    }
    if(keypressed=="40"){
        car1_down();
        console.log("down arrow key");
    }
    if(keypressed=="37"){
        car1_left();
        console.log("left arrow key");
    }
    if(keypressed=="39"){
        car1_right();
        console.log("right arrow key");
    }

}
function myKeyDown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed=="87"){
        car2_up();
        console.log("up letter key");
    }
    if(keypressed=="83"){
        car2_down();
        console.log("down letter key");
    }
    if(keypressed=="65"){
        car2_left();
        console.log("left letter key");
    }
    if(keypressed=="68"){
        car2_right();
        console.log("right letter key");
    }

}
