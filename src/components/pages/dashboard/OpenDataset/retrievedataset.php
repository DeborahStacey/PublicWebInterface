<?php
	//please note: this file is for front end dev only since backend haven't develop api yet
	//there is only minimum error checking 
	//this file only specify dataformat for responding

	//purpose: retrive specific dataset
	//called by OpenDataset
	////place this php file in apache server and update client ajax call url in order for it to work 

	header('Access-Control-Allow-Origin: http://localhost:8080', false);
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	///header('Access-Control-Allow-Methods: GET, POST, PUT');	

	//create errorlog to log errors
	$errorLogfile = fopen("errorlog.txt", "x+");
	if($errorLogfile!=false){
		fclose($errorLogfile);
	}
	$errorLogfile = 'errorlog.txt';

	//get posted data, record id
	$obj = json_decode($_POST["postData"]);
	$recordID = $obj->{'RecordID'};

	//build database connection 
	$host = 'localhost';
	$dbname = 'open_data_sql';
	$constring =  'mysql:host='.$host.';dbname='.$dbname;
	try
	{
		$connection = new PDO($constring, 'wellcatadmin', 'EeeVANUHh8Y5AsQJ');
	}
	catch (PDOException $pe)
	{
		//print db debug info to file
		$current = file_get_contents($errorLogfile);
		// Append a new person to the file
		$current .= "\r\n\r\n"."Could not connect to the database $dbname: " . $pe->getMessage();
		// Write the contents back to the file
		file_put_contents($errorLogfile, $current);

		die("Could not connect to the database $dbname: " . $pe->getMessage());
	}

	$recordVar=null;
	//get record from db
	$dbconn = $connection;
	$query = "SELECT `recordID`, `title`, `publisher`, `subject`, `description`, `license`, `formats`, `keywords`, `publishDate`, `modifiedDate` FROM `OD_datasets` WHERE recordID=:recordID";
	$stmt = $dbconn->prepare($query);
	/*bind values to escape*/
	$stmt->bindValue(':recordID',$recordID);	
	$stmt->execute();
	$result = $stmt->fetch(PDO::FETCH_ASSOC);
	if($result!=false){
		$recordVar = array(
		"recordID"=>$result['recordID'],
		"title"=>$result['title'],
		"publisher"=>$result['publisher'],
		"subject"=>$result['subject'],
		"description"=>$result['description'],
		"license"=>$result['license'],
		"formats"=>$result['formats'],
		"keywords"=>$result['keywords'],
		"publishDate"=>$result['publishDate'],
		"modifiedDate"=>$result['modifiedDate'],
		"fileFolderURL"=>"http://localhost:8888/wellcat/opendata/",
		"resourceList"=>array()
		);
	
		$resourceList=null;
		//get related resource
		$query = "SELECT `recordID`, `resourceID`, `resourceName`, `format`, `language`, `filePath`, `addDate` FROM `dataset_resources` 
			WHERE recordID=:recordID";
		$stmt = $dbconn->prepare($query);
		/*bind values to escape*/
		$stmt->bindValue(':recordID',$recordID);	
		$stmt->execute();
		$resultList = $stmt->fetchAll();
		$recordVar["resourceList"] = $resultList;
		
		//respond the dataset
		echo json_encode($recordVar);
	}
	else{
		echo json_encode($recordVar);
	}
	
	
	// //print db debug info to file
	// $current = file_get_contents($errorLogfile);
	// // Append a new person to the file
	// $current .= "\r\n\r\n Last Json error=> ".json_last_error_msg()
	// 	."\r\n Last PHP error=> ".error_get_last()['message']
	// 	." Line Number=> ".error_get_last()['line']
	// 	."\r\n print $resultList=> ".print_r($resultList,true)
	// 	."\r\n print $recordID=> ".$recordID
	// 	."\r\n print $resultList=> ".print_r($recordVar,true);
	// // Write the contents back to the file
	// file_put_contents($errorLogfile, $current);

	


?>