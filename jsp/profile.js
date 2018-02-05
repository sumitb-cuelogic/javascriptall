
 
 var Allentries;
var profileobj;
var userindex;
function accessprofile()
{

    console.log("inside ");

    
     Allentries=JSON.parse(localStorage.getItem("Allentries"));
    var username=localStorage.getItem("username");
    var profileobj;
   
         userindex=searchUser(username,Allentries);


        //alert(userindex.email);
    
        document.getElementById("email").value=Allentries[userindex].email;
        document.getElementById("fname").value=Allentries[userindex].fname;
        document.getElementById("lname").value=Allentries[userindex].lname;
        document.getElementById("address").value=Allentries[userindex].address;
        document.getElementById("image").value=Allentries[userindex].image;
}

function searchUser(username,Allentries){

    for(var i=0;i<Allentries.length;i++)
    {
            if(username==Allentries[i].email)
            {
                profileobj=Allentries[i].email;
                return i;
            }
    }
    return false;
}

function makeEditable(event)
{

    event.preventDefault();
    document.getElementById("fname").readOnly=false;
    document.getElementById("lname").readOnly=false;
    document.getElementById("address").readOnly=false;
    document.getElementById("image").readOnly=false;
}

function stopEditable()
{
 
    document.getElementById("fname").readOnly=true;
    document.getElementById("lname").readOnly=true;
    document.getElementById("address").readOnly=true;
    document.getElementById("image").readOnly=true;

}

function updateInfo(event)
{

    event.preventDefault();

        Allentries[userindex].email=document.getElementById("email").value;
        Allentries[userindex].fname=document.getElementById("fname").value;
        Allentries[userindex].lname=document.getElementById("lname").value;
        Allentries[userindex].address=document.getElementById("address").value;
        Allentries[userindex].image=document.getElementById("image").value;
        
        localStorage.setItem("Allentries",JSON.stringify(Allentries[userindex]));

            alert("save changes succefully");
        stopEditable();

}