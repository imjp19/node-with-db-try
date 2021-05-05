var mysql = require('mysql');

var con = mysql.createConnection({ 
    host:"localhost",
    user: "imjp19",
    password: "1975"
});

con.connect(function(err) {
    if(err) {
      console.log('Error aavi bhai', err);
    }
   
    console.log("DB connect thai gyu chhe bhai");
});