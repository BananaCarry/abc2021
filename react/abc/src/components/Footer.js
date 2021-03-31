import React from 'react';
import Wrapper from './Wrapper';
export default function Footer() {
  return (
    <>
      <footer>
        <Wrapper>
          <div class="col-md-4 mb">
            <img src="logo_alb2.png" style={{ width: '150px' }} />
            <br />
            Avem scopul de a ghida tinerii aflați la început de drum spre o
            carieră de succes!
            <br />
            <a href="mailto:abc@osut.ro">abc@osut.ro</a>
          </div>
          <div class="col-md-4 mb">
            <h4>Un proiect marca OSUT</h4>
            Organizația Studenților din Universitatea de Vest din Timișoara
            <ul>
              <li>bd. Vasile Pârvan nr. 4, etaj 2, cam. 247</li>
              <li>
                <a href="tel:0256 592 181">(+40) 256 592 181 </a>
              </li>
              <li>
                <a href="mailto:office@osut.ro">office@osut.ro </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb">
            <h4>Social media</h4>
            <a href="https://www.facebook.com/abcdarul.carierei">
              <img class="logo-social" src="fb-icon.png" />
            </a>
            &nbsp;
            <a href="https://www.instagram.com/abecedarulcarierei/">
              <img class="logo-social" src="insta-icon.png" />
            </a>
            &nbsp;
            <a href="https://abc.osut.ro">
              <img
                class="logo-social"
                src="site-icon.png"
                style={{
                  width: '36px',
                  marginLeft: '5px',
                  border: '1px solid black',
                  background: 'black',
                  borderRadius: '50%',
                }}
              />
            </a>
          </div>
        </Wrapper>
      </footer>
    </>
  );
}
