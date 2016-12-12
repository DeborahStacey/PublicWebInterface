<?php
	//please note: this file is for front end dev only since backend haven't develop api yet
	//there is only minimum error checking 
	//this file only specify dataformat for responding

	//purpose: retrive dataset list by criteria or none
	//called by OpenDataset
	//place this php file in apache server and update client ajax call url in order for it to work 

	header('Access-Control-Allow-Origin: http://localhost:8080', false);
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	///header('Access-Control-Allow-Methods: GET, POST, PUT');	

	//create errorlog to log errors
	$errorLogfile = fopen("errorlog.txt", "x+");
	if($errorLogfile!=false){
		fclose($errorLogfile);
	}
	$errorLogfile = 'errorlog.txt';


	$criteria =null;
	//get posted data
	$obj = json_decode($_POST["postData"]);
	if(property_exists($obj,'criteria')!=false){
		$criteria = $obj->{'criteria'};
	}
	//set page number and row offset
	$page = (int)$obj->{'page'};
	$queryRowOffset = ($page-1)*10;
	
	

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

	
	//get record from db
	$dbconn = $connection;
	$finalResult=null;
	if($criteria!=null&&$criteria!=undefined){   //return specified page of list that match the criteria
		//SELECT * FROM tbl LIMIT 10,10;  # Retrieve rows 6-15
		$query = "SELECT SQL_CALC_FOUND_ROWS `recordID`, `title`, `publisher`, `subject`, `description`, `license`, `formats`, `keywords`, `publishDate`, `modifiedDate` FROM `OD_datasets` WHERE `title` like :title limit ".$queryRowOffset." , 10;";
		$stmt = $dbconn->prepare($query);
		/*bind values to escape*/
		$likeCriteria= "%".$criteria."%";
		$stmt->bindParam(':title',$likeCriteria,PDO::PARAM_STR);	
		
		$error=$stmt->execute();
		$resultList = $stmt->fetchAll();

		//print debug information to file
		$current = file_get_contents($errorLogfile);
		// Append a new person to the file
		$current .= "\r\n\r\n Last Json error=> ".json_last_error_msg()
			."\r\n Last PHP error=> ".error_get_last()['message']
			." Line Number=> ".error_get_last()['line']
			."\r\n 11111111print inside retrive lsit page page criteria => ".$queryRowOffset."page".$page.print_r($criteria,true)
			."\r\n print totalItems=> ".print_r($likeCriteria,true)
			."\r\n print resultList=> ".print_r($resultList,true);
		// Write the contents back to the file
		file_put_contents($errorLogfile, $current);

		//get number of results and respond to client
		if($resultList!=false){
			
			$query = "SELECT FOUND_ROWS() as totalItems;";
			$stmt = $dbconn->prepare($query);
			$stmt->execute();
			$totalItems = (int)$stmt->fetch(PDO::FETCH_COLUMN);
			//build array to return
			$finalResult=array(
				"totalItems"=>$totalItems,
				"currentPage"=>$page,
				"maxPage"=>ceil($totalItems/10),
				"datasetList"=>$resultList
			);
			//respond to client with json
			echo json_encode($finalResult);
		}
		else{
			echo json_encode($finalResult);
		}
	}
	else{ //return specifed page of list

		//SELECT * FROM tbl LIMIT 10,10;  # Retrieve rows 6-15
		$query = "SELECT SQL_CALC_FOUND_ROWS `recordID`, `title`, `publisher`, `subject`, `description`, `license`, `formats`, `keywords`, `publishDate`, `modifiedDate` FROM `OD_datasets` ORDER BY publishDate DESC limit ".$queryRowOffset." , 10;";
		$stmt = $dbconn->prepare($query);
		/*bind values to escape*/
		//$stmt->bindValue(':queryRowOffset',$queryRowOffset);	
		$stmt->execute();
		$resultList = $stmt->fetchAll();

		if($resultList!=false){
			
			$query = "SELECT FOUND_ROWS() as totalItems;";
			$stmt = $dbconn->prepare($query);
			$stmt->execute();
			$totalItems = (int)$stmt->fetch(PDO::FETCH_COLUMN);
			//build array to return
			$finalResult=array(
				"totalItems"=>$totalItems,
				"currentPage"=>$page,
				"maxPage"=>ceil($totalItems/10),
				"datasetList"=>$resultList
			);

			//print debug information to file
			$current = file_get_contents($errorLogfile);
			// Append a new person to the file
			$current .= "\r\n\r\n Last Json error=> ".json_last_error_msg()
				."\r\n Last PHP error=> ".error_get_last()['message']
				." Line Number=> ".error_get_last()['line']
				."\r\n 22222222222print inside retrive lsit page page criteria => ".$queryRowOffset."page".$page.print_r($criteria,true)
				."\r\n print totalItems=> ".print_r($totalItems,true)
				."\r\n print resultList=> ".print_r($resultList,true);
			// Write the contents back to the file
			file_put_contents($errorLogfile, $current);

			//respond to client with json
			echo json_encode($finalResult);
		}
		else{
			echo json_encode($finalResult);
		}
	}

	
	
	
	// //print debug information to file
	// $current = file_get_contents($errorLogfile);
	// // Append a new person to the file
	// $current .= "\r\n\r\n Last Json error=> ".json_last_error_msg()
	// 	."\r\n Last PHP error=> ".error_get_last()['message']
	// 	." Line Number=> ".error_get_last()['line']
	// 	."\r\n print $page page criteria => ".$page.print_r($criteria,true)
	// 	."\r\n print $finalResult=> ".print_r($finalResult,true);
	// // Write the contents back to the file
	// file_put_contents($errorLogfile, $current);

	


?>