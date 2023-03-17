
var counter = 2;

function submitForm(){
    document.getElementById("form_outcome").innerHTML="Form has been sent succssfully!";
}

function login(){
    if(counter % 2==0){
        alert("You have been logged in!");
    }
    else{
        alert('you have been logged out!');
    }
    counter++;
}


