window.onload = function(){

    var user = JSON.parse(localStorage.getItem('login-details'));
    console.log(user)

    // if(user && user.user.role.type === 'authenticated'){
    //     window.location.href = './admin/admin-orders.html'
    // } 

    
     
    $(function(){

        // let username;
        // let email;
        // let registration;
        // let gender;
        // let password;
        // let confirmpassword;
        
        $("#signup").submit(function(e){
            e.preventDefault();
            console.log("This")
            
            var userName = $("#signup-username").val();
            var Email = $("#signup-email").val();
            var Registration = $("#signup-registration").val();
            var radio = $("input[name=gender]:checked").val();
            var passWord = $("#signup-password").val();
            var confirmPassword = $("#signup-confirm-password").val()  ;

            
           
            if(passWord != confirmPassword){
                console.log(passWord)
                console.log(confirmPassword)
                alert("password doesnt match")
                return false;
            }
            // if (userName == "") {
            //     alert("Name must be filled out");
            //     return false;
            //   }
            const data1 = {
                email: Email,
             
                username: userName,
                password:passWord,
                confirmpassword:confirmPassword,
                registrationNumber:Registration,
                gender: radio,
                role:"Student",
            confirmed: true
            }

                
           
       
        
            console.log(data1)
    
            $.ajax({    
                method: "POST",
                url: `http://localhost:1337/students-create`,
                dataType:"Json",
                data: data1,
              }).done(function (user) {
                console.log("Data Saved: ");
                console.log(user);
                // window.location.href="./login.html"; 
                // setTimeout(() => {
                //     window.location.href="../index.html"; 
                // }, 2000);
                
                localStorage.setItem('login-details', JSON.stringify(user));
              
                // if(user.user.role.name === 'Admin'){
                //     window.location.href = 'Admin-dashboard1.html'
                // } else if(user.user.role.name === 'vendor'){
                //     window.location.href = './vendor-orders/Vendor-dashboard-light.html'
                // } else if(user.user.role.name === 'customer'){
                //     window.location.href = `./customer-side/hotel-listing.html`
                // }
                
                
              })
              .fail(function(xhr) {
                //Ajax request failed.
                var errorMessage = eval("(" + xhr.responseText + ")");
                $("#error-signup").html(errorMessage.message)
                console.log('Error - ' + errorMessage.message);
                setTimeout(() => {
                    window.alert("Invalid user creation"); 
                })
                
          })
    
        })
    })
}

// ROLES

// {
//     "roles": [
//         {
//             "id": 5,
//             "name": "Admin",
//             "description": "Admin can see teacher and students",
//             "type": "admin",
//             "created_by": null,
//             "updated_by": null,
//             "nb_users": 0
//         },
//         {
//             "id": 1,
//             "name": "Authenticated",
//             "description": "Default role given to authenticated user.",
//             "type": "authenticated",
//             "created_by": null,
//             "updated_by": null,
//             "nb_users": 0
//         },
//         {
//             "id": 2,
//             "name": "Public",
//             "description": "Default role given to unauthenticated user.",
//             "type": "public",
//             "created_by": null,
//             "updated_by": null,
//             "nb_users": 0
//         },
//         {
//             "id": 3,
//             "name": "Student",
//             "description": "Student can see their courses",
//             "type": "student",
//             "created_by": null,
//             "updated_by": null,
//             "nb_users": 2
//         },
//         {
//             "id": 4,
//             "name": "Teacher",
//             "description": "Teacher can see students and courses",
//             "type": "teacher",
//             "created_by": null,
//             "updated_by": null,
//             "nb_users": 1
//         }
//     ]
// }