const BSJumbotron = require('react-bootstrap/lib/Jumbotron');
const React = require('react');
const style = require('stilr-classnames');

export default class extends React.Component {
  render() {
    return (
      <BSJumbotron {...style({
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
          }, this.props.className)}>
        <div className={this.props.fluid ? 'container-fluid' : 'container'}
          {...style({width: '100%', textAlign: 'center'})}>
          {this.props.children}
        </div>
    </BSJumbotron>
  );
  }
}
