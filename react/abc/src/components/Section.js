import React from "react";

export default function Section(props) {
  return (
    <>
      <div className="col-md-12">
        <h2>{props.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </>
  );
}
