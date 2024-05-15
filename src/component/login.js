import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
   
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    <center>
    <form class="shadow p-3 mb-5 bg-body-tertiary rounded" style={{width:'500px', height:'250px' , marginTop:'50px'}}>
  {/* <!-- Email input --> */}
  <div class="input-group mb-5">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" placeholder='Username' class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required/>
    </div>

  {/* <!-- Password input --> */}
  <div class="input-group mb-5">
      <span class="input-group-text" id="inputGroupPrepend2"><i class="bi bi-lock-fill"></i></span>
      <input type="password" placeholder='Password' class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required/>
    </div>

  

  {/* <!-- Submit button --> */}
  <Link to='/sign'> 
  <button type='submit'class="btn"  
       style={{fontWeight:'900',borderRadius:"10px",textDecoration:"none", color:'white',  backgroundColor:"grey" , padding:"10px", border:"1px solid white", fontSize:"15px" , width:"150px"}}>
        Login</button>
    </Link>

  
</form>
</center>
       
        
    </>
  )
}

export default Login