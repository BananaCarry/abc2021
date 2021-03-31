import React from 'react';

export default function Header() {
  return (
    <>
      <nav
        id="ribbon"
        style={{
          background: 'rgba(255,255,255,.95)',
          backdropFilter: 'blur(10px)',
          lineHeight: '80px',
          textAlign: 'right',
          padding: '0px 30px',
        }}
      >
        <img src="logo.png" id="logo" style={{ height: 50, float: 'left' }} />
        <a href="#evenimente" class="btn btn-primary btn-lg" style={{}}>
          Inscrie-te
        </a>
      </nav>
    </>
  );
}
