left_wrist=0;
right_wrist=0;
difference=0;
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,400);
video.position(150,300);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotResults)
}

function modelLoaded() {
    console.log("success");
}
function draw() {
   if(difference!==0){
    fill("black");
    textSize(difference);

    text("hi!my name is delisha",50,300);
   } 
    }
    
function gotResults(results){
    // console.log(results);
    if(results.length>0){
        left_wrist=results[0].pose.leftWrist.x;
        console.log("Left wrist's coordinate is" + left_wrist);
        right_wrist=results[0].pose.rightWrist.x;
        console.log("Right wrists's coordinate is"+ right_wrist);
        difference=floor(left_wrist-right_wrist);
        console.log("the difference is " + difference);
        document.getElementById("font_size").innerHTML="The font size is "+ difference + "px"
    }
}
