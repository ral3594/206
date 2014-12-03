<?php
	$filename ="form.csv";
	$exists = (file_exists($filename));

	$handle = fopen($filename, 'a');
	$msg = "Thank you submitting your request form. We will get back to you with a rough 
	price and time estimate according to the information provided. Thank you for your 
	time, and we hope we can assist you with all of your technical needs\n";//Email message
	$stringToAdd="";	//File into

	if (!$exists){
		foreach($_POST as $name => $value) {
			$stringToAdd.="$name,";
		}
		$stringToAdd.="\n";
		$new=False;
		fwrite($handle, $stringToAdd);
	}

	$stringToAdd="";
	foreach($_POST as $name => $value) {
		print "$name : $value<br>";
		$msg .="$name : $value\n";
		$stringToAdd.="$value,";
	}
	$stringToAdd.="\n";

	fwrite($handle, $stringToAdd);
	//now close the file
	fclose($handle); 
	$to = $_POST["Email"];
	$headers = "From: ". $_POST["first_name"] ."<".$_POST["Email"]. ">\r\n";

	mail($to, 'Request Confirmation', $msg,$headers);



	echo "Email sent";
?>