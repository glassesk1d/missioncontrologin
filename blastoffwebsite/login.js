function checkCreds(){
    console.log("checkCreds is running");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    if(fullName.length > 20 || fullName.length <2){
        document.getElementById("loginStatus").innerHTML = "Invalid full name.";
    } 
    else if(badgeNumb > 999 || badgeNumb < 0){
        document.getElementById("loginStatus").innerHTML = "Invalid badge number.";
    }
    else{
        alert("Hello, " + fullName + "!");
        location.replace("uatspace.html");
    }
}