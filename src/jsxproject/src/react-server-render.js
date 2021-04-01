
/* 
Example of an HelloWorld with React, 
This uses the JSX syntax.

3 commands :
- To init npm (only once) : npm init -y
- Installling : npm install babel-cli@6 babel-preset-react-app@3
- Launching babel :  npx babel --watch src --out-dir dist --presets react-app/prod
*/

// React : Helps with component/element creation
var React = require('react');
// Renders react component to string on server side
var ReactDOMServer = require('react-dom/server');
// FS : FileStream : Library for writing and reading files
var fs = require('fs');
// HTTP : Lib to create and manage web servers
var http = require('http');

// Created a React **Component**
class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Salut {this.props.name}
        </div>
      );
    }
  }

// Create an Element (instance of Component)
const element = (<HelloMessage name="Lyderic" />);
var counter = 0;
// Rendering the  HTML element to String
function renderFullPage(){
  const myAppHTML = ReactDOMServer.renderToString(element);
  const myFullHTMLDocument = `
  <html>
  <head>
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
  ${myAppHTML}
  <p> Counter : ${++counter} </p>
  </body>
  </html>`;
return myFullHTMLDocument;
}

/* THREE WAYS TO DISPLAY HTML TXT */

/* 1) Display text in a console */
console.log("Voici ci dessous le composant react converti en HTML");
console.log(renderFullPage());

/* 2) Generate an HTML File */
fs.writeFile("./dist/experiment2.html",
            renderFullPage(),
             err => {
              if (err) {
                console.error(err)
                return
              }
            }
);

/* 3) Sending HTML over the wire (via a server) */ 
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(renderFullPage());
};

const port = 8000, host = "localhost";
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});