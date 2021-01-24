import React, { useState } from "react";
//import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  /*function handleTitleChange(event) {
    //we dont use since course is immutable
    //course.title = event.target.value; 
    const updatedCourse = {
      ...course,
      title: event.target.value,
    };
    setCourse(updatedCourse);
  }*/
  function handleChange({ target }) {
    // {target} === const target = event.target
    // {target} = event
    //we dont use since course is immutable
    //course.title = event.target.value;
    const updatedCourse = {
      ...course,
      [target.name]: target.value,
    };
    setCourse(updatedCourse);
  }

  return (
    <>
      <h2>Manage Course</h2>
      {/*<Prompt when={true} message="Are you sure you want to leave?" />*/}
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
};

export default ManageCoursePage;
