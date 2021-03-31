import React from "react";

export default function SectiuneAbc(props) {
  return (
    <>
      <div class="col-md-12">
        <h4 class="subtitle">{props.title}</h4>
        <p>{props.content}</p> <br />
      </div>
    </>
  );
}
