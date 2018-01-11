const express = require('express'),
      app = express(),
      port = process.env.PORT || 3001

app.use(express.static(__dirname + '/dist'))
console.log(__dirname)

app.listen(port, () => console.log(`I'm listening on port ` + port))