import React, { Component } from 'react';
import ListContacts from './ListContacts.js';


const contacts = [
  {
    "id": "ryan",
    "name": "Ryan Florence",
    "email": "ryan@reacttraining.com",
    "avatarURL": "http://localhost:5001/ryan.jpg"
  },
  {
    "id": "michael",
    "name": "Michael Jackson",
    "email": "michael@reacttraining.com",
    "avatarURL": "http://localhost:5001/michael.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "email": "tyler@reacttraining.com",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  },
  {
    "id": "mohamed",
    "name": "Mohamed Abdel Nasser",
    "email": "mohdabdellnasser1@gmail.com",
    "avatarURL": "http://localhost:5001/mohamed.jpg"
  }

]
class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts}/>
      </div>
    )
  }
}

export default App;
