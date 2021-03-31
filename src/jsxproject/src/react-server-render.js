
/* 
Example of an HelloWorld with React, 
This uses the JSX syntax.

3 commands :
- To init npm (only once) : npm init -y
- Installling : npm install babel-cli@6 babel-preset-react-app@3
- Launching babel :  npx babel --watch src --out-dir dist --presets react-app/prod
*/

var React = require('react');
var ReactDOMServer = require('react-dom/server');


class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Salut {this.props.name}
        </div>
      );
    }
  }

console.log("Voici ci dessous le composant react converti en HTML");
console.log(
  ReactDOMServer.renderToString(
    <HelloMessage name="Thierry" />)
);