function check(){
    if(document.getElementById("checker").checked){
        document.getElementById("hidside").style.zIndex=1;
    }
    else{
        document.getElementById("hidside").style.zIndex="-1";
    }
    
}
function infopop(){
    if(document.getElementById("profile").checked){
        document.getElementById("info").style.zIndex=1;
    }
    else{
        document.getElementById("info").style.zIndex="-1";
    }
    
}
