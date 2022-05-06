var express = require('express');
const cors = require('cors');
const fs = require('fs');

var app = express();

 
app.use(cors())

const friendList = [
   {
      id: '1',   
      name: 'Locke',
      level: 17,
 },
 {
   id: '2',   
   name: 'Locke',
   level: 17,
},
]; 


app.get('/get-friends/:id', function (req, res) {
   const id = req.params.id;
   
   res.send(friendList);
      
   })

  

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})