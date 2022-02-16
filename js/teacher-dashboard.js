// function getData(){
//     $.get("http://localhost:1337/api/students",(data,status)=>{
//         console.log(data);
//     });
// }
var getUser = JSON.parse( localStorage.getItem('login-details'));

console.log(getUser);
$.ajax({
          method: "GET",
          headers: {
                      Authorization:
                        `Bearer ${getUser.jwt}`,
                    },
          url: `http://localhost:1337/users/${getUser.user.id}`
          
        }).done(function (msg) {
          var students , teacher;
          students = msg
          console.log(msg);
     
            $.ajax({
              method: "GET",
              url: `http://localhost:1337/courses?teacher.id=${msg.teacher.id}`
              
            }).done((data) => {console.log("salam" ,data);
              
            data.map((el) => {
              $(`#teacher-dashboard-table`).append(
                
                `
                <tr>
                <td>${el.id}</td>
                <td>${el.courseName}</td>
                <td>${el.course_teacher.id}</td>
                <td>${el.course_teacher.teacher.teacherName}</td>
                <td>
                    <button class="admin-dashboard-button-2ndsec">
                        View Course Details
                    </button>
  
                </td>
            </tr>
            `)
            })
              }
              )
           
         
                    
        })


        