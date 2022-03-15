function start() {
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    My_Model = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FlV9J6O7_/model.json',modelReady);
}
function modelReady() {
    My_Model.classify(gotResults);
}
function gotResults(error,results){
    if(error){console.log(error);} 
    else{
        console.log(results);
        document.getElementById("soundName").innerHTML="I can hear "+ results[0].label;
        document.getElementById("Acc").innerHTML="Accuracy "+ (results[0].confidence*100).toFixed(2)+" %";
        im1=document.getElementById("a1img");
        im2=document.getElementById("a2img");
        im3=document.getElementById("a3img");
        if(results[0].label=="Dog"){
            im1.src="D.gif";
            im2.src="C.png";
            im3.src="BG.PNG";
        }
        else if(results[0].label=="Cat"){
            im1.src="D.png";
            im2.src="C.gif";
            im3.src="BG.PNG";
        }
        else{
            im1.src="D.png";
            im2.src="C.png";
            im3.src="BG.gif";
        }
    }
}