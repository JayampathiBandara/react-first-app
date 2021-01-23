import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]); // pass default value to return
  //state = { courses: [] };

  // If forgot to put [],  getCourses() will call in neve ending loop
  useEffect(() => getCourses().then((_courses) => setCourses(_courses)), []);

  /* after using useEffect() this method is useless
  // lifecycle method : run immediatly after component did mount
  componentDidMount() {
    //this.setState({ courses: getCourses() });
    getCourses().then(
      (courses) => {
        console.log("courses", courses);
        this.setState({ courses: courses });
      },
      (error) => console.log(error)
    );
  }*/

  //render() { render is not required since this [component class] was changed to function
  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
  // }
}

export default CoursesPage;
