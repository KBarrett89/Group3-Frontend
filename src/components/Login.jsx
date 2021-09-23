import React, { useState } from 'react';
import './Login.css';



function Login(props) {
  const username = useFormInput('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/dashboard');
    
  }

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

 
  return (
    <div id='LoginBar'>
      Secure Login<br /><br />
      <div>
        Personal ID<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type={passwordShown ? "text" : "password"} />
        <button onClick={togglePassword}>Show</button>
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
  const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;