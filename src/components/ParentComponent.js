import React, {Component} from 'react'
import ChildComponent from './ChildComponent'
import DisplayComponent from './DisplayComponent'

class ParentComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      whatToSay: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <input type="text" className="form-control" onChange={this.handleInput} placeholder="Say It, Don't Spray It!" />
          </form>
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}

export default ParentComponent
