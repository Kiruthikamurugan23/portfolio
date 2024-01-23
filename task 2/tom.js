document.getElementById('myform').addEventListener('submit', (event) => {
    event.preventDefault();

    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var emailid = document.getElementById("emailid").value;
    var mobileno = document.getElementById("mobileno").value;
    var city = document.getElementById("city").value;

    document.getElementById("fname-r8").innerHTML = firstname;
    document.getElementById("lname-r8").innerHTML = lastname;
    document.getElementById("email-r8").innerHTML = emailid;
    document.getElementById("mobile-r8").innerHTML = mobileno;
    document.getElementById("city-r8").innerHTML = city;
});
