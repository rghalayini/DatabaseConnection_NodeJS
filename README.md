# Database connections in NodeJS

## MongoDB

MongoDB is a noSQL database and is popular among nodeJS developers. To set up a MongoDB connection, follow the steps below.

### First Installation

#### Install from link

If not already installed, install MongoDB from this link https://www.mongodb.com/try/download/community?tck=docs_server

Choose Community server as it is easier and preferred.

Follow all steps and choose the recommended settings. Do not choose to install Mongo Compass.

#### Run MongoDB

Open the command prompt and navigate to MongoDB bin folder. Type mongod in the command prompt to start the server.
To see what are the databases currently on your system, open a new command prompt, navigate to the same MongoDB bin folder as above and type mongo.
Type show dbs to show the databases

#### install Robo 3T

If you want to see and query the databases live, install Robo 3T. Visit this link and click on install Robo 3T only: https://robomongo.org/download
After installation, you can graphically see all the databases in MongoDB and query them.

### Code in visual studio

Two codes for getting and adding the data are included. For a successul setup, follow the step below:

#### Install Mongodb

Type in the terminal:

### Install Mongoose
Mongoose makes it easier to connect to the database. I have added another method of connection to the database through Mongoose. First, install mongoose 

npm install mongodb --save

Require mongoose on the top of the page

Call mongoose.connect to call the database.



