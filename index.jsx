const BSJumbotron = require('react-bootstrap/lib/Jumbotron');
const React = require('react');
Object.assign = require('react/lib/Object.assign');

export default class extends React.Component {
  render() {
    return (
      <BSJumbotron style={Object.assign(this.props.style, {
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        })}>
        <div style={{width: '100%', textAlign: 'center'}}>
          {this.props.children}
        </div>
      </BSJumbotron>
    );
  }
}
