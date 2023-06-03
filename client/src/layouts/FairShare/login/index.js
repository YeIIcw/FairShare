import PageLayout from 'examples/LayoutContainers/PageLayout';
import React from 'react';
import axios from 'axios';
import './styles.css';

function Login() {
  return (
    <PageLayout>
      <div className="container">
        <h2>Sign in to us</h2>
        <form action="/profile">
          <p>
            <label>Username or email address</label>
            <br />
            <input type="text" name="first_name" required />
          </p>
          <p>
            <label>Password</label>
            <br />
            <input type="password" name="password" required />
          </p>
          <p>
            <button id="sub_btn" type="submit">Login</button>
          </p>
        </form>
      </div>
    </PageLayout>
  );
}

export default Login;
