import React from "react";

function CourseForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Author</label>
        <input
          id="title"
          type="text"
          name="title"
          value={props.course.title}
          onChange={props.onChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            onChange={props.onChange}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          value={props.course.category}
          onChange={props.onChange}
          className="form-control"
        />
      </div>
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
