var express = require('express')
var app = express()
var path  = require("path");
const firebase = require('firebase');



firebase.initializeApp({
  serviceAccount: "./emplo.json",
  databaseURL: "https://emploeye-3bb48.firebaseio.com"
});


app.get('/add' , (req,res) =>{
  firebase.database().ref('admin').push().set(
    "This is from admin!!"
  )
  res.send("Firebase query succeeded...")
})


//app.use(express.static(__dirname+'/client/dist'));

//app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/client/dist/index.html')))




app.listen(3000, () => console.log('Example app listening on port 3000!'))
