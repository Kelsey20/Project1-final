// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  });
  
  function validateForm() { 
          var firstname = document.forms["Regform"]["first_name_field"]; 
          var lastname = document.forms["Regform"]["last_name_field"]; 
          var phone = document.forms["Regform"]["phone_field"]; 
          var email = document.forms["Regform"]["email_field"];
          var type = document.forms["Regform"]["type_field"]; 
    
          if (firstname.value == "") { 
              window.alert("Please enter your first name."); 
          } 
          
          else if (lastname.value == "") { 
              window.alert("Please enter your last name."); 
          }
          else if (phone.value == "") { 
              window.alert("Please enter your telephone number."); 
          } 
          else if (email.value == "") { 
              window.alert("Please enter a valid e-mail address."); 
          }   
          else if (type.value == "") { 
              window.alert("Please enter the type of animal you want to adopt.");
          } 
          else
          {
            window.alert("You application has been submitted, thanks for your participate!");
          }
  }
  
  setTimeout(myFunction, 1000);
  
  function myFunction() {
    document.getElementById("reg").innerHTML = "Start your registration right now！";
  }