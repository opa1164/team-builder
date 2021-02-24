import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Form from './Form.js'
const initialTeam = [];
const initialState = {
  name:  '',
  email: '',
  role:  ''
}

function App() {
  const[team, setTeam] = useState(initialTeam);

  const[formInfo, setFormInfo] = useState(initialState);

  const submit = () => {

    const newMember = {
      name: formInfo.name.trim(),
      email: formInfo.email.trim(),
      role: formInfo.role.trim()
    }
    if (!formInfo.name || !formInfo.email || !formInfo.role) {
      return;
    }
    setTeam(team.concat(newMember));
    setFormInfo(initialState);
  }
  console.log(formInfo);

  const update = (inputName, inputValue) => {
    setFormInfo({...formInfo,[inputName]: inputValue});
  }

  return (
    <div className="App">
      <Form team = {team} update = {update} submit = {submit}/>

      {
        team.map((member, index )=> {
          return (
            <div key={index}>
            <h2>{member.name}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
