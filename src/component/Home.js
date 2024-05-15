import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Home({deletePost,post}) {
  const [searchItem , setSearchItem] = useState('')
  function handleDelete(id){
    deletePost(id)
  }

  const filterPost = post.filter((el)=>(
    el.title.toLowerCase().includes(searchItem.toLowerCase())
  )) 
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>


    <div class="card shadow p-3 mb-5  rounded">
    
  <h5 class="card-header fs-3">Welcome to TODO App</h5>
 
  <input type="text"
   class="form-control" 
   id="exampleFormControlInput1" 
   placeholder="Search Here.."
   value={setSearchItem} onChange={(e)=>setSearchItem(e.target.value)}/>

  <div class="card-body">
    {
        filterPost.map((el)=>(
            <>
            <p class="m-2 fs-5"><span class="fs-4">Title: </span>{el.title}</p>
            <p class="m-2 mb-4 fs-5"><span class="fs-4">Content: </span>{el.content}</p>
            <a href='' class="shadow-sm p-2 m-2 mb-5 rounded" style={{backgroundColor:'red', color:'white'}}
             onClick={()=>handleDelete(el.id
              )}><i class="bi bi-x"></i></a>
              <Link to={`/edit/${el.id}`}>
              <a href='' class="shadow-sm p-2 m-2 mb-5 rounded" style={{backgroundColor:'green', color:'white'}}>
                <i class="bi bi-pen"></i></a>
              </Link><br/><br/>
            </>
        ))
      }
   <Link to='/add'>
      <button style={{fontWeight:'900',borderRadius:"10px", color:'white',  backgroundColor:"grey" , padding:"10px", border:"1px solid white", fontSize:"15px" , width:"150px"}}>Add Todo's</button>
      </Link>
  </div>
</div>
   
     </>
  )
}
