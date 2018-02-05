

var flag=false;
var serchtype;

function displaytask()
{

  if(localStorage.getItem("username")!='null')
  {

    
          var allentries= JSON.parse(localStorage.getItem("Allentries"));
          var username=localStorage.getItem("username");

            var userindex=searchUser(username,allentries);
            // window.alert(userindex);
            // alert(JSON.stringify(allentries[userindex].todo[0]));
            var todolist= allentries[userindex].todo;
            //alert(todolist[0].tasktext);
            if(localStorage.getItem("flag")!='null')
            {
              //alert(flag);
              
              if(todolist.length!=undefined)
              {  
                  var searchT=localStorage.getItem("searchtype");
                    for(i=0;i<todolist.length;i++)
                    {
                      obj=todolist[i];
                     // alert(obj.categary+' = '+localStorage.getItem("searchtype"));
                      if(obj.categary==searchT)
                      {
                        var node = document.createElement("tr");
                        node.setAttribute("id",i);
                        document.getElementById("tabletask").appendChild(node);
                        document.getElementById(i).innerHTML="<td>"+(i+1)+"<input id='selecttask"+i+"'+ type='checkbox'+ >"+"<td>"+obj.tasktext+"</td>"+"<td>"+obj.categary+
                                                              "</td>"+"<td>"+obj.reminderdate+"</td>"+"<td>"+obj.status+"</td>";
                      }
                      else if(obj.status==searchT)
                      {
                        var node = document.createElement("tr");
                        node.setAttribute("id",i);
                        document.getElementById("tabletask").appendChild(node);
                        document.getElementById(i).innerHTML="<td>"+(i+1)+"<input id='selecttask"+i+"'+ type='checkbox'+ >"+"<td>"+obj.tasktext+"</td>"+"<td>"+obj.categary+
                                                              "</td>"+"<td>"+obj.reminderdate+"</td>"+"<td>"+obj.status+"</td>";
                      }
                      else{

                      }
                      
                    }
                    localStorage.setItem("flag",'null');
                    localStorage.setItem("searchtype",'null');
                }  
                
            }
            else if (todolist.length!=undefined)
            {
                  for(i=0;i<todolist.length;i++)
                  {
                    obj=todolist[i];
                    var node = document.createElement("tr");
                    node.setAttribute("id",i);
                    document.getElementById("tabletask").appendChild(node);
                    document.getElementById(i).innerHTML="<td>"+"<input id='selecttask"+i+"'+ type='checkbox'+ >"+(i+1)+"<td>"+obj.tasktext+"</td>"+"<td>"+obj.categary+
                                                          "</td>"+"<td>"+obj.reminderdate+"</td>"+"<td>"+obj.status+"</td>";
                  }
             }        // alert(JSON.stringify(todolist));  
              }
              else
              {
                 // location.href="./signup.html";
              }
}

function done(){


       var allentries=JSON.parse(localStorage.getItem("Allentries"));
        var username=localStorage.getItem("username");
        var userindex=searchUser(username,allentries);
       
        var todoobj=allentries[userindex].todo;
        var c=0;
       //alert(document.getElementById("selecttask"+c).checked);
      //   alert(todoobj[0].status);
      for(i=0;i<todoobj.length;i++)
      {
          if(document.getElementById("selecttask"+i).checked)
          {
                todoobj[i].status="done";
                var x=document.getElementById("selecttask"+i);
                  x.setAttribute("disabled","true");
          }
      }
        localStorage.setItem("Allentries",JSON.stringify(allentries));

        displaytask();
    }

    function deletetask(){

      var allentries=JSON.parse(localStorage.getItem("Allentries"));
      var username=localStorage.getItem("username");
      var userindex=searchUser(username,allentries);

        var todoobj=allentries[userindex].todo;

       
         var list=[];
    
    for (i = 0; i < todoobj.length; i++) {
        if (document.getElementById("selecttask" + i).checked == true) {
          list.push(true);
        }
        else
            list.push(false);
    }
     
     for (i = 0; i < todoobj.length; i++) {

         if(list[i]===true){
             todoobj.splice(i, 1);
             list.splice(i, 1);
              i=-1;
         }
      }
        localStorage.setItem("Allentries",JSON.stringify(allentries));

       location.reload();

    }


    function logout()
    {
        localStorage.setItem("username",null);
    }

   function showSearchList()
   {
      document.getElementById("selectsearch").style.display="inline";
   }

   function searchTask()
   {

          if(document.getElementById("selectsearch").value=='private')
          {
             flag=true;
             localStorage.setItem("flag",flag);
             searchtype='private';
             localStorage.setItem("searchtype",searchtype);
              location.reload();
          }
          else if(document.getElementById("selectsearch").value=='public')
          {

             flag=true;
             localStorage.setItem("flag",flag);
             searchtype='public';
             localStorage.setItem("searchtype",searchtype);
              location.reload();
          }
          else if(document.getElementById("selectsearch").value=='done')
          {

            flag=true;
            localStorage.setItem("flag",flag);
            searchtype='done';
            localStorage.setItem("searchtype",searchtype);
            location.reload();

          }
          else if(document.getElementById("selectsearch").value=='doing')
          {
            flag=true;
            localStorage.setItem("flag",flag);
            searchtype='doing';
            localStorage.setItem("searchtype",searchtype);
            location.reload();

          }
   }
   