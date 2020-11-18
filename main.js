canvas=document.getElementById("myCanvas");
ctx=getContext("2d");
car-array["race.jpg","rajmahal.jpg","liberty.jpg"];
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);
car1_width=100
car1_height=100;

car_width=100;
car_height=100;
background_image=array[randomnumber];
carimage="beep beep.jpg";
car1_x=20;
car1_y=30;
car1_x=20;
car1_y=25;
function add(){
    background_imagetag=new image();
background_imagetag.onload=upload_background;
background_imagetag.src=background_image;
car1_imagetag=new image();
car1_imagetag.onload=upload_background;
car1_imagetag.src=car_image;
car_imagetag=new image();
car_imagetag.onload=upload_background;
car_imagetag.src=car_image;
}
function upload_background(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas,height);
}
function upload_car(){
    ctx.drawImage(car1_width,car1_height,car1_x,car1_y);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
 var keypress=e.keyCode;
console.log(keypress);
if (keypress=="38"){
    up1()
    console.log("up");
}
if (keypress=="40"){
    down1()
    console.log("down");
}
if (keypress=="37"){
    left1()
    console.log("left");
}
if (keypress=="39"){
    right1()
    console.log("right");
}
function up1(){
    if (car1_y>=0){
        car1_y=car_y-10;
        console.log("Up arrrow is pressed, x= ",car1_x,"Y = ",car1_y);
       upload_background();
       upload_car(); 
    }
}
function down1(){
if (car1_y<=500){
car1_y=car1_y+10;
console.log("down arrow is pressed, x= ",car1_x,"Y = ",car1_y);
upload_background();
upload_car();
}
}
function left1(){
    if (car1_x>=0){
        car1_x=car1_x-10;
        console.log("left arrow is pressed, x= ",car1_x,"Y= ", car1_y);
        upload_background();
upload_car();
    }
}
function right1(){
    if (car1_x<=700){
        car1_x=car1_x+10;
        console.log("right arrow is pressed, x= ",car1_x,"Y= ",car1_y);
    }
}
 if (keypress=="38")
    up()
    console.log("up");
}
if (keypress=="40"){
    down()
    console.log("down");
}
if (keypress=="37"){
    left()
    console.log("left");
}
if (keypress=="39"){
    right()
    console.log("right");
}
function up(){
    if (car_y>=0){
        car_y=car_y-10;
        console.log("Up arrrow is pressed, x= ",car_x,"Y = ",car_y);
       upload_background();
       upload_car(); 
    }
}
function down1(){
if (car_y<=500){
car_y=car_y+10;
console.log("down arrow is pressed, x= ",car_x,"Y = ",car_y);
upload_background();
upload_car();
}
}
function left1(){
    if (car_x>=0){
        car_x=car_x-10;
        console.log("left arrow is pressed, x= ",car_x,"Y= ", car_y);
        upload_background();
upload_car();
    }
}
function right1(){
    if (car_x<=700){
        car_x=car_x+10;
        console.log("right arrow is pressed, x= ",car_x,"Y= ",car_y);
    }
}