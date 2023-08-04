# Interactive Full-Stack Project - Pet Store

## Description
This Interactive Full-Stack Project web application has been purposed towards people who loves furry friends, using Use Node.js and Express.js to create a RESTful API, Use Handlebars.js as the templating engine, Use MySQL and the Sequelize ORM for the database and handlebars. The back-end database allows users to create a development database, seed it with test data, and sync Sequelize models to MySQL database. User's have the ability to use GET and POST routes to access web application in order to see  data in the  database of the application

## Table of Contents:
- [The Challenge](#the-challenge)
- [Installation Process](#installation-process)
- [Usage Instructions](#usage-instructions)
- [Built With](#built-with)
- [Solution URL](#solution-url)
- [Walkthrough](#walkthrough-video)
- [Screenshots](#screenshots)
- [Continued Development](#continued-development)
- [Team Resources](#team-resources)
- [Authors](#authors)

# Overview

## The Challenge:
This challenge requires the creation of Interactive Full-Stack Project site that meets specific user requirements. These requirements include the ability to connect to a MySQL database using Sequelize, create a development database that is seeded with data, sync Sequelize models to the MySQL database, and display data from animals, pets, and users tables in a formatted JSON. The application should also be able to create and read data in the database.

## User Story

```md
AS A manager at pet store
I WANT a back end for my pet store website that uses the latest technologies
SO THAT my company can compete with other companies 
I WANT to see traffic of customers visiting website and control data that is displaied to them based on their authrozation
````

## Installation Process

PRE-Requisites: 
- you must have node.js version 16.* installed on your computer prior to proceeding
- you must have MySQL/MariaDB installed on your computer prior to proceeding


### Database setup
This must be executed before launching the application
1. Log into your MySQL/MariaDB server.
2. Execute the following command:
```md
    mysql> source path_to_schema.sql/schema.sql
```
3. Verify the database creation by running the command. The database should be listed in the results
```md
    mysql> show databases;
```

### Application launch:
1. Download the source code
2. Navigate to the folder containing the package.json file
3. Run the following commands
```md
    $ npm install
    $ node ./seed/seeds.js
    $ npm start
```


## Usage Instructions
1. Open the application
2. Log in or create an account
3. Navigate to Cats or Dogs pages and it's individual cards 
4. View individual animals cards with it's details
    1. click on the cards with pet's name and photo


    

## Built With
### Dependencies:
1. D3: Data-Driven Documents: [7.8.2](https://www.npmjs.com/package/d3)
2. Node.bcrypt.js: [5.0.0](https://www.npmjs.com/package/bcrypt/v/5.0.0)
3. Connect Session Store using Sequelize: [7.1.5](https://www.npmjs.com/package/connect-session-sequelize)
4. Day.js: [1.11.7](https://www.npmjs.com/package/dayjs)
5. Dotenv: [8.6.0](https://www.npmjs.com/package/dotenv)
6. Express: [4.18.2](https://www.npmjs.com/package/express/v/4.18.2)
7. Express Handlebars: [5.3.5](https://www.npmjs.com/package/express-handlebars/v/5.3.5)
8. Express-session: [1.17.1](https://www.npmjs.com/package/express-session/v/1.17.1)
9. Handlebars.js: [4.7.6](https://www.npmjs.com/package/handlebars/v/4.7.6)
10. Node MySQL2: [2.3.3](https://www.npmjs.com/package/mysql2/v/2.3.3)
11. Sequelize: [6.3.5](https://www.npmjs.com/package/sequelize/v/6.3.5)

### Dev Dependencies:
1. ESlint: [7.12.1](https://www.npmjs.com/package/eslint/v/7.12.1)
2. eslint-config-prettier: [8.6.0](https://www.npmjs.com/package/eslint-config-prettier?activeTab=versions)
3. prettier: [2.8.4](https://www.npmjs.com/package/prettier?activeTab=versions)


## Solution URL:
Solution URL Link: http://access-cal.herokuapp.com/


## Screenshots:
### Figure 1. Landing Page
![Landing Page]()


### Figure 2. Sign in/Sign Up page
![Sign in or signt up page ]()


### Figure 3. Cat's landing page
![Cats page]()

### Figure 4. Cat's individual card
![Cats card]()

### Figure 5. Dog's landing page
![Dogs page]()

### Figure 6. Dog's landing page
![Dogs page]()


## Continued Development:
1. Creating Admin authorization with rights to perform CRUD operation on pets data base
2. Enhancing the mobile experience 
3. Adding option to authorized user's to submit application forms for preferred pet for adoption 

## Team Resources: 

1. Heroku: [Application link]()
2. GitHub: [Repo link](https://github.com/Allicris/project-two.git)

## Authors :

Wynter Anne Mary
Erbe-maher Maureen
Mitchell Ryan
Serrano Allison