****************************************************
Public/Population Analysis Engine
CIS*4250 - Software Design V

Contributors:
Alex Green
Erik Zorn-Wallentin
Kashaan Ali
Vincent Yong

Thursday, Nov.24 / 2016
****************************************************

**********************
GitHub
**********************

Main GitHub: https://github.com/GuelphOntologyTeam

Our specific Git for Public Analysis team: https://github.com/GuelphOntologyTeam/PublicAnalysis

Also our current updated code is merged with the PublicWebInterface team:
https://github.com/GuelphOntologyTeam/PublicWebInterface
You can find the codebase located at: PublicWebInterface\src\components\pages\dashboard\PublicStats\PublicAnalysis

**********************
Versions
**********************

Jasmine testing framework - Version 2.4.1
You do not need to download Jasmine, it is in the library folder on the github with our submission and will automatically work.

Ran all HTML / JavaScript / Jasmine files work in Reynolds Labs (Room 114) with browsers and versions:
YES - Chrome - Version 43.0.2357.81 (64-bit)
YES - Firefox - Version 38.0.5
YES - Safari - Version 10.0 (10602.1.50.0.10)
YES - Internet Explorer 11 - Version 11.0.9600.18499

*****************************
Jasmine Testing Framework
*****************************

We got Jasmine from website: http://jasmine.github.io/

Jasmine recommended a certain folder structure to organize the code, and we decided to follow that structure.
Structure:
Root
	documents
		contains documents
	lib
		contains jasmine library
	testCases
		contains your js spec files that will test your js source files
	src
		js
			contains all your source files in javascript that communicates to html
	SpecRunner.html
	README.txt
	
*****************************
Public Analysis Structure
*****************************
	
Structure:
Root
	lib
		jasmine-2.4.1								- Jasmine library, do not need to do anything with this jasmine contents
	testCases										- Test cases will all be contained here, and they test the source js code
		PublicAnalysisEngineSpec.js					- Analysis Engine subsystem test cases
		PublicAnalysisInterfaceSpec.js				- Public Analysis Interface subsystem test cases

	src												- Source files for javascript files
		js											- Javascript source files
			PublicAnalysisEngine.js					- Analysis Engine subsystem source file
			PublicAnalysisInterface.js				- Public Analysis Interface subsystem
			PublicAnalysisInterfaceSettings.js		- Interface data storage
	SpecRunner.html									- SpecRunner is what runs the test cases, and will be opened in any browser
	README.txt										

**********************
Compilation
**********************

JavaScript runs on a web browser and our user interface is coupled to ReactJS: https://facebook.github.io/react/

How to get the app and compile it:
	- Git clone the repo
		Ex. git clone https://github.com/GuelphOntologyTeam/PublicWebInterface
	- Cd to the cloned repo
		Ex. cd PublicWebInterface
	- Install the app by doing "npm install", make sure to have nodeJS already installed on computer
		Ex. In the directory of the cloned repo type "npm install"

*********************************************************************
Running the program(s) and general info for any reader
*********************************************************************

How to run the app:
	- Cd to the cloned repo
		Ex. cd PublicWebInterface
	- Run the app by typing in "npm start" into the terminal
		Ex. In the directory of the cloned repo type "npm start"
	- Wait a few seconds for the server to start up
	- In a browser open up the page: http://localhost:8080/ to view the app
	- Now go to "Population Statistic" page to view one of our features for the Public Analysis Team to generate data based on the user input
	
We are the Public Analysis Team for CIS*4250 Software Design V. 

Our code is merged with other teams and merging with the Interface team and their GitHub,
our codebase is located at: PublicWebInterface\src\components\pages\dashboard\PublicStats\PublicAnalysis

Follow the above steps to get the program running and testing our specific functionality added with the Interface team and the Database team.

We use Jasmine testing framework to test our javascript code. You run Jasmine testing framework by going to the Root folder,
and open SpecRunner.html in any browser. SpecRunner once opened will run all the tests on the javascript source files using the spec files as specified
in the SpecRunner. Jasmine will show different sections of tests for our different subsystems, currently we have Public Analysis Engine subsystem, and
Public Analysis Interface subsystem.
		
Enjoy!

**************************
Bibliography / References
**************************

http://jasmine.github.io/
https://github.com/GuelphOntologyTeam
https://github.com/GuelphOntologyTeam/PublicWebInterface
https://github.com/GuelphOntologyTeam/PublicAnalysis
https://moodle.socs.uoguelph.ca/
https://facebook.github.io/react/

*****************
Known Limitations
*****************
