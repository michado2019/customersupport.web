import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignInOutResetHeader from '../components/SignInOutResetHeader';

function Signin() {
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
  const email = watch('email')
  const password = watch('password')

  console.log('email', email)
  console.log('password', password)

  const isValid = email && password



  return (
    <>
      <SignInOutResetHeader />
      <main className="signup-wrapper">
        <div className="signup">
          <div className="first signin other-than-signup">
          <h1>Welcome back, Scryber!</h1>
          <h3>Please enter your details</h3>
            <form onSubmit={ handleSubmit(onSubmit) }>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your company email" className={`${errors.email && "error-input"} `} {...register('email', {required:'Email is required', pattern:{value:/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, message:"Please enter a correct company email address"}})}/>
              <p className="error-msg">{ errors.email?.message }</p>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder="Password at least 8 characters" className={`${errors.password && "error-input"} `} {...register('password', {required:'Password is required', minLength:{value:8, message:"Password you input is different from your current password"}})}/>
              <p className="error-msg">{ errors.password?.message }</p>
              <div className="accept remember">
                <div className='remember-me'>
                  <input type="checkbox" name="" id="" />
                  <span className='remember-span'>Remember me</span>
                </div>
                <NavLink to={'/forget-password'} className="remember-forget" >Forgot password?</NavLink>
              </div>
              <input type="submit" disabled = {!isValid} value="Sign in" className={`${isValid && 'submit-valid'}`}/>
              <p>Don’t have an account? <NavLink  to={'/'}>Sign up</NavLink></p>
            </form>
          </div>
          <div className="second">
            <img src="img/signup-img.svg" alt="" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Signin