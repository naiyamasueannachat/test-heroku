// const express = require('express');
// const app = express();
// app.use(express.static(__dirname + '/dist'));
// app.listem(process.env.PORT || 8080);


//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the dist directory
// Replace the '/dist/my-profile'
app.use(express.static(__dirname + '/dist/test-heroku'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/my-profile/index.html'
  res.sendFile(path.join(__dirname + '/dist/test-heroku/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);