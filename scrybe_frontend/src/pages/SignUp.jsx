import React from "react";
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignInOutResetHeader from "../components/SignInOutResetHeader";

function Signup() {
  const {register, handleSubmit, watch, formState: { errors }} = useForm();
  /* eslint-disable no-unused-vars */
  const [userInfo, setUserInfo] = useState();
  /* eslint-enable no-unused-vars */
  const onSubmit = (data) => {
    console.log(data);
    setUserInfo(data);
    console.log(errors)
  }

  // Watch event for disable button
  const fullname = watch('fullname')
  const email = watch('email')
  const company = watch('company')
  const password = watch('password')

  console.log('fullname', fullname)
  console.log('email', email)
  console.log('company', company)
  console.log('password', password)

  const isValid = fullname && email && company && password

  

  return (
    <>
      <SignInOutResetHeader />

      <main className="signup-wrapper">
        <div className="signup">
          <div className="first">
          <h1>Create an account</h1>
          <h3>Let’s get you started</h3>
            <form onSubmit={ handleSubmit(onSubmit) }>
              <label htmlFor="fullname">Full name</label>
              <input type="text" name="fullname" id="fullname" placeholder="Enter your full name" className={`${errors.fullname && "error-input"} `} {...register('fullname', {required:'Name is required'})}/>
              <p className="error-msg">{ errors.fullname?.message }</p>

              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your company email" className={`${errors.email && "error-input"} `} {...register('email', {required:'Email is required', pattern:{value:/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, message:"Please enter a correct company email address"}})}/>
              <p className="error-msg">{ errors.email?.message }</p>

              <label htmlFor="company">Company</label>
              <input type="text" name="company" id="company" placeholder="Enter your company name" className={`${errors.company && "error-input"} `} {...register('company', {required:'Company name is required'})}/>
              <p className="error-msg">{ errors.company?.message }</p>

              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder="Enter your password" className={`${errors.password && "error-input"} `} {...register('password', {required:'Password is required', minLength:{value:8, message:"Password must be at least 8 characters"}})}/>
              <p className="error-msg">{ errors.password?.message }</p>

              <input type="submit" disabled = {!isValid} value="Create an account" className={`${isValid && 'submit-valid'}`} />
              <div className="accept up">
                <input type="checkbox" name="" id="" />
                <span>I have read and agree to <NavLink to={''}>Terms of Service</NavLink> and <NavLink to={''}>Privacy Policy</NavLink><br />Already have an account? <NavLink to={'/signin'}>Sign in</NavLink></span>
              </div>
            </form>
          </div>
          <div className="second">
            <img src="img/signup-img.svg" alt="" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Signup;
