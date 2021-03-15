var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017";

const mongoose = require('mongoose');


//to add data
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("shoppinglist");
    var myobj = {name: "test",lastName: "monday"};
    dbo.collection("students").insertOne(myobj, function(err, res){
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

// //to retrieve a single data
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("shoppinglist");
    var myobj = {name: "test",lastName: "monday"};
    dbo.collection("students").findOne(myobj, function(err, res){
        if (err) throw err;
        console.log(res._id);
        db.close();
    });
});

//to retrieve all data in the collection
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("shoppinglist");
    dbo.collection("Items").find().forEach(GetAllNames);
    db.close();

});

function GetAllNames(item){
    console.log(item.name);
};


//to delete an item in the collection
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("shoppinglist");
    var myobj = {name: "test",lastName: "monday"};
    dbo.collection("students").remove(myobj, function(err, res){
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
});


//connect to database through Mongoose
mongoose.connect(
    'mongodb://127.0.0.1:27017/shoppinglist',
    { useNewUrlParser: true },
    ()=> 
        console.log('connected to DB')
);
