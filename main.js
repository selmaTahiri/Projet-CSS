
const loginsubmit = document.getElementById("submit")
const loginerror = document.getElementById("error")

loginsubmit.addEventListener("click", function login(e){
e.preventDefault()

    const loginform = document.getElementById("email").value
    const loginpassword = document.getElementById("password").value
    console.log(loginform)
    console.log(loginpassword)

    if (loginform=="Selma123@gmail.com" && loginpassword=="selma123") {
        alert("hello")
    
     } else {

        loginerror.innerHTML="<p>email invalid</p>"
     }
    
} )

