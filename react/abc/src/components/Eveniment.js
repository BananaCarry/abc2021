import React from 'react';

export default function Eveniment(props) {
  return (
    <>
      <div class="col-lg-12">
        <div
          class="eveniment"
          style={{
            padding: '25px 0px',
            borderBottom: '1px solid #ddd',
            overflow: 'hidden',
          }}
        >
          <div className="poza-om">
            <img
              src={props.poza}
              style={{ width: '100%', borderRadius: '2%' }}
            />
          </div>
          <div className="desc-om">
            <h3 style={{ fontWeight: '900' }}>{props.title}</h3>
            <h6 style={{ opacity: 0.7 }}>{props.om}</h6>

            <div class="text-bold" style={{ marginBottom: 10 }}>
              🗓 {props.data}
            </div>

            <p style={{ fontSize: '.9rem' }}>{props.descriere}</p>
            <a
              href={props.link}
              class="btn btn-primary btn-lg"
              role="button"
              aria-disabled="true"
              target="_blank"
            >
              Înscrie-te!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
