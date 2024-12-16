const firstName = document.getElementById('name');
const firstNameError = document.getElementById('name-error');
const lastName = document.getElementById('lastname');
const lastNameError = document.getElementById('lastname-error');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const password = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const form = document.getElementById('signup-form');

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;



form.addEventListener('submit', (g) => {
    let hasError = false;

    const footerRight = document.querySelector('.footerRight');
    footerRight.style.height = '474px'; 
    footerRight.style.width = '540px';
    footerRight.classList.add('expanded');  
    footerRight.classList.remove('expanded');

    if (firstName.value === '' || firstName.value == null) {
        g.preventDefault();
        firstName.placeholder= '';
        firstNameError.textContent = "First Name cannot be empty";
        firstName.style.borderColor = "#FF7979";
        firstName.style.background = "url('./Group\\ 11.png') no-repeat right";
        firstName.style.backgroundPositionX = "95%";
        firstNameError.classList.add('active');
        hasError = true;
    } else {
        firstNameError.textContent = "";
        firstName.style.borderColor = "";
        firstName.style.background = "";
        firstNameError.classList.remove('active');
    }

    if (lastName.value === '' || lastName.value == null) {
        g.preventDefault();
        lastName.placeholder='';
        lastNameError.textContent = "Last Name cannot be empty";
        lastName.style.borderColor = "#FF7979";
        lastName.style.background = "url('./Group\\ 11.png') no-repeat right";
        lastName.style.backgroundPositionX = "95%";
        lastNameError.classList.add('active');
        hasError = true;
    } else {
        lastNameError.textContent = "";
        lastName.style.borderColor = "";
        lastName.style.background = "";
        lastNameError.classList.remove('active');
    }

    if (email.value === '' || email.value == null) {
        g.preventDefault();
        emailError.textContent = "Email cannot be empty";
        email.style.borderColor = "#FF7979";
        email.style.background = "url('./Group\\ 11.png') no-repeat right";
        email.style.backgroundPositionX = "95%";
        email.placeholder = "email@example/com";
        emailError.classList.add('active');
        hasError = true;
    } else if (!emailPattern.test(email.value.trim())) {
        g.preventDefault();
        emailError.textContent = "Looks like this is not an email";
        email.style.borderColor = "#FF7979";
        email.style.background = "url('./Group\\ 11.png') no-repeat right";
        email.style.backgroundPositionX = "95%";
        email.placeholder = "email@example/com";
        emailError.classList.add('active');
        hasError = true;
    } else {
        emailError.textContent = "";
        email.style.borderColor = "";
        email.style.background = "";
        emailError.classList.remove('active');
    }

    if (password.value === '' || password.value == null) {
        g.preventDefault();
        password.placeholder ='';
        passwordError.textContent = "Password cannot be empty";
        password.style.borderColor = "#FF7979";
        password.style.background = "url('./Group\\ 11.png') no-repeat right";
        password.style.backgroundPositionX = "95%";
        passwordError.classList.add('active');
        hasError = true;
    } else if (!passwordPattern.test(password.value)) {
        g.preventDefault();
        passwordError.textContent = "Password must be at least 6 characters long and include a letter and a number";
        password.style.borderColor = "#FF7979";
        password.style.background = "url('./Group\\ 11.png') no-repeat right";
        password.style.backgroundPositionX = "95%";
        passwordError.classList.add('active');
        hasError = true;
    } else {
        passwordError.textContent = "";
        password.style.borderColor = "";
        password.style.background = "";
        passwordError.classList.remove('active');
    }

    if (hasError) {
        footerRight.style.height = '562px'; 
        footerRight.style.width = '540px';
        g.preventDefault(); 
    }

});