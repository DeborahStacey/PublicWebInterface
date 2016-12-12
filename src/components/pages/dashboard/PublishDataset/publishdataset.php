<?php
	//please note: this file is for front end dev only since backend haven't develop api yet
	//there is only minimum error checking 
	//this file only specify dataformat for responding

	//purpose: publish new dataset to database to server
	//called by PublishDataset
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


	///////////insert new data to database////////////////
	//build database connection 
	$host = 'localhost';
	$dbname = 'open_data_sql';
	$constring =  'mysql:host='.$host.';dbname='.$dbname ;
	$newRecordId = -1;   //new dataset id
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

	//insert into OD_datasets
	$title = $_POST["title"];
	$publisher = $_POST["publisher"];
	$subject = $_POST["subject"];
	$description = $_POST["description"];
	$license = $_POST["license"];
	$keywords = $_POST["keywords"];

	$dbconn = $connection;
	$query = "insert into OD_datasets (title,publisher,subject,description,license,keywords,publishDate,modifiedDate) 
		values(:title,:publisher,:subject,:description,:license,:keywords,:publishDate,:modifiedDate);";
	$stmt = $dbconn->prepare($query);
	
	/*bind values to escape*/
	$stmt->bindValue(':title',$title);	
	$stmt->bindValue(':publisher',$publisher);			
	$stmt->bindValue(':subject',$subject);	
	$stmt->bindValue(':description',$description);			
	$stmt->bindValue(':license',$license);					
	$stmt->bindValue(':keywords',$keywords);
	$stmt->bindValue(':publishDate',date('Y-m-d H:i:s'));
	$stmt->bindValue(':modifiedDate',date('Y-m-d H:i:s'));
	$datasetFormat= array();
	if($stmt->execute()){
		
		
		//success insert
		//save record id for insert resource use
		$newRecordId = $dbconn->lastInsertId();

		//print db debug info to file
		$current = file_get_contents($errorLogfile);
		// Append a new person to the file
		$current .= "\r\n\r\n inserted record id is ".$newRecordId;
		// Write the contents back to the file
		file_put_contents($errorLogfile, $current);


		//////////////insert resource info to dataset_resource table ///////////////
		//get length of resource list
		$i = $_POST["resourceLength"];
		//loop through resource list and insert each resource into database
		for($x=0;$x<$i;$x++){
			//store resource name,and information in array for db insertion
			$resourcePrefix = "resource".$x;
			$resourceName = $_POST[$resourcePrefix."Name"];
			$format = $_POST[$resourcePrefix."Format"];
			$language = $_POST[$resourcePrefix."Language"];
			$filePath = $_POST[$resourcePrefix."FileName"];
			$query = "insert into dataset_resources (recordID,resourceName,format,language,filePath,addDate)  
			values(:recordID,:resourceName,:format,:language,:filePath,:addDate);";
			$stmt = $dbconn->prepare($query);
			
			/*bind values to escape*/
			$stmt->bindValue(':recordID',$newRecordId);
			$stmt->bindValue(':resourceName',$resourceName);
			$stmt->bindValue(':format',$format);
			$stmt->bindValue(':language',$language);
			$stmt->bindValue(':filePath',$filePath);
			$stmt->bindValue(':addDate',date('Y-m-d H:i:s'));
			$stmt->execute();

			//adding file format to datasetFormat
			if(!in_array($format,$datasetFormat)){
				array_push($datasetFormat,$format);
			}
			///////////upload the files////////////////////////
			//reference http://www.phpforkids.com/php/php-forms-file-uploads.php
				//$info = pathinfo($_FILES['file']['name']);
				//$ext = $info['extension']; // get the extension of the file
				//$newname = "testing.".$ext; //this is needed if it is filename conflict
			$fileKey = "resource".$x."File";  //build the file key to access file in files
			$filename = $_FILES[$fileKey]['name'];
			//if the target folder exis, if not create the folder open data
			$path = 'opendata';   //place all the opendata file under open data folder
			if ( ! is_dir($path)) {
			    mkdir($path);
			}
			//get target full file path
			$target = $path.'/'.$filename;
			move_uploaded_file( $_FILES[$fileKey]['tmp_name'], $target); //upload the file to folder in server
			

		}
		//update format in OD_datasets table
		if(count($datasetFormat)>0){
			//update formate list in OD_datasets
			$formatList = implode(', ',$datasetFormat);
			$query = "UPDATE OD_datasets SET formats=:formats where recordID=:recordID;";
			$stmt = $dbconn->prepare($query);
			
			/*bind values to escape*/
			$stmt->bindValue(':recordID',$newRecordId);
			$stmt->bindValue(':formats',$formatList);
			$stmt->execute();
			

			//respond success with record id
			$dbconn=null;  //close connection
			echo json_encode(array(
			  'recordID' => $newRecordId
			));
			exit();
		}

		
	}
	else{
		//fail insert
		
		//print db debug info to file
		$current = file_get_contents($errorLogfile);
		// Append a new person to the file
		$current .= "\r\n\r\n".print_r($dbconn->errorInfo());
		// Write the contents back to the file
		file_put_contents($errorLogfile, $current);

		//respond success with record id
		$dbconn=null;  //close connection
		echo json_encode(array(
		  'error' => $dbconn->errorInfo()
		));
		exit();
	}
	

	
	

	// //print db debug info to file
	// // Open the file to get existing content
	// $current = file_get_contents($errorLogfile);
	// // Append a new person to the file
	// $current .= "\r\n\r\n Last Json error=> ".json_last_error_msg()
	// 	."\r\n Last PHP error=> ".error_get_last()['message']
	// 	." Line Number=> ".error_get_last()['line']
	// 	."\r\n Print dataPost string=> ".$_POST["resource0Name"]
	// 	."\r\n print obj=> ".print_r($_POST,true)
	// 	."\r\n print title=> ".$_POST["title"]
	// 	.print_r($_POST,true);
	// // Write the contents back to the file
	// file_put_contents($errorLogfile, $current);


?>