import React ,{useState} from 'react';

function App() {
  const [Name,setName] = useState({firstname: '',lastname: '',email:'',gender:'',courses:'' });
  const [error,setError] = useState({firstname: '',lastname: '',email:'',gender:'',courses:'' });
  
  const onChangeName = (e) => {
    if (e.target.value ==="")
    { 
      setError({ ...error,[e.target.name]: `${e.target.name} is required`});
    }
    else
    {
      setError({ ...error,[e.target.name]:""})
    }
    setName({ ...Name, [e.target.name]: e.target.value});
  }
  const onSubmit = (e) =>{
    e.preventDefault()
    console.log(Name)
  }
   return (
    <>
    <h3>Controlled Forms</h3>
    <form onSubmit ={(e) => onSubmit(e)}>
      <div>
        <label> First Name : </label>
        <input 
        type='text' 
        required
        name='firstname'
        value={Name.firstname}
        onChange={(e) => onChangeName(e)}/>{' '}
        <span style={{ color:"red"}}>{error.firstname}</span>
      </div>
      <br/>
      
      <div>
        <label> Last Name : </label>
        <input 
        type='text' 
        name='lastname' 
        value={Name.lastname}
        required
        onChange={(e) => onChangeName(e)}/>
        <span style={{ color: "red" }}>{error.lastname}</span>
      </div>
      <br/>


      <div>
        <label> Email : </label>
        <input 
        type='text' 
        required
        name='email' 
        value={Name.email}
        onChange={(e) => onChangeName(e)}/>{' '}
        <span style={{ color: "red" }}>{error.email}</span>
      </div>
      <br/>

      <div>
        <label> Gender : </label>
        <input 
        type='radio' 
        name='gender' 
        value='male'
        onChange={(e) => onChangeName(e)}/>Male
        <input 
        type='radio' 
        name='gender'
        value='female'
        onChange={(e) => onChangeName(e)}/>Female{' '}
        <span style={{ color: "red" }}>{error.gender}</span>
      </div>
      <br/>


      <div>
        <label> Courses : </label>
        <select name="courses" onChange={(e) => onChangeName(e)}>
          <option> </option>
          <option>React.js</option>
          <option>Node.js</option>
          <option>Express.js</option>
          <option>Mongo</option>
        </select>{' '}
        <span style={{ color: "red" }}>{error.courses}</span>
      </div>
      <br/>


      <div>
        <button type='submit'> Submit </button> &nbsp;
        <button type='button' onClick={onChangeName}> Reset </button> &nbsp;
      </div>
    </form>
    </>
  );
}

export default App;
