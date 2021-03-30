import React from "react";

export default function Eveniment({ title, om, data, poza, descriere }) {
  return (
    <>
      <div class="col-lg-12">
        <div
          class="eveniment"
          style={{
            padding: "25px 0px",
            borderBottom: "1px solid #ddd",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              float: "left",
              width: "20%",
            }}
          >
            <img src={poza} style={{ width: "100%" }} />
          </div>
          <div style={{ float: "right", width: "74%" }}>
            <h3 style={{ fontWeight: "900" }}>{title}</h3>
            <h6 style={{ opacity: 0.7 }}>{om}</h6>

            <div class="text-bold" style={{ marginBottom: 10 }}>
              🗓 {data}
            </div>

            <p style={{ fontSize: ".9rem" }}>{descriere}</p>
          </div>
        </div>
      </div>
    </>
  );
}
