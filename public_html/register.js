
function myFunction()
{
var checkflag=0;
var SignumID=document.getElementById('SignumID').value;
var Name=document.getElementById('Name').value;
var MobileNo=document.getElementById('MobileNo').value;
var EmailID=document.getElementById('EmailID').value;
//var pass=document.getElementById('pass').value;
//alert('sig');
if(window.XMLHttpRequest)
{
xmlHttp_reg=new XMLHttpRequest();
}
else
{
xmlHttp_reg=new ActiveXObject("Microsoft.XMLHTTP");
}

xmlHttp_reg.onreadystatechange=function()
{

if (xmlHttp_reg.readyState === 4 || xmlHttp_reg.readyState=== "complete")
//if (xmlHttp_reg.readyState === 4 || xmlHttp_reg.status=== "complete")
{
//
xmlDoc_reg = xmlHttp_reg.responseXML;
alert('xmlDoc_reg');
var flag = xmlDoc_reg.getElementsByTagName("flag"); 
checkflag = flag[0].childNodes[0].nodeValue;

alert('checkflag');
if (checkflag === '1')
{
alert ("User successfully registered, Check your mail for password!");
}
else 
{alert ("User already registered! or incorrect SignumID/EmailID");}
}
}
alert("http://10.184.20.93/UM/USERMANAGEMENT/register.php?SignumID=" + SignumID + "&Name=" + Name + "&MobileNo=" + MobileNo + "&EmailID=" + EmailID);	  			                                           
 xmlHttp_reg.open("POST","http://10.184.20.93/um/UserManagement/register1.php?SignumID=" + SignumID + "&Name=" + Name + "&MobileNo=" + MobileNo + "&EmailID=" + EmailID,false);
 xmlHttp_reg.send();
 }


