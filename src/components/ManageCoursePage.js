import React, { useState } from "react";
//import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

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

  function handleSubmit(event) {
    // prevent the paeg from posting back to server
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      {/*<Prompt when={true} message="Are you sure you want to leave?" />*/}

      {/* Here what ever values we pass to 
      <CourseForm tag they are assign to CourseForm(props) props property of the function */}
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
