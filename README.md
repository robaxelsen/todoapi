# Todo API
A simple todo app API, made with Node.js and MongoDB.

## Future Plans
This is currently an initial demo only, but I have plans to expand it to become an easy to use boilerplate API project. Any suggestions for improvements or features are welcome - please create an issue or pull request.

## Not Production Ready
Not production ready at this stage.

##INSTALLATION
```bash
git clone https://github.com/robeerob/todoapi.git
cd todoapi
vim config/config.json
```
Replace the username and password values with your own [mLab](https://mlab.com/) credentials, and save.
```bash
vim config/config.json
```
Replace the MongoDB url with your own mLab url, or replace whole return statement with your local MongoDB access, and save.
```bash
npm install
node app.js
```
To seed data (create default dummy data) to the database, visit the following url:  
http://localhost:3000/api/setupTodos
