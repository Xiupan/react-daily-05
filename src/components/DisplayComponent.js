import React, {Component} from 'react'

class DisplayComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-block">
          {this.props.sayWhat}
        </div>
      </div>
    );
  }
}

export default DisplayComponent
