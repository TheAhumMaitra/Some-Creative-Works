function navbutton() {
    Magic= prompt("Thanks (Enter secret code)");
    if (Magic=="Wingardium Leviosa") {
        document.getElementById("navb").innerHTML= "Magic just happen";
    }
    else{
        alert("Click the button again (Wrong code)")
    }
}