song="";
function preload(){
    song=loadSound("song.mp3");
}
    function setup() {
        console.log("setup function is working")
        video = createCapture(VIDEO);
        video.size(500,500); 
        video.position(250,500)
       
    }

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eLff94H7o/model.json', modelReady);
}

function modelReady(){
    classifier.classify(findTone);
    console.log(classifier)
}

function findTone(error, results){

    if(error){
        console.error(error)
    } else {
        console.log(results);

    
        


    img=document.getElementById("image2");

    if(results[0].label == "C")
    {
        document.getElementById("Note").style.color="Blue";
        document.getElementById("Note").innerHTML="Note is: C";
        img.src='c.jpeg';
    }else if(results[0].label == "D")
    {
        document.getElementById("Note").style.color="Blue";
        document.getElementById("Note").innerHTML="Note is: D";
        img.src='d.png';
    }else if(results[0].label == "E"){
        document.getElementById("Note").style.color="Blue";
        document.getElementById("Note").innerHTML="Note is: E";
        img.src='e.png';
    }else  if(results[0].label == "F"){
        document.getElementById("Note").style.color="Blue";
        document.getElementById("Note").innerHTML="Note is: F";
        img.src='f.jpg';
    }else  if(results[0].label == "G"){
        document.getElementById("Note").style.color="Blue";
        document.getElementById("Note").innerHTML="Note is: G";
        img.src='g.jpg';
    }else  if(results[0].label == "Background Noise"){
    
        img.src='x.jpg';
    }

    }
}