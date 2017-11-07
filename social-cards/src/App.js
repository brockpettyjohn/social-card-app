import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
          card: [],
          nameInput: "",
          ageInput: 0,
          locationInput: '',
          user: {
            name: '',
            age: 0,
            location: ''
          }
      }
      this.handleInput = this.handleInput.bind(this);
      this.addSocialCard = this.addSocialCard.bind(this);
  }
  handleInput(e, value){
    console.log(this.state)
    this.setState({
      [value]: e,
    });
  }
  addSocialCard(name, age, location) {
    console.log(this.state)
    const user = {...this.state.user}
    user.name = this.state.nameInput
    user.age = this.state.ageInput
    user.location = this.state.locationInput
    this.setState({
                  // user:{
                  //        name: this.state.user.name, 
                  //        age: this.state.user.age, 
                  //        location: this.state.user.location
                  //       },
                  user,
      card : [...this.state.card, user]
    })
  }
  render() {
    const people = this.state.card.map((item,i) => {
      return  <div key={i}>
                <div>{item.name}</div>
                <div>{item.age}</div>
                <div>{item.location}</div>
              </div>
    })
    return (
      <div className="App">
          <div className="social-card-form">
            <input 
            onChange={(e) => { this.handleInput(e.target.value, 'name') }} 
            placeholder="Name" 
            type="text" 
            name="name" 
            id="name" 
            />
            <input 
            onChange={(e) => { this.handleInput(e.target.value, 'age') }} 
            placeholder="Age" 
            type="text" 
            name="age" 
            id="age" 
            />
            <input 
            onChange={(e) => { this.handleInput(e.target.value, 'location') }} 
            placeholder="City" 
            type="text" 
            name="location" 
            id="location" 
            />
            <button 
            className="form-submit" 
            onClick={()=>this.addSocialCard(this.state.user.name, this.state.user.age, this.state.user.location)}>
            Submit
            </button>  
          </div>
          <div className="social-card-container">
            {people}
          </div>
      </div>
    );
  }
}
export default App;
