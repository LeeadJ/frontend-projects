document.getElementById('signUpForm').addEventListener('submit', function(event) {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    
    if(password !== confirmPassword){
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('confirmPassword').style.borderColor = 'red';
        event.preventDefault(); // Prevent form submission
    }
})