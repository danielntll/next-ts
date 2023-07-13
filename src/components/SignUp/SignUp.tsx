'use client'
import styles from './SignUp.module.css';
import signUp from "@/firebase/auth/signup";
import React from 'react';

const SignUp = () => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  // FUNCTIONS ----------------------
  const handleForm = async (event: any) => {
    event.preventDefault()

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error)
    }
    console.log(result);
  }
  // RETURN -------------------------
  return (
    <div className={`${styles.SignUp}`}>
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;