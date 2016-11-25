****************************************************
Public/Population Analysis Engine
CIS*4250 - Software Design V

Contributors:
Alex Green
Erik Zorn-Wallentin
Kashaan Ali
Vincent Yong

Thursday, Nov.3 / 2016
****************************************************


**********************
GitHub
**********************

Main GitHub: https://github.com/GuelphOntologyTeam

Our specific Git for Public Analysis team: https://github.com/GuelphOntologyTeam/PublicAnalysis

**********************
Versions
**********************

Jasmine testing framework - Version 2.4.1
You do not need to download Jasmine, it is in the library folder on the github with our submission and will automatically work.

Ran all HTML / JavaScript / Jasmine files work in Reynolds Labs (Room 114) with browsers and versions:
NO - Chrome - Version 43.0.2357.81 (64-bit)
YES - Firefox - Version 38.0.5
NO - Safari - Version 10.0 (10602.1.50.0.10)
YES - Internet Explorer 11 - Version 11.0.9600.18499

You should not need to download anything to run our HTML / JavaScript / Jasmine files. It should also run on any browser and the versions you have on them.

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
	

**********************
Versions
**********************

chartJS - Version 2.3.0
You do not need to download ChartJS, it is in the library folder on the github with our submission and will automatically work.

All chartJS required files work in Reynolds Labs (Room 114) with browsers and versions:
YES - Chrome - Version 43.0.2357.81 (64-bit)
YES - Firefox - Version 38.0.5
YES - Safari - Version 10.0 (10602.1.50.0.10)
YES - Internet Explorer 11 - Version 11.0.9600.18499

You should not need to download anything to run our HTML / JavaScript / Jasmine / chartJS files. It should also run on any browser and the versions you have on them.

*****************************
chartJS Testing Framework
*****************************

We got chartJS from website: http://chartjs.org/, https://github.com/chartjs/Chart.js/blob/master/LICENSE.md

Below is the chartJS structure that we decided to follow. 
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
			contains all your source files in javascript that communicates to html and chartJS is one of the required files
	SpecRunner.html
	README.txt
	
*****************************
Public Analysis Structure
*****************************
	
Structure:
Root
	documents
		CatQuestions				- Excel of cat questions for other teams
	lib
		jasmine-2.4.1				- Jasmine library, do not need to do anything with this jasmine contents
	testCases						- Test cases will all be contained here, and they test the source js code
		analysisEngineSpec.js		- Analysis Engine subsystem test cases
		backendInteractionSpec.js	- Backend Interaction subsystem test cases
		userInteractionSpec.js		- User Interaction subsystem test cases

	src								- Source files that contain the interface, source files for javascript files
		interface.html				- Interface in HTML to simulate from the interface team
		js							- Javascript source files
			analysisEngine.js		- Analysis Engine subsystem source file
			backendInteraction.js	- Backend Interaction subsystem source file
			chart.js				- Library for graphs and charts on our result data
			interfaceSettings.js	- Global data that stores data on the interface settings
			userInteraction.js		- User Interaction subsystem source file
	SpecRunner.html					- SpecRunner is what runs the test cases, and will be opened in any browser
	README.txt										

**********************
Compilation
**********************

JavaScript runs on a web browser and ours is coupled to HTML files so you can open it in any web browser!

*********************************************************************
Running the program(s) and general info for any reader
*********************************************************************

We are the Public Analysis Team for CIS*4250 Software Design V. 

The interface should be calling our javascript files and JSON files when they need Public Analysis. You can see where our test cases,
source files are located based on our Public Analysis Structure as shown above.	

Currently if you want to test our program, use the interface.html to test our current build.

We use Jasmine testing framework to test our javascript code. You run Jasmine testing framework by going to the Root folder,
and open SpecRunner.html in any browser. SpecRunner once opened will run all the tests on the javascript source files using the spec files as specified
in the SpecRunner. Jasmine will show different sections of tests for our different subsystems, currently we have Analysis Engine subsystem,
Backend Interaction subsystem, and User Interaction subsystem.
		
		
Enjoy!

**************************
Bibliography / References
**************************

http://jasmine.github.io/
https://github.com/GuelphOntologyTeam
https://moodle.socs.uoguelph.ca/

*****************
Known Limitations
*****************
