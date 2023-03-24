//Counter to get Login Status
var counter = 2;

// Sends contact us form submission 
function submitForm(){
    document.getElementById("form_outcome").innerHTML="Form has been sent succssfully!";
}

// On Login Button press check if counter is devisable by 2, if so log user in, if not log out.
function login(){
    if(counter % 2==0){
        alert("You have been logged in!");
    }
    else{
        alert('you have been logged out!');
    }
    counter++;
}


