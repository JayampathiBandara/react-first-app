import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";

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

  function renderRow(course) {
    return (
      <tr key={course.id.toString()}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  //render() { render is not required since this [component class] was changed to function
  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{courses.map((course) => renderRow(course))}</tbody>
      </table>
    </>
  );
  // }
}

export default CoursesPage;
