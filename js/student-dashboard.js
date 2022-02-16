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
          console.log(msg.courses);
          msg.courses.map((el) => {
            $(`#student-table-details`).append(
              
              `
              <tr>
              <td>${el.id}</td>
              <td>${el.courseName}</td>
              <td>${el.course_teacher.id}</td>
              <td>${el.course_teacher.teacher.teacherName}</td>
              <td>
              <a href="../course_detail.html" target="_blank">   <button class="admin-dashboard-button-2ndsec">
                View Course Details
                  </button> </a> 

              </td>
          </tr>
          `)
          })      
          
          $(`#student-user`).innerHtml(`${user.username}`)
                    
        })


        