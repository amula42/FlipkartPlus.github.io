function validateform(){  
		const namea=document.getElementById('name').value; 
		      emailid=document.getElementById('email').value;
		      numbera=document.getElementById('number').value;
		      messagea=document.getElementById('message').value;
		      regex = /^[A-Za-z ]{5,25}$/;
		      numb = /^[6789][0-9]{9}$/;
		      mail = /[A-Za-z._]{3,}[0-9]{1,3}@[gmail]{5}[.]{1}[A-Za-z.]{2,6}/;

		if (regex.test(namea)) {
			document.getElementById('lbauser').innerHTML = "  ";
		}else {
			document.getElementById('lbauser').innerHTML = " **invalid Name ";
			return false;
		}

		if (mail.test(emailid)) {
			document.getElementById('lbbuser').innerHTML = "  ";
		}else {
			document.getElementById('lbbuser').innerHTML = " **invalid Gmail ";
			return false;
		}

		if (numb.test(numbera)) {
			document.getElementById('lbcuser').innerHTML = "  ";
		}else {
			document.getElementById('lbcuser').innerHTML = " **invalid Phone Number ";
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




		// if (emailid==null || emailid=="" ){  
		//   // alert("Name can't be blank");
		//   document.getElementById('lbbuser').innerHTML = " **Email can't be blank ";
		//   return false;  
		// }
		// if (emailid.indexOf('@') <= 0){  
		//   // alert("Name can't be blank");
		//   document.getElementById('lbbuser').innerHTML = " **@invalid position ";
		//   return false;  
		// }
		// if ((emailid.charAt(emailid.length-4) != '.') && (emailid.charAt(emailid.length-3) != '.')){  
		//   // alert("Name can't be blank");
		//   document.getElementById('lbbuser').innerHTML = " **.invalid position ";
		//   return false;  
		// }

		


		// if (numbera==null || numbera=="" ){  
		//   // alert("Name can't be blank");
		//   document.getElementById('lbcuser').innerHTML = " **Phone Number can't be blank ";
		//   return false;  
		// }
		// if (isNaN(numbera)){  
		//   // alert("Name can't be blank");
		//   document.getElementById('lbcuser').innerHTML = " **User must write digits only ";
		//   return false;  
		// }
		// if ( numbera.length != 10 ){  
		//   // alert("Name can't be blank");
		//   document.getElementById('lbcuser').innerHTML = " **Phone Number must be 10 digits ";
		//   return false;  
		// }

		alert("Form Submitted Successfully!");
	    return true;
	   

	}