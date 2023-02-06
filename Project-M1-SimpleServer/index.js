const httpServer = require('http');
const url = require('url');
const fs = require('fs');
const replaceTemplate = require('./modules/replaceTemplate')

// Read data from file
// Template
const tempCourse = fs.readFileSync(
    `${__dirname}/data/data.json`,
    'utf-8'
);


////////////////////////////
//Template
const templateHTMLCourse = fs.readFileSync(
    `${__dirname}/template/templateCourse.html`,
    'utf-8'
)

const dataObj = JSON.parse(tempCourse);


///////////////////////
//Create Server
const server = httpServer.createServer( (req, res) => { //Call back function

    //const urlParameter = url.parse(req.url, true);
    //console.log(urlParameter.query);
    //console.log(urlParameter.pathname);
    const {query,pathname} = url.parse(req.url, true); // object destructor

    if (query.id) { // if there is query parameter named id as string
        if (pathname === '/' || pathname.toLowerCase() === '/courses') {
            res.writeHead(200, { // Ran succesfully
                'Content-type': 'text/html'
            });
            const course = dataObj[Number(query.id)];
            const strCourseName = JSON.stringify(course);
            const courseHTML = replaceTemplate(templateHTMLCourse, course);
            res.end(courseHTML);
        }
    }

    else {

        res.writeHead(404, { // Server did not find what you were looking for
            'Content-type': 'text/html'
        });
        res.end('resource not found')
    }
});


//Start Listening to requests
server.listen(8000, 'localhost', ()=> {
    console.log('Listening to requests on port 8000')
});

