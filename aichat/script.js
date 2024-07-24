document.getElementById("output").value="I'm An english AI chat bot ask me every thing that you need.";

function a(){
    let a=document.getElementById("input").value;
    if(document.getElementById("input").value=="hello"){
        document.getElementById("output").value="hello how are you";
        document.getElementById("input").value="";
    }
    if(document.getElementById("input").value=="i am fine"){
        document.getElementById("output").value="good now you can ask me anything you want";
        document.getElementById("input").value="";
    }
    if(a!=="hello" && a!=="i am fine"){
           
           window.location.href="ttps://www.google.com/search?q="+a;}
    }
   
    
