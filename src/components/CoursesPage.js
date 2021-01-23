import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = { courses: [] };

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
  }
  renderRow(course) {
    return (
      <tr key={course.id.toString()}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }
  render() {
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
          <tbody>{this.state.courses.map(this.renderRow)}</tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
