import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage"; // With default export, import is easy
import { Redirect, Route, Switch } from "react-router-dom"; // without default export, , import is inside {}
import NotFoundPage from "./common/NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

function App() {
  /* no need with Route
  function getPage() {
    const route = window.location.pathname;
    if (route === "/courses") return <CoursesPage />;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }*/
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Redirect from="/about-page" to="/about" />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
