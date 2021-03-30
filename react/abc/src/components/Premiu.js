import React from "react";

export default function Premiu(props) {
  return (
    <>
      <div
        class="col-md-4 premii"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <img src="img/prize.png" class="prize" />
        {props.content}
      </div>
    </>
  );
}
