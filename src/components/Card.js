import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const Card = (props) => {
  let course = props.course;
let like = props.like;
let setLike =props.setLike;
function likeHandler(){

  if(like.includes(course.id)){
    setLike((prev)=>prev.filter((id)=>(id !== course.id)))
    console.log("disliked")
  }
  else{
  if(like.length === 0){
    setLike([course.id])

  }else{
    setLike((prev)=>[...prev, course.id])
  }

  console.log("liked")
}
}

  return (
    <div style={{width: '300px', overflow: 'hidden',border: '1px', borderRadius: '12px', backgroundColor: 'grey',}} >
     
<div >
  <img style={{width: '300px'}} src={course.image.url} alt={course.title} />
  <button onClick={likeHandler}>
    {like.includes(course.id) ? <AiOutlineLike/> : <AiOutlineDislike/>}</button>
</div>
      <div style={{padding: '16px'}}>
      <p style={{fontWeight: 'bold'}}>{course.title}</p>
      <p style={{}}>{
      course.description.length > 100 ? (course.description.substr(0,100) + "..."): (course.description) 
      }</p>
      </div>

    </div>
  )
}

export default Card