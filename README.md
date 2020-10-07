# 3813 assignment 2
## 
##  Describe the organization of your Git repository and how you used it during the development of your solution
The version control fro the develoment is the first create a remote GitHub project, and clone one on local PC, branch from master for front end feature branch, and develop the front end with in-mermory data store, tested all ok, merge back to master, and then push backto remote in GitHub. Do the same thing for the backend to build all the REST APIs, test each REST API with mongodb in Postman to make sure they are all working as expected before commit and merge into master. 
##  Description of data structures used in both the client and server sides to represent the various entities, e.g.: users, groups, channels, etc.
cleint side:
- login : to manage the login component to check if the user can login successfully
- groups : to manage the groups component to show all the group for the chat application
- users : to manage the users component to show all the users for the chat application
- profile: to manage the profile component to show a profile of particular user for the chat application
- logout: to manage the logout functions

server side
- user api
- group api
- cahnnel api

##  Angular architecture: components, services, models, routes.
Components:
- login
- groups 
- users
- profile
- logout

Services:
- userservices
- groupservices

##  Node server architecture: modules, functions, files, global variables.
Server side
- user api
- group api
- cahnnel api

Mongodb

##  A description of how you divided the responsibilities between client and server (you are encouraged to have the server provide a REST API which returns JSON in addition to a static directory)
MEAN is a free and open-source JavaScript software stack for building dynamic websites and web applications or we can say that MEAN stack is a collection of JavaScript-based technologies used to develop web applications. MEAN is an acronym for MongoDB, ExpressJS, AngularJS, and Node.js. From client to server to database, MEAN is full-stack JavaScript.

M = MongoDB, a popular database manager which implements a NoSQL structure.

E = Express.js, a framework that supports and is used to host Node.js projects.

A = Angular.js, yet another framework for building apps. It builds upon the classic HTML framework style and extends it to web apps

N = Node.js, the crowning glory. This is a runtime environment, which runs server-side web applications, i.e. it works on the back-end, away from the user’s eyes to fetch relevant data or perform operations on the same.

MongoDB offers a more flexible, accommodating layer for storing data. Node.js provides a better nexus for running your server, while Express.js helps to standardize how you build your websites. On the client-side, AngularJS provides a clean way of adding interactive functions and AJAX-driven rich components. The amalgamation of all makes a clean, coherent mechanism for moving data from the user to the disk farm and back again.
##  A list of routes, parameters, return values, and purpose in the sever side
Please see the attached Ang1.postman_collection.json within the postman folder exported from Postman testing

##  Describe the details of the interaction between client and server by indicating how the files and global vars in server side will be changed and how the display of each angular component page will be updated.
MongoDB has been used for storing backend data.
However the uploaded photo is still sits under backend node, need improve in assignment 2
