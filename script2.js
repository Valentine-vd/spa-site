document.getElementById("appointment-name"); addEventListener("input", validateName);
document.getElementById("appointment-email"); addEventListener("input", validateEmail);
document.getElementById("appointment-date"); addEventListener("input", validateDate);
document.getElementById("appointment-service"); addEventListener("input", validateService)

function validateName(){
   let name = document.getElementById("appointment-name").value.trim();
    let error = document.getElementById("appointment-name-error");

    if(name === ""){
        error.innerText = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(name)){
        error.innerText = "Name can only contain letters";
    } else {
        error.innerText = "";
    }                                                                                                          
}

function validateEmail() {
    let email = document.getElementById("appointment-email").value.trim();
    let error = document.getElementById("appointment-email-error");

    if(email === ""){
        error.innerText = "Email is required";
    } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)){
        error.innerText = "invalid email format"
    } else {
        error.innerText = "";
    }
}

function validateDate() {
    let date = document.getElementById("appointment-date").value.trim();
    let error = document.getElementById("appointment-date-error");
    
    let selectedDate = new Date(date);
    let today = new Date();
    
    today.setHours(0,0,0,0);


    if (date === ""){
        error.innerText = "please selcect a date";
    } else if(selectedDate < today){
        error.innerText = "cannot select past date";
    } else{
        error.innerText = "";
    } 
}

function validateService(){
    let service = document.getElementById("appointment-service").value.trim();
    let error = document.getElementById("appointment-service-error");

    if(service === ""){
      error.innerText = "Please select a service";
    } else {
        error.innerText = "";
    }

}