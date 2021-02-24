import React from 'react'

export default function App(props) {
  const { team, update, submit } = props;
  
  const onUpdate = evt => {
    const {name, value} = evt.target;
    update(name, value);
  }
  const onSubmit = evt => {
    evt.preventDefault()
    submit()
    let reset = document.getElementsByTagName("input");
    reset[0].value = '';
    reset[1].value = '';
    reset = document.getElementsByTagName("select");
    reset[0].selectedIndex = 0;
    console.log(reset);
  }



  return (
    
    <form>
      <label>Name: 
        <input 
          name='name' 
          type='text' 
          value={team.name}
          onChange={onUpdate} 
          placeholder='type members name...'/>
      </label>
      <br/>
      <label>Email:
        <input 
          name='email' 
          type='text' 
          value={team.email}
          onChange={onUpdate} 
          placeholder='type members email...'/>
      </label>
      <br/>
      <label>Role
        <select value={team.role} name='role' onChange={onUpdate}>
            <option value=''>--- Select role.. ---</option>
            <option value='Backend Engineer'>Backend Engineer</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
            <option value='Designer'>Designer</option>
        </select>
      </label>
      <br/>
      <button onClick = {onSubmit}/* for some reason wont work if i do onSubmit in form */>submit</button>
    </form>
  );
}

