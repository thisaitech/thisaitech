const box = document.querySelector('.box');
    const container = document.querySelector('.container');
    const head = document.querySelector('#head');
    const man = document.querySelector('#man');
    const youtube = document.querySelector('#youtube');
    const form = document.querySelector('#form');

    container.addEventListener("mousemove" , (e)=>{
        let horizontal = (window.innerWidth / 2 - e.pageX) / 25;
        let vertical = (window.innerHeight / 2 - e.pageY) / 25;
        box.style.transform = `rotateX(${vertical}deg) rotateY(${horizontal}deg)`;
    });


    container.addEventListener("mouseenter" , (e)=>{
        box.style.transition= ".1s";
        head.style.transform = "translateZ(120px)";
        man.style.transform = "translateZ(150px)";
        youtube.style.transform = "translateZ(130px)";
        form.style.transform = "translateZ(100px)";
    });


    container.addEventListener("mouseleave" , (e)=>{
        box.style.transition= ".1s";
        box.style.transform = "rotateY(0deg) rotateX(0deg)";
        head.style.transform = "translateZ(0px)";
        man.style.transform = "translateZ(0px)";
        youtube.style.transform = "translateZ(0px)";
        form.style.transform = "translateZ(0px)";
    });

    
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