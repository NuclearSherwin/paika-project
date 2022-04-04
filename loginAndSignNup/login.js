const $ = document.querySelector.bind(document);

$(".login-form .message a").onclick = function() {
    $(".form .register-form").style.display = "block";
    $(".form .login-form").style.display = "none";
};

$(".register-form .message a").onclick = function() {
    $(".form .login-form").style.display = "block";
    $(".form .register-form").style.display = "none";
};