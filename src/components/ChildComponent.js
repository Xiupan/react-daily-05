import React, {Component} from 'react'

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <input className="btn btn-primary" type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}

export default ChildComponent
