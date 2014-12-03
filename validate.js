function validateFirstName(field) {
	if (field == "") return "No first name was entered.\n"
	return ""
}

function validateLastName(field){
	if (field == "") return "No last name was entered\n"
	return ""
}

function validateEmail(field){
	if (field == "") return "No email was entered\n"
	else if (!((field.indexOf(".") > 0) && (field.indexOf("@") > 0)) || /[^a-zA-z0-9.@-]/.test(field)) return "The email address is invalid.\n"
	return ""
}

function validateNumber(field){
	if (field == "") return "No phone number entered\n"
	else if ((field.length < 13) || (/[^0-9-()]/).test(field)) return "Invalid phone number entered\n"
	return ""
}

function validateProblem(field){
	if (field == "") return "No description of the problem with your device was entered\n"
	return ""
}


function validateDevice(field){
	if (field == "blank") return "No device was selected.\n"
	return ""
}

function validateCompanyChecks(field){
	var count = 0;
	var checkboxes = document.getElementsByName('comp');
	for (var i = 0; i < checkboxes.length; i++){
		if (checkboxes[i].checked == true){
			count++;
		}
	}
	if (count > 1){
		return "You picked more than 1 company for your device.\n"
	}//if ((count == 0) && (field == "") return "You did not select a checkbox for device company or put a different company in other.\n"
	else if ((count == 0) && (field == "")){
		return "You did not select a checkbox for device company or put a different company in other.\n"
	}
	else{
		return ""
	}
}

function validateRadio(field){
	var radios = document.getElementsByName('radio');
	if (radios[0].checked == true) {
		radios[1].checked = false;
	}
	else if (radios[1].checked == true){
		radios[1].checked = true;
	}
	else{
		return "You didn't select yes/no for whether or not your device powers on.\n"
	}
	return ""
}

