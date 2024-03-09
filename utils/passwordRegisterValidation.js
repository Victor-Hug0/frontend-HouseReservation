function validateForm(){
    var password = document.getElementById('passwordInput').value;
    var confirmPassword = document.getElementById('confirmPasswordInput').value;
    var passwordError = document.getElementById('passwordError');

    // Limpa a mensagem de erro antes de realizar a validação
    passwordError.textContent = "";

    if (password !== confirmPassword) {
        document.getElementById('passwordInput').value = "";
        document.getElementById('confirmPasswordInput').value = "";
        passwordError.textContent = "Passwords do not match. Try again!";
        return;
    }


    document.getElementById('registrationForm').submit();
}