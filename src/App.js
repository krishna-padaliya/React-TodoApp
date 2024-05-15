import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { useState } from 'react'
import Home from './component/Home'
import AddPost from './component/AddPost'
import Login from './component/login'
import Sign from './component/signup';
import EditPost from './component/EditPost'


export default function App(){
  const[post , setPost] = useState([])
  function addnewpost(title,content){
    const newPost = {
      id:Date.now(),
      title:title,
      content:content
    }
    setPost([...post,newPost])
  }
  function deletePost(id){
    setPost(post.filter((p)=>p.id !== id))
  }
  function editPost(id,title,content){
    let updatedContent = post.map((posts)=>(
      posts.id === id? {...posts , title : title , content : content}:posts
    ))
    setPost(updatedContent)
  }
  return(
    <Router>
      <div>
        <Routes>
       <Route path='/' element={<Login/>} />
          <Route path='/sign' element={<Sign/>}/>
          <Route path='/Home' element={<Home post={post} deletePost={deletePost}/>}/>
          <Route path='/add' element={<AddPost addnewpost={addnewpost}/>}/>
          <Route path='/edit/:id' element={<EditPost editPost={editPost} post={post}/>}/>
        </Routes>
      </div>
    </Router>
  )
}






