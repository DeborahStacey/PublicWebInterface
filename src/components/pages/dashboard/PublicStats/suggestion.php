<?php
	//please note: this file is for front end dev only since backend haven't develop api yet
	//there is only minimum error checking 
	//this file only specify dataformat for responding
	
	//for php mail() to work properly, the smtp mail server needs to be configed 
	//place this php file in apache server and update client ajax call url in order for it to work 
	//for how to config it, see the link http://www.developerfiles.com/how-to-send-emails-from-localhost-mac-os-x-el-capitan/
	//purpose: send suggestions
	//called by SuggestTopicModal
	//place this php file in apache server and update client ajax call url in order for it to work 

	header('Access-Control-Allow-Origin: http://localhost:8080', false);
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	//create errorlog to log errors
	$errorLogfile = fopen("errorlog.txt", "x+");
	if($errorLogfile!=false){
		fclose($errorLogfile);
	}
	
	$errorLogfile = 'errorlog.txt';

	///header('Access-Control-Allow-Methods: GET, POST, PUT');	
	$obj = json_decode($_POST["suggestionData"]);
	$to = $obj->{'fromEmail'};
	$name=$obj->{'name'};
	$subject=$obj->{'subject'};
	$message=$obj->{'message'};
	//error checking
	$errorLog="";
	$i=0;
	foreach ($obj as $key => $value) {
		$temp = trim($value);
	    if($temp==""){
	    	$comma=", ";
	    	if($i==0){
	    		$comma=" ";
	    	}
	    	$errorLog.=$comma.$key;
	    	$i=$i+1;
	    }
	    
	}
	if($errorLog!=""){
		$errorLog="The following field(s) are required:".$errorLog;
		//respond error object
		echo json_encode(array(
		  'error' => $errorLog
		));
		exit();
	}
	else{
		//send mail to population stats team
		$toStatsTeam = 'wellcatguelph@gmail.com';
		$subjectStatsTeam = 'Team Population Analysis - Topic Suggestion: '.$subject;
		$bodyStatsTeam=$message.'<br/><br/>From '.$name.'<br/>Email: '.$to;
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: wellcatguelph@gmail.com' . "\r\n";
		$sent= mail($toStatsTeam,$subjectStatsTeam,$bodyStatsTeam,$headers);

		
		//send mail to confirm topic is sent
		if($sent==true){
			//respond success
			$body='Hello '.$name.', <br/> <br/> You have suggested a topic "'.$subject.'". '.
					'Thank you for the suggestion. 
					We will take your recommandation into consideration.
					<br/><br/>Thank you,
					<br/>WellCat';
			$headers = "MIME-Version: 1.0" . "\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
			$headers .= 'From: wellcatguelph@gmail.com' . "\r\n";
			$sentResultUser = mail($to,$subject,$body,$headers);
			if(sentResultUser==true){
				echo json_encode(array(
				  'success' => "Mail sent."
				));
				exit();
			}
			else{
				//respond error object
				echo json_encode(array(
				  'error' => "Fail to send the mail. Try it again later."
				));
				exit();
			}

		}
		else{
			//respond error object
			echo json_encode(array(
			  'error' => "Fail to send the mail. Try it again later."
			));
			exit();
		}
		


	}
	
	// print_r($_POST["suggestionData"]);
	// echo json_encode(array(
	//   'html' => 'this outputs into the div',
	//   'other_data' => 12345,
	// ));

	// //append to file for debugging process
	// // Open the file to get existing content
	// $current = file_get_contents($errorLogfile);
	// // Append a new person to the file
	// $current .= "\r\n\r\n Last Json error=> ".json_last_error_msg()
	// 	."\r\n Last PHP error=> ".error_get_last()['message']
	// 	." Line Number=> ".error_get_last()['line']
	// 	."\r\n Print dataPost string=> ".$_POST["suggestionData"]
	// 	."\r\n print obj=> ".print_r($obj,true)
	// 	."\r\n print fromEmail=> ".$to
	// 	.print_r($_POST,true);
	// // Write the contents back to the file
	// file_put_contents($errorLogfile, $current);


?>