$(document).ready(function() {
    $("#register").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        if (name == '' || email == '' || password == '' || cpassword == '') {
            alert("Please fill all fields");
        } else if ((password.length) < 8) {
            alert("Password should be atleast 8 characters");
        } else if (!(password).match(cpassword)) {
            alert("Passwords don't match");
        } else {
            
            
    //register user to database
            
            
            
}
    })
                         })