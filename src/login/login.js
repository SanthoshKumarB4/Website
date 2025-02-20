import React, {useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './login.css';


const Login = () => {
  const [email ,Email] =useState('')
  const [password , Password] = useState('')
  const [error, Error]=useState('')
  const navigate = useNavigate();



  const handleSubmit =(e)=>{
    e.preventDefault();
    
    const validEmail ='sandy@gmail.com';
    const validPassword ='1234';

    if (email === validEmail && password === validPassword){
      navigate('/home');

    } 
    else{
      Error('Invalid email or password');
    }
  }
  return (
    <div className="App">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email"  onChange={(e)=> Email(e.target.value)}  required />
          <input type="password" placeholder="Password" onChange={(e)=> Password(e.target.value)}required />
        <input type="submit"  />  
        </form>
        {error && <p className='error'>{error}</p>}
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
