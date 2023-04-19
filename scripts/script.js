//Counter to get Login Status
let counter =0

// Sends contact us form submission 
function submitForm(){
    document.getElementById("form_outcome").innerHTML="Form has been sent succssfully!";
}

// On Login Button press check if counter is devisable by 2, if so log user in, if not log out.
function login(){
                
    var email = document.forms["login_form"]["user_email"].value
    var password = document.forms["login_form"]["user_password"].value
    if(counter <4){
        if(email==""){
            alert("Email must not be blank");
            return;
        }else{
            if(password == 0){
                alert("Password must not be blank")
                return;
            }else{
                if(email=="daniel@outlook.com"&&password=="Password123"){
                    alert("Logged in")
                }else{
                    alert("Username or password not correct!")
                    counter++
                }
            }            
        }
    }else{
        alert("Too many incorrect attempts!")
    }    
}

function submit_event(){
    var title = document.forms["event"]["event_title"].value;
    var date = document.forms["event"]["event_date"].value;
    if(title==""){
        alert("An event must have a title");
    }else{
        if(date.length == 0){
            alert("An event must have a date!")
        }else{
            alert("Event submitted! The society will contact you soon!");
        }            
    }
}




function playGonk(){
    var audio = new Audio("sounds/justanothergenericsfx.ogg");
    //alert("Playing Gonk")
    audio.play();
    //alert("Gonk Played")
}


