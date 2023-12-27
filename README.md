# Christmas List Maker
### Video Demo: [LINK](https://youtu.be/q3dnrouoURA)


Note: This repository is a copy that will not be updated or maintained after the completion of CS50. You can find the official repository for **Christmas List Maker** [HERE](https://github.com/njhaus/christmas-list-maker)


### Description:

The **Christmas List Maker** is a web application inspired by easily-lost handwritten Christmas lists, too-long email chains, temporary text groups, and randomized gift exchange assignments that never seem quite random enough. The **Christmas List Maker** makes these problems obsolete by allowing groups of family or friends to make and share Christmas lists, communicate which items they have bought, and even choose who buys for who, all from a single app!

---

#### Features:
**Christmas List Maker** users can:
* Create a password-protected group.
* Add names of people to your group.
* Randomly assign any number of recipients to each gift giver. (Manual assignment feature coming sometime before December 2099!)
* Make a password for each member of your group
  
Each group member can:
* Make a Christmas list for yourself that other gift-givers can see.
* Mark the gifts from others' list you have bought. Other gift givers can see which gift you bought, but the recipient cannot!
* Write notes to other gift givers.

---

#### Technical Specifications:
This project is written with React, Typescript, Material UI, and some custom CSS for the front end. Express and NodeJS are used to serve the back end, and SQLite3 is used for the database.

The server folder contains the index.js file which holds the routes that communicate between the client and the database. It also contains package-lock.json and package.json, which contain information about the project and its dependencies. The database file is also housed in this folder.

Dependencies include: Express, SQLite, bcrypt (for encrypting access codes), body-parser (for parsing the body from API requests), cors(for allowing cross-origin communication), express-session (for storing information in sessions), cookie-parser (for reading the cookies saved in sessions), and uuid (for creating random ids).

The src folder contains front-end components, utilities, and styling organized as follows:
* Assets: Images
* Components: Repeated peices of code used throughout the project, such as borders and buttons, as React components.
* Context: Holds data to be used in many components. In this case, data from the current user's Christmas list is stored here.
* Data: Holds Typescript types, interfaces, and temporary data used to aid development.
* Hooks: Contains custom React hooks.
* Layouts: Contains layouts used with React Router to provide stylistic consistency between pages.
* Pages: Holds React components that encompass a full page. Also holds custom CSS files used with each page.
* Services: Contains API functions
* Theme: Contains Material UI theme
* Utils: Holds front-end utility functions.

The main folder also contains the index.html page, which is the base page for the React app, as well as front-end package.json and typescript configuration files.

---

#### Developer notes:

I used this project to focus on technical skills from many of the courses I am currently completing, but the content from CS50 I included was SQL, specifically SQLite3. I had not used any form of SQL before this class.

I considered using HTML, CSS, Flask, and Python to complete this project. However, I found React, Typescript, and Express to be more in line with the skills I needed to practice to achieve my professional goals.

Some skills I needed to learn completely on my own because they were not present in this course or any other I am taking were:
* Integrating SQLite3 with Express
* Using Material UI and Material UI custom themes
* Deploying a web application which uses separate origins for the front and back end.

---

####No project is ever completely finished! Here are some of the features and issues that need to be revisited:####

Presently, the database file is found in the server folder. this seems like an insecure way to store data (even if the passwords are encrypted). I will do further research to find the most secure way to store a SQLite database on a deployed project.

All routes are currently in a single file, making it difficult to navigate. I need to use Express router to split these routes into separate files (and use controller files to further streamline the code).

There are some redundancies in my React components. Repeated code should be pulled into a separate component to improve ease of maintenance and readability. In particular, I need to make a background component that holds the content for each page. (Right now, each page component contains its own identical background styling code.)

I need to add form validation in the front and back end to avoid cross-site-scripting attacks, database injections, and database errors.

I need to add a help section, or small ? buttons in particular places to assist users if they need help.

I need to add accessibility features for those using screenreaders.
