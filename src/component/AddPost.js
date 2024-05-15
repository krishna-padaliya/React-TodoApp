import React from 'react'
import { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

export default function AddPost({addnewpost}) {
const[title , setTitle] = useState('')
const[content ,setContent] = useState('')
const navigate = useNavigate()

function handleSubmit(e){
    e.preventDefault()
    addnewpost(title,content)
    navigate('/')
}

  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    
<div class="card shadow p-3 mb-5 rounded">
  <div class="card-header fs-3">Create Todo Task </div>
  <div class="card-body">
  <form onSubmit={handleSubmit}>
       <input
       class="form-control"
       placeholder='Title'
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       ></input><br/>
       <input
       class="form-control"
       placeholder='Content'
       value={content}
       onChange={(e)=>setContent(e.target.value)}
       ></input><br/>
       <button type='submit'class="btn"  
       style={{fontWeight:'900',borderRadius:"10px",textDecoration:"none", color:'white',  backgroundColor:"grey" , padding:"10px", border:"1px solid white", fontSize:"15px" , width:"150px"}}>
        Submit</button>
        <Link to='/'> 
        <button type='submit'class="btn"  
       style={{fontWeight:'900',borderRadius:"10px",textDecoration:"none", color:'white',  backgroundColor:"grey" , padding:"10px", border:"1px solid white", fontSize:"15px" , width:"150px"}}>
        Home</button>
        </Link>
      </form>
  </div>
</div>
   
    <div>
      

      
    </div>
    
    </>
  )
}
