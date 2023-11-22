# Flight_Api

### Author:
Linkedin: [@ekremyilmazturk](https://www.linkedin.com/in/ekrem-yilmazturk/)
<br>
<br>
<h3>About My Project</h3>
<p> 📌As you can see from the ER diagram, this API service project is built upon four different models. 📌JWT is used for encryption.  📌A permission system is established for editing/changing something about personnels.  📌Logging is implemented. </p>

### Installation:
```sh
    $ mkdir logs
    $ cp .env-sample .env
    $ npm i
```

### Folder/File Structure:

```
    .env
    .gitignore
    index.js
    package.json
    readme.md
    logs/
    src/
        configs/
            dbConnection.js
        controllers/
            auth.js
            flight.js
            passenger.js
            reservation.js
            user.js
        helpers/
            passwordEncrypt.js
            setToken.js
            sync.js
        middlewares/
            authentication.js
            errorHandler.js
            findSearchSortPage.js
            logger.js
            permissions.js
        models/
            flight.js
            passenger.js
            reservation.js
            user.js
        routes/
            auth.js
            flight.js
            passenger.js
            reservation.js
            user.js
```






<h3>About My Project</h3>
<p> 📌As you can see from the ER diagram, this API service project is built upon two different models. 📌JWT is used for encryption.  📌A permission system is established for editing/changing something about personnels.  📌Logging is implemented. </p>
<br>
<br>
<h3>What is in this api project?</h3>
<ul style="font-size: 18px;">
  <li>JWT</li>
  <li>Logging</li>
  <li>Permissions</li>
  <li>Authentications MW</li>
  <li>Error Handler MW</li>
  <li>Finding, Sorting and Pagination MW</li>
</ul>
<br>
<h3>How to install</h3>
If you want to clone the project to your local and test it, you must install first "npm i cookie-session",  
"npm i express dotenv mongoose express-async-errors" and "npm i jsonwebtoken morgan".  
Finally, in the project directory, you can run:  `nodemon index.js`
<br>
<br>
