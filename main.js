Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("captured_image").innerHTML='<img id="result" src="'+data_uri+'"/>';
    });

} 
console.log("ml5 version",ml5.version);
comparision= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cSDvEz8XX/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
function anaylize(){
    img=document.getElementById("result");
    comparision.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);

    }
}