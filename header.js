function toggleProfile(){
    const right = document.getElementById("show-profile");
    const style = window.getComputedStyle(right);
    
    if(style.display === "none"){
        console.log("click");
        right.style.display = "flex";
        setTimeout( ()=>{
            right.style.display = "none";
        } , 3000)
    }
    else{
        right.style.display = "none";
    }
    
}

