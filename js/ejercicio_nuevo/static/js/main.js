console.log("page loaded...");

function liked(element) {
    const span = element.querySelector("span");
    let like = paeseInt(span.innerTesxt);
    like++;
    span.innerText = like;
}

function login(element){
    if(element.innetText == "Login"){
        element.innetText = "Logout";

    }else{
        element.innetText = "Login";
    }
}
function hide(el){
    el.remove();
}