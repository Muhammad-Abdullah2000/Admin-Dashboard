import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/v1/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {

      localStorage.setItem('token', json.authtoken);
      navigate("*");

    }
    else {
      alert("Invalid credentials");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }



  return (
    <>
      <section id='Login'>

        <div className="loginContainer">
          <div className="logCon">
            <div className="lgin">
              Login
            </div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="">Email</label>
              <input type="email" placeholder='Email' value={credentials.email} onChange={onChange} name="email"  />
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Password' value={credentials.password} onChange={onChange} name="password"  />

              <div className="btn">
                <button type="submit">Login</button>
              </div>
            </form>

            <div className="acc">
              <p>Don't have an account? <Link to={'/register'}> <span>Register here</span></Link></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login