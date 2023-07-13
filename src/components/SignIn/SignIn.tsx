'use client'
import styles from './SignIn.module.css';
import signIn from "@/firebase/auth/signin";
import React from 'react';

const SignIn = () => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  // FUNCTIONS ----------------------
  const handleForm = async (event: any) => {
    event.preventDefault()

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error)
    }
    console.log(result);
  }
  // RETURN -------------------------
  return (
    <div className={`${styles.SignIn}`}>
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign in</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;