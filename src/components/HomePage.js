import React from "react";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Flux, and React Router for ultra-responsive web apps.</p>
    </div>
  );
}
// traditionally, if only a single item is being exported from a file, you will use a default export. 
// The benefit of a default export is  requires a little less code to import it
// and the file doing the import can decide what to name that import
export default HomePage;
