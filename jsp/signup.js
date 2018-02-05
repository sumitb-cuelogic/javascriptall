

var username="";
function registerUser()
{
    //event.preventDefault();
   
       // location.href="www.google.com";
        // alert("donechecing");
        var newdata=adddata();
        //window.alert("username is "+newdata.email)
        Allentries=JSON.parse(localStorage.getItem('Allentries'));
            
            if(Allentries==undefined)
            {
                Allentries=[];
            }
             Allentries.push(newdata);
            localStorage.setItem("Allentries",JSON.stringify(Allentries));
            username=newdata.email;
            localStorage.setItem("username",username);
            document.getElementById("formdata").reset();
            location.href="./home.html";
   
}
    function newUserConst(email,fname,lname,address,password,gender,image)
    {
        this.email=email;
        this.fname=fname;
        this.lname=lname;
        this.address=address;
        this.password=password;
        this.gender=gender;
        this.image=image;  
    }
    
    function adddata()
    {
        console.log("inside adddata");
        var email=document.getElementById("email").value;
        var fname=document.getElementById("fname").value;
        var lname=document.getElementById("lname").value;
        var address=document.getElementById("address").value;
        var password=document.getElementById("passwd1").value;
        var gender;
        if(document.getElementById('r1').checked)
        {
                gender=document.getElementById("r1").value;
        }
        else if(document.getElementById('r2').checked){
                gender=document.getElementById("r2").value;
        }
        else{
                 gender=document.getElementById("r3").value;
        }
        var image=document.getElementById("profimg").value;
        
        var newuser= new newUserConst(email,fname,lname,address,password,gender,image);

        return newuser;
    }


function validateForm(event)
{
    //alert(validateEmail());
    event.preventDefault();
      
            
        if( validateEmail() && validatefname() && validatelname() && validatePassword()) 
        {
           registerUser();
        }
        else{

                validateEmail();
                validatefname();
                validatelname(); 
                validatePassword();
        }
                   
}

function validateEmail()
{
        var mail=document.getElementById("email").value;
        if(mail=="")
        {   //alert("empty");
            document.getElementById("emailalert").style.display="inline";
            document.getElementById("emailalert").innerHTML="Empty Email !";
            document.getElementById("email").focus();
            return false;
        }
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            document.getElementById("emailalert").style.display="inline";
            document.getElementById("emailalert").innerHTML="";
           
            return (true);
        }
        else{

            document.getElementById("emailalert").style.display="inline";
            document.getElementById("emailalert").innerHTML="invalid character in Email !";
            document.getElementById("email").focus();
            return false;
        }

}

        function validatefname()
        {
            var fname=document.getElementById("fname").value;
                        if(fname!="")
                        {
                            document.getElementById("fnamealert").style.display="inline";
                            document.getElementById("fnamealert").innerHTML="";
                                return true;
                        }
                        else
                        {
                            document.getElementById("fnamealert").style.display="inline";
                            document.getElementById("fnamealert").innerHTML="empty first name !";
                    
                            return false;
                        }
        }
        function validatelname()
        {
            var lname=document.getElementById("lname").value;
                        if(lname)
                        {
                            document.getElementById("lnamealert").style.display="inline";
                            document.getElementById("lnamealert").innerHTML="";
                                return true;
                        }
                        else
                        {
                            document.getElementById("lnamealert").style.display="inline";
                            document.getElementById("lnamealert").innerHTML="empty last name !";
                            return false;
                        }
        }

            function validatePassword()
                {
                    var pass1=document.getElementById("passwd1").value;
                    var pass2=document.getElementById("passwd2").value;
                   
                    if(pass1 == "" || pass2 == "")
                    {
                        document.getElementById("passmsg").style.display="inline";
                        document.getElementById("passmsg").innerHTML="password is Empty !";
                        return false;
                    }
                    else if(pass1==pass2)
                    {
                         
                         document.getElementById("passmsg").style.display="inline";
                         document.getElementById("passmsg").innerHTML="";
                        return true;
                    }
                    else
                    {
                        document.getElementById("passmsg").style.display="inline";
                        document.getElementById("passmsg").innerHTML="password do not matched !";
                        return false;
                    }
                }

function validateUserLogin(event){

    event.preventDefault();
    var username=document.getElementById("usernamel").value;
    var password=document.getElementById("passwordl").value;
   
        if(username == "" || password == "")
        {
            document.getElementById("loginalert").style.display="block";
            document.getElementById("loginalert").innerHTML=" Empty Email or Password!";    
            return false;
        }
        else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username))
        {
            
            document.getElementById("loginalert").style.display="block";
            document.getElementById("loginalert").innerHTML="";

            var allentries=JSON.parse(localStorage.getItem("Allentries"));
            var index=searchUser(username,allentries);

                        if((username===(allentries[index].email)) && (password===(allentries[index].password)))
                        {
                            //alert("succesfully login");
                            localStorage.setItem("username",username);
                            location.href="./home.html";
                        }
                        else{
                            document.getElementById("loginalert").style.display="block";
                            document.getElementById("loginalert").innerHTML="Email or Password do not matched !"
                        }

            return true;
        }
        else{
            document.getElementById("loginalert").style.display="block";
            document.getElementById("loginalert").innerHTML=" invalid Email !";
        }

    
    }

//    function validateForm(form)
//    {
//                // form.preventDefault();
//             var error=[];
//             //alert("inner");
//             var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         alert(form.email.value);
//                 if(form.email.value=="")
//                 {
//                         error.push("Empty Email !");
//                        //alert("Empty Email !");
//                 }
//                else
//                  if(!re.test(form.email.value))
//                 {
//                     //flag=true;
//                     //email.style.color="red";
//                     error.push("Email contains invalid character !")
//                     //alert("wrong Email !");
//                 }
//                 else{
//                         //flag=false;
//                        email.style.color="green";
//                         alert("right email");
//                  }
//             //      alert("inner");

            
//                  if(error.length > 0)
//                  {
                   
//                      var msg="Error \n\n";

//                      for(var i=0;i<error.length;i++)
//                      {
//                          msg+=error[i];
//                      }

//                      alert(msg);
//                      return false;
//                  }
//                  //alert("Empty");
//  }
