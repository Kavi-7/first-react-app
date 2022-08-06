import React from "react";

function AppBody() {
  return (
    <div
      className="jumbotron container text-left"
      style={{ marginTop: "80px", borderRadius: "10px" }}
    >
      <div className="container pt-3">
        <h1 style={{ fontWeight: "100px" }}>Hello, world!</h1>
        <p>
          This is a template for a simple marketing or informational website. It
          includes a large callout called the hero unit and three supporting
          pieces of content. Use it as a starting point to create something more
          unique.
        </p>
        <p>
          <a href="/#" className="btn btn-primary btn-lg">
            Learn more &raquo;
          </a>
        </p>
      </div>
    </div>
  );
}

export default AppBody;
