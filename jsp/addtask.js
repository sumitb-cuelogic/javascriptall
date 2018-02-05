
function showMe () {
    document.getElementById("calender").style.display = "block";
  }

  function addtask(){

    var tasktext=document.getElementById("addtasktext").value;
    var categary;

    if(tasktext !="")
    {
            if( document.getElementById("radio1").checked)
            {
                    categary=document.getElementById("radio1").value="public";
            }
            else{
                categary=document.getElementById("radio2").value="private";
            }
            var reminderdate=document.getElementById("calender").value;
            var status="doing"; 
                var tasktext= new task(tasktext,categary,reminderdate,status);

            var allentries=JSON.parse(localStorage.getItem("Allentries"));
            var username=localStorage.getItem("username");

            var currentuserindex=searchUser(username,allentries);
           // alert(currentuserindex);
           //alert(allentries[currentuserindex]);
            if(allentries[currentuserindex].todo==undefined)
            {
             allentries[currentuserindex].todo=[];
            
            }
            var todolocal=allentries[currentuserindex].todo;
            todolocal.push(tasktext);
          
            //allentries.push(todolocal);
            localStorage.setItem("Allentries",JSON.stringify(allentries));
             location.href="./home.html";
        }
        else{
            alert("please add task");
        }
  }

  function task(tasktext,categary,reminderdate,status){

    this.tasktext=tasktext;
    this.categary=categary;
    this.reminderdate=reminderdate;
    this.status=status;
  }

function searchUser(username,Allentries)
{

    for(var i=0;i<Allentries.length;i++)
    {
            if(username==Allentries[i].email)
            {
                return i;
            }
    }
    return false;
}

