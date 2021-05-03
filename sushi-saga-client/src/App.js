import React, { Component } from 'react';
import Form from './containers/Form';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {

  state= {
    limit : 4,
    sushis: [],
    remaining: 100,
    renderPlates: []

  }


  componentDidMount() {
    fetch(API) 
      .then(res => res.json())
        .then(sushi => this.setState({
          sushis: sushi.map(s => {return {...s, eatenSushi: false, empty: false} })
        }))
  }

  showNextFour = () => {
    this.setState({
      limit: this.state.limit + 4
    })
  }

  eatSushi = (sushiObj) => {
    // find sushi from state of sushis
    if(this.state.remaining > sushiObj.price && sushiObj.empty === false) {
      this.setState({
        sushis: this.state.sushis.map(sushi => {
          if(sushi === sushiObj){ return {...sushi, eatenSushi: true, empty: true}}
          else return sushi
        }),
        remaining: this.state.remaining - sushiObj.price,
        renderPlates: [...this.state.renderPlates, 1]
      })
    }
  }

  SubmitAdding = (e) => {
     
     e.preventDefault()
     this.setState({
         remaining: this.state.remaining + parseInt(e.target.amount.value, 10),
     })
 }

 rotation = () => {
    let filterSushi = this.state.sushis.filter((sushi) => sushi.eatenSushi === false)
    console.log(filterSushi.length);
    if(filterSushi.length === 0 ) {
      this.componentDidMount()
    }
 }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushis} limit={this.state.limit} 
        showNextFour={this.showNextFour} eatSushi={this.eatSushi} />
        <Table remaining={this.state.remaining} renderPlates={this.state.renderPlates}/>
        <Form remaining={this.state.remaining} SubmitAdding={this.SubmitAdding}/>
        {this.rotation()}
      </div>
    );
  }
}

export default App;