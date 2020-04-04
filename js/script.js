 'use strict';
  
  let head = document.head,
      link = document.createElement('link');
  link.rel = 'stylesheet';
  
  if (localStorage.getItem('themeStyle') === 'dark') {
    link.href = "css/dark.css"; 
    document.getElementById('switch-1').setAttribute('checked', true); 
  }

  else {
    link.href = "css/light.css"; 
  }
  head.appendChild(link); 

 
  document.getElementById('switch-1').addEventListener('change', ev => {
    let btn = ev.target;
    alert("event has happened");
    
    if (btn.checked) {
      link.href = "css/dark.css"; 
    }
    else {
      link.href = "css/light.css"; 
    }
  });
//$(".five li ul").hide();
//$(".five li:has('.submenu')").hover(
//  function(){
// $(".five li ul").stop().fadeToggle(300);}
//);

var email_correct;
var hair_correct;
var time_correct;
function check_email(){
    var adress = document.getElementById("comment_email").value;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        
    if(re.test(adress)){
    document.getElementById("email_flag").innerHTML = "Nice";
        email_correct = true;
        activate_submit();
    } else {
        document.getElementById("email_flag").innerHTML = "Bad";
        email_correct = false;
       }
    }

    function check_hair(){
    var hair = document.getElementById("comment_hair").value;
    var re = /^[а-яіїєґА-ЯІЇЄҐ'`a-zA-Z]{0,20}$/;
                        
        if(re.test(hair))
        {
            document.getElementById("hair_flag").innerHTML = "Nice";
            hair_correct = true;
            activate_submit();
        } else {
            document.getElementById("hair_flag").innerHTML = "Bad";
             hair_correct = false;
    }
}

    function check_time(){
        var time = document.getElementById("comment_time").value;
        var re = /^[0-9]{2}\:[0-9]{2}\/[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/i;
                        
            if(re.test(time)){
                document.getElementById("time_flag").innerHTML = "Nice";
                time_correct = true;
                activate_submit();
        } else {
                document.getElementById("time_flag").innerHTML = "Bad";
                time_correct = false;
            }
        }

   function validate(){
   var x=document.forms["form"]["name"].value;
   var y=document.forms["form"]["email"].value;
   if (x.length==0){
      document.getElementById("namef").innerHTML="*дане поле обов'язкове для заповнення";
      return false;
   }
   if (y.length==0){
      document.getElementById("emailf").innerHTML="*дане поле обов'язкове для заповненн";
      return false;
   }
   dog=y.indexOf("@");
   poin=y.indexOf(".");
   mail=y.indexOf("gmail");
   com=y.indexOf("com");
   if (dog<1 || poin <1 || mail<4 || com <3){
      document.getElementById("emailf").innerHTML="*email введено не вірно";
      return false;
   }
}
