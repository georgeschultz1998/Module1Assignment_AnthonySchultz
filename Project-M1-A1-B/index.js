const httpServer = require('http');
////////////////////////////////
//Create Server
const server = httpServer.createServer(function (req, res){
    res.end(req);
    console.log('Request from client ${req}');

});

////////////////////////////////
//Start Listening to requests
server.listen(8000, 'localhost', () => {
    console.log('Listening to requests on port 8000');
});

