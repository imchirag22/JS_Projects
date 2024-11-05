let eyeicon = document.getElementById("hide-pass");
let password = document.getElementById("password");
let validationMessage = document.getElementById("validation-message");

// Function to check if the password contains both uppercase and lowercase letters
function validatePassword() {
    let passValue = password.value;
    let hasUppercase = /[A-Z]/.test(passValue); 
    let hasLowercase = /[a-z]/.test(passValue); 
    
    if (!hasUppercase || !hasLowercase) {
        validationMessage.textContent = "Password must contain both uppercase and lowercase letters.";
        validationMessage.classList.add("invalid");
        validationMessage.classList.remove("valid");
    } else {
        validationMessage.textContent = "Password meets the requirements.";
        validationMessage.classList.add("valid");
        validationMessage.classList.remove("invalid");
    }
}
password.addEventListener('keyup', validatePassword);

eyeicon.onclick = function() {
    if (password.type === "password") {
        password.type = "text";        
        eyeicon.src = "Show.jfif";     
    } else {
        password.type = "password";    
        eyeicon.src = "hide.jfif";     
    }
}

