import React, { Component } from "react";
import reducer from "./reducer.js";



class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liste:[]
    }
  }
Adding(input)
{
 if(input.trim())
 {
   const liste2 =this.state.liste;
   liste2.push(input);

  this.setState({
    liste:liste2,
  })
 }
}
  render() {
    // you should start your dispatcher with currentInput as data... (hint)
    /***************** */
    super.dispatch=super.currentInput;
    /***************** */

    return (
      
      <form className="form-container" onSubmit={e => e.preventDefault()}>
      <div>
        <input
          className="input-field"
          placeholder={"Task Description"}
          value={this.props.currentInput}
          onChange={e => {
            this.props.dispatch({
              type: "ADD_CURRENT_INPUT",
              data: e.target.value
              
            })
          }}
        />
      </div>
        <div>
          <button
            className="add-task-btn"
            onClick={() => {this.Adding(this.props.currentInput)
            }}
           // onClick={reducer => {
              // You will trigger your reducer with an action to add todo task here...
              /*********************** */
             // this.props.dispatch({
             //   type: "EXAMPLE_TASK_TO_HOMEWORK-1",
            //    data: reducer.target.value
                
            //  })
              /*********************** */
          //  }}
          >
            {"Add Task"}
            
          </button>
          <ol> {this.state.liste.map((text) => <li>{text}</li>)}</ol>
        </div>
      </form>
    );
  }
}

export default FormContainer;