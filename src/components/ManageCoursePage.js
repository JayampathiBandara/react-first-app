import React, { useState } from "react";
//import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});

  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }
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

    if (!formIsValid()) return;

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
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
