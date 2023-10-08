var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}



function sendMail() {
  
    var params = {
        name: document.getElementById("Name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }
        emailjs.send("service_x4rnorv", "template_3e02295", params)
        .then(function (res)  {
            alert("success!" +res.status);
    
        }) 
    }


    function openNav() {
        document.getElementById("navbar").style.left = "0%" ;
      }
      
      function closeNav() {
        document.getElementById("navbar").style.left = "-100%";
      }


      