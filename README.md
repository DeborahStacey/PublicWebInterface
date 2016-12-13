# The Wellcat Public Web Interface
This is the repository for the Wellcat public web interface.
###Team members:

```sh
Ahmed El Shantaly
Alexandre Gontcharov
Anila Hasaj
Christian Rei
Jinhai Wang
```
## To use
### :arrow_forward: How to Run App
```sh
1. git clone the repo
2. cd to the repo
3. npm install
4. npm start
```
And visit <http://localhost:8080/>


### :arrow_forward: Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 node server.js
```
## To Troubleshoot
### :arrow_forward: How to Troubleshoot
You may found your code no longer working after pulled newer version.
Try npm install and npm start again because we add new libraries or package for developing new features.
If still not working, delete your local git repo and clone/download a fresh one

## To test
### :arrow_forward: How to Run test
We use Jest testing framework.
```sh
1. npm test
```

## Open Data and Population Stats
Two features' back end endpoint api are not available yet due to the time constraints.
However, wrote some minimum php server side codes to make it fully working for testing our front end UI.
To make it functions fully working, you will need to setup local dev apache server and some tweaks to see functionalities like upload data files and send statistical topic suggestion on the website.

For how to setup, please refer to our wiki.

   Open Data https://github.com/GuelphOntologyTeam/PublicWebInterface/wiki/Open-Dataset
   
   Population Stats https://github.com/GuelphOntologyTeam/PublicWebInterface/wiki/Population-Stats
