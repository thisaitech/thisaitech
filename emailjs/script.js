// function sendMail(){
//     var params ={
//         from_name :document.getElementById("fullname").value,
//         email_id:document.getElementById("email_id").value,
//         message:document.getElementById("message").value

//     }
//     emailjs.send("service_c62bo6j","template_h6okaws",params).then(function(res){
//         alert("Message Successfully send..." + res.status)
//     })
// }



  function sendMail(){
    var  templateParams ={
               
            

       from_name : document.getElementById("fullname").value,
       email_id : document.getElementById("email_id").value,
       message : document.getElementById("message").value  
        
            }
    

    
      emailjs.send('service_c62bo6j', 'template_h6okaws', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert("Successfully Message Send...."+" "+ templateParams.from_name)
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
}