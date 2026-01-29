

//   Show/Hide  Password
 let togglePassword = document.getElementById("togglePassword");
let password = document.getElementById("password");

 if(togglePassword&&password){
 togglePassword.addEventListener("click",function(){
     if (password.type === "password"){
         password.type = "text";
        togglePassword.innerText="Hide";
    }else{
         password.type = "password";
         togglePassword.innerText="Show";
    }
 });
 }

 let toggleConfirmation = document.getElementById("toggleConfirmation");
 let confirmPassword = document.getElementById("confirmPassword");

 if(toggleConfirmation&&confirmPassword){
 toggleConfirmation.addEventListener("click",function(){
     if (confirmPassword.type === "password"){
        confirmPassword.type = "text";
        toggleConfirmation.innerText="Hide";
    }else{
        confirmPassword.type = "password";
         toggleConfirmation.innerText="Show";
     }

 });

 }
            
        //   SIGNUP PAGE

let users = JSON.parse(localStorage.getItem("users"))||[] 
          let currentUser=null; 

function signup(){
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        console.log(email);
        
        const phone = document.getElementById("phone").value;
        const city = document.getElementById("city").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if(!name||!email||!phone||!city||!password||!confirmPassword){
            alert("All fields are mandatory");
            return;
        }

         if (!email.includes("@")||!email.includes(".")){
             alert("Invalid Email Format");
            return;
        }
         if (phone.length!==10){
            alert("Enter 10 digit phonenumber");
            return;
         }
        if(!isNaN(city)){
             alert("city should contain only alphabets");
             return;
         }

         if(password.length<6){
            alert("password must be atleast 6 Characters");
            return;
            
         }
         if(password !== confirmPassword){
             alert("password do not match");
            return;
        }


        let x = users.find((user)=>{
            return user.email==email;
        });
        if (x){
            alert("Already registered with this email");
            return;
        }

        let newUser = {
            id:Date.now(),
            name:name,
             email:email,
            password:password
         };
         users.push(newUser);
         updateStorage();
         alert("signup Sucessfully")

}

function updateStorage(){
    localStorage.setItem("users",JSON.stringify(users));
    window.location.href="signin.html"
}

       
// SIGNIN PAGE

function signin(){
    const email = document.getElementById("email").value;
    const password=document.getElementById("password").value;

    if(!email||!password){
        return alert("fill all fields")
    }
    let x = users.find((user)=>{
        return user.email==email
    })
    if (!x){
        alert ("user not signup");
        return; 
    }
    let isValid = x.password == password
    if(!isValid){
        return alert("Invalid credentials")
    }

    currentUser = x
    localStorage.setItem('currentUser',JSON.stringify(currentUser));
    window.location.href ="tourist.html"
}

function check(){
    let isLogged = JSON.Parse(localStorage.getItem('currentUser'));
    if(!isLogged){
        window.location.href= "signin.html"
    }
 }

//  logout

function logout(){
    localStorage.removeItem("currentUser")
    window.location.href="signin.html"
}