
var select = document.getElementById("selectNumber");
var options = ["10th", "12th", "Undergraduate", "graduate", "Postgraduate"];
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
};
var select = document.getElementById("selectNumber2");
var options = ["fresher", "2Years", "5years", "10years", "more"];
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
};
var check= document.getElementById("shubhi");
CoadingLanguage=[{LanguageName:"C/C++",IsEnabled:true},{LanguageName:"Java",IsEnabled:true},{LanguageName:"python",IsEnabled:false},{LanguageName:"C#",IsEnabled:false},{LanguageName:"Javascript",IsEnabled:false}];

	for(var i=0;i<CoadingLanguage.length;i++)
		{
		// (CoadingLanguage[i].LanguageName);
		var x = document.createElement("INPUT");
		x.setAttribute("type", "checkbox");
		var label = document.createElement('label'); 
		label.htmlFor = CoadingLanguage[i].LanguageName;
		label.appendChild(document.createTextNode(CoadingLanguage[i].LanguageName)); 
		
		if(CoadingLanguage[i].IsEnabled==true)
		{
			x.checked=true
			document.body.appendChild(x);
			check.appendChild(x);
		}else {
			x.checked=false
			document.body.appendChild(x);
			check.appendChild(x);
		}
			check.appendChild(label);		
			check.appendChild(document.createElement("br"))
	}


  	function myfunction()
{
	var obj={};
	/*console.log("shubhi");
*/
	
	obj.firstname=document.getElementById("firstname").value;
	obj.lastname=document.getElementById("lastname").value;
	obj.emailid=document.getElementById("emailid").value;
	obj.contactnumber=document.getElementById("contactnumber").value;
	obj.Address=document.getElementById("address").value;
	obj.username=document.getElementById("username").value;
	obj.password=document.getElementById("password").value;
	obj.gender=document.getElementById("gender").value;
	obj.qualification=document.getElementById("selectNumber").value;
	obj.experience=document.getElementById("selectNumber2").value;
	console.log(obj.firstname);
	console.log(obj.lastname);
	console.log(obj.emailid);
	console.log(obj.contactnumber);
	console.log(obj.address);
	console.log(obj.username);
	console.log(obj.password);
	console.log(obj.gender);
	console.log(obj.qualification);
	console.log(obj.experience);
};


	




