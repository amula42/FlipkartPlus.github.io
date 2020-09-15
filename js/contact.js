function validateform(){  
		const namea=document.getElementById('name').value; 
		const emailid=document.getElementById('email').value;
		const numbera=document.getElementById('number').value;
		const messagea=document.getElementById('message').value;

		if (namea==null || namea=="" ){  
		  // alert("Name can't be blank");
		  document.getElementById('lbauser').innerHTML = " **Name can't be blank ";
		  return false;  
		} 
		if ((namea.length <= 4) || (namea.length >= 20) ){  
		  // alert("Name can't be blank");
		  document.getElementById('lbauser').innerHTML = " **Enter minimum 5 characters ";
		  return false;  
		}
		if (!isNaN(namea)){  
		  // alert("Name can't be blank");
		  document.getElementById('lbauser').innerHTML = " **only letters are allowed ";
		  return false;  
		}


		if (emailid==null || emailid=="" ){  
		  // alert("Name can't be blank");
		  document.getElementById('lbbuser').innerHTML = " **Email can't be blank ";
		  return false;  
		}
		if (emailid.indexOf('@') <= 0){  
		  // alert("Name can't be blank");
		  document.getElementById('lbbuser').innerHTML = " **@invalid position ";
		  return false;  
		}
		if ((emailid.charAt(emailid.length-4) != '.') && (emailid.charAt(emailid.length-3) != '.')){  
		  // alert("Name can't be blank");
		  document.getElementById('lbbuser').innerHTML = " **.invalid position ";
		  return false;  
		}


		if (numbera==null || numbera=="" ){  
		  // alert("Name can't be blank");
		  document.getElementById('lbcuser').innerHTML = " **Phone Number can't be blank ";
		  return false;  
		}
		if (isNaN(numbera)){  
		  // alert("Name can't be blank");
		  document.getElementById('lbcuser').innerHTML = " **User must write digits only ";
		  return false;  
		}
		if ( numbera.length != 10 ){  
		  // alert("Name can't be blank");
		  document.getElementById('lbcuser').innerHTML = " **Phone Number must be 10 digits ";
		  return false;  
		}


		if (messagea==null || messagea=="" ){  
		  // alert("Name can't be blank");
		  document.getElementById('lbduser').innerHTML = " **Message can't be blank ";
		  return false;  
		}
		if (messagea.length <= 25 ){  
		  // alert("Name can't be blank");
		  document.getElementById('lbduser').innerHTML = " **Please Enter More Than 25 Characters ";
		  return false;  
		}


		alert("Form Submitted Successfully!");
	    return true;
	   

	}
