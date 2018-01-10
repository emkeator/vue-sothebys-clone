const express = require('express'),
      app = express(),
      port = 3001

app.use(express.static(__dirname + '/dist'))

app.listen(port, () => console.log(`I'm listening on port ` + port))