import React, { Component } from 'react';

class Form extends Component {
    state = {
        amount: 0
    }

// Reset input value to 0 
    resetState = (e) => {
        e.preventDefault()
        this.setState({
            amount: 0
        })
    }

  render() {

    return (
      <div>
        <form onSubmit={(e) => {this.props.SubmitAdding(e), this.resetState(e)}} className="SushiWallet">
            <input value={this.state.amount} name="amount" onChange={(e)=> this.setState({amount: 
             e.target.value})} className="adding-money" placeholder="Enter your amount"></input>
            <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;