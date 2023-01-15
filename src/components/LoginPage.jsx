import React from 'react'


const LoginPage = () => {
  return (
 <div className="container">
      
      <div className="wrapper">
       <div>
      <h1 className='title'> MOMAID</h1>
      <p className="welcome-text"> Hello, Welcome back to your account</p>

      </div>

      <div >
      <label for="" className="field-title1">Username</label><br/>
  <input type="text" className="text-field1" placeholder=" not more than 8 characters"></input>
</div>

<div>
      <label for="" className="field-title2">Password</label><br/>
  <input type="text" className="text-field2"placeholder=" 6-10 characters"></input>
  <p className="text-buttom">Forgot password?</p>
</div>
<div className="checker">
<input type="checkbox"value=""></input>
<label for="">Remember me</label>
</div>

<button className="btn" type="button">LOGIN</button>
<p className='buttomtext'>Don't have an account yet? <a href="#" className='signup-text'>Signup</a></p>

</div>
    
    </div>

  )
}

export default LoginPage;