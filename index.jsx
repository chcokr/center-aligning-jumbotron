const BSJumbotron = require('react-bootstrap/lib/Jumbotron');
const React = require('react');
Object.assign = require('react/lib/Object.assign');

export default class extends React.Component {
  render() {
    const baseStyle = {
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    };
    let style = {};
    if (!this.props.style) {
      style = baseStyle;
    } else {
      style = Object.assign(this.props.style, baseStyle);
    }

    return (
      <BSJumbotron style={style}>
        <div className={this.props.fluid ? 'container-fluid' : 'container'}
            style={{textAlign: 'center'}}>
          {this.props.children}
        </div>
      </BSJumbotron>
    );
  }
}
