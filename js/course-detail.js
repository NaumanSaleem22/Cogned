var full_url = document.URL; // Get current url
var url_array = full_url.split('/') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)
var getUser = JSON.parse( localStorage.getItem('login-details'));
var id = last_segment.split('?')[last_segment.split('?').length-1]; 

$.ajax({
    method: "GET",
    headers: {
                Authorization:
                  `Bearer ${getUser.jwt}`,
              },
    url: `http://localhost:1337/courses/${id}`
    
  }).done(function (msg) {

    console.log(msg);
    document.getElementById('course-title').innerHTML = msg.courseName;

  })