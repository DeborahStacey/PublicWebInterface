****************************************************
Public/Population Analysis Engine
CIS*4250 - Software Design V

Contributors:
Alex Green
Erik Zorn-Wallentin
Kashaan Ali
Vincent Yong

Sunday, Dec.4 / 2016
****************************************************

**********************
GitHub
**********************

Main GitHub: https://github.com/GuelphOntologyTeam

Our specific Git for Public Analysis team: https://github.com/GuelphOntologyTeam/PublicAnalysis

We made all our final copies on the PublicWebInterface Team so see info below!

*** Important ***


Also our current updated code is merged with the PublicWebInterface team:
https://github.com/GuelphOntologyTeam/PublicWebInterface

They did not put our code to their master branch, so you must change to *PublicAnalysis branch* when finding our code
through the PublicWebInterface team.

You can find our codebase located at: PublicWebInterface/src/components/pages/dashboard/PublicStats/PublicAnalysis

*** Important***


**********************
Versions
**********************

Ran the Web Applications and runs on all versions in the Reynolds Lab:
YES - Chrome - Version 43.0.2357.81 (64-bit)
YES - Firefox - Version 38.0.5
YES - Safari - Version 10.0 (10602.1.50.0.10)
YES - Internet Explorer 11 - Version 11.0.9600.18499

*****************************
Jasmine Testing Framework
*****************************

We got Jasmine from installing by command line: npm install -g jasmine-node

You need to install it on the command line this way to start using jasmine-node, as it is needed based on the ReactJS setup by the WebInterfaceTeam.

The structure of our code is based from the way Jasmine recommends it for testing 
Structure:
Root
	spec
		* Contains your js spec files that will test your js source files
		* There is no Spec js file to test PublicAnalysisInterface.js because it is a specific format for the PublicWebInterface and it cannot be changed,
		* so it would not support the way Jasmine needs it to be setup properly because of the "export" keyword.
		* The PublicAnalysisInterface.js is setup to be similar to the Adapter Design Pattern.
		PublicAnalysisEngineSpec.js
		PublicAnalysisInterfaceSettingsSpec.js
	src
		js
			Contains all your source files in javascript that communicates to html
	README.txt

To run the Unit Test on each js source file go to our root directory as specified below or above.
1. To PublicAnalysis root directory: PublicWebInterface/src/components/pages/dashboard/PublicStats/PublicAnalysis
2. Run each Unit test in our root directory
	a. jasmine-node spec/PublicAnalysisEngineSpec.js
	b. jasmine-node spec/PublicAnalysisInterfaceSettingsSpec.js
3. Each Unit test ran from a or b will show the tests, assertions, failures and skips.
4. If you want to know more about what each Unit Test is doing go to:
	a. Change directory to spec -- cd spec from root directory
	b. Open PublicAnalysisEngineSpec.js to see our Unit Tests for that subsystem
	c. Open PublicAnalysisIntefaceSettingsSpec.js to see our Unit Tests for that subsystem

	
*****************************
Public Analysis Structure
*****************************
To PublicAnalysis root directory: PublicWebInterface/src/components/pages/dashboard/PublicStats/PublicAnalysis
	
Structure:
Root									- Directory where the entire PublicAnalysis code is located.
	spec								- Test cases will all be contained here, and they test the source js code
		PublicAnalysisEngineSpec.js				- Analysis Engine subsystem test cases
		PublicAnalysisInterfaceSettingsSpec.js			- Public Analysis Interface subsystem test cases
	src								- Source files for javascript files
		js							- Javascript source files
			PublicAnalysisEngine.js				- Analysis Engine subsystem source file
			PublicAnalysisInterface.js			- Public Analysis Interface subsystem
			PublicAnalysisInterfaceSettings.js		- Interface data storage
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

Our code is merged with other teams and merging with the PublicWebInterface team and their GitHub,
our codebase is located at: PublicWebInterface\src\components\pages\dashboard\PublicStats\PublicAnalysis

Follow the above steps to get the program running and testing our specific functionality added with the PublicWebInterface team.

We tried to work closely with other teams all semester, but this actually ended up an extremely difficult task. We wrote our entire codebase in HTML / JS / Python by 6th week
where we got other teams to follow our interface setup and API,but in the end the PublicWebInterface team decided to write everything in ReactJS which phased out our entire code base 
and they didn't get that finished till 10th week.
There we quickly rewrote everything, while trying to fix the bugs between our teams. By that time our team was unable to recover to get the database functionality working properly.
It was very hard to work with other teams, as it took the Interface and Database team forever to get their stuff working properly and directly affected our team.
See "Known Limitations" for more information below!

We use Jasmine testing framework to test our javascript code. Follow the steps above to use our Unit Tests on our javascript source files using Jasmine-Node.
		
Enjoy!

**************************
Bibliography / References
**************************

http://jasmine.github.io/
https://jasmine.github.io/2.0/node.html
https://github.com/GuelphOntologyTeam
https://github.com/GuelphOntologyTeam/PublicWebInterface
https://github.com/GuelphOntologyTeam/PublicAnalysis
https://moodle.socs.uoguelph.ca/
https://facebook.github.io/react/
https://blog.codeship.com/jasmine-node-js-application-testing-tutorial/
http://atom-morgan.github.io/hello-testing

*****************
Known Limitations
*****************

The members tasked to finish database connection to get our project to work with the database team were unable to accomplish this task in the timeframe.
We had the connection working fine by 6th week using HTML / JS / Python, but the PublicWebInterface decided to use ReactJS and didn't get that working properly
until the 10th week. We scrambled to rewrite our code base to work with ReactJS at the end but that happened to phase out all our code base, and the members in our team 
tasked to get the database working again with ReactJS just didn't get it done in the timeframe. 
The database team was very difficult the entire semester and made this more difficult to work with them properly.

Our Analysis Engine itself suffered from getting proper data because of the lack of Database implementation, so a lot of it is a simulation currently. 
With more time this would easily be fixed in 1 more week of fulltime work.

Everything else in our project works as intended!