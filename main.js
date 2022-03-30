nose_x= 0;
nose_y= 0;

function preload()
{
clown_nose= loadImage('https://i.postimg.cc/gjtcTgRs/image.png');
}


function setup()
{
canvas=createCanvas(300, 300);
canvas.center();



video = createCapture(VIDEO);
video.size(300, 300);
video.hide();



poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
nose_x= results[0].pose.nose.x-15;
nose_y =results[0].pose.nose.y-15;


console.log("Nose x="+ nose_x);
console.log("Nose y="+ nose_y);
}
}




function modelLoaded()
{
console.log('poseNet Model is Loaded');
}


function draw()
{
image(video,0,0,300,300);
fill(0, 255, 0);
stroke(0, 255, 0);
image(clown_nose, nose_x, nose_y, 30, 30);
}

function takesnapshot()
{
save('MyFilterImage.png');
}