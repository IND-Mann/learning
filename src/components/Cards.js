import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
  let courses = props.courses;
 let category = props.category;
 const [like, setLike]= useState([])

  function getCourses() {
    if(category === "All"){
          let allcourse = [];
    Object.values(courses).forEach(array => {
      array.forEach(courseData => {
        allcourse.push(courseData);
      });
    });
    return allcourse;
    }
    else{
     return courses[category];
    }

  }

 

  return (
    <div style={{display: 'flex', gap: 8,  flexWrap: "wrap", justifyContent: 'center', maxWidth: "1080px", margin: 'auto',
    
    }}>
      {
        getCourses().map((course) => (
          <Card key={course.id} course={course} 
          like={like}
        setLike={setLike} />
        ))
      }
    </div>
  );
};

export default Cards;
