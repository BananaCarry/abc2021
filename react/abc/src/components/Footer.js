import React from "react";


export default function Footer() {
  return (
    <>
        <footer>
         <div class="container wrapper">
            <div class="row">
               <div class="col-md-3" style={{textAlign: "center", verticalAlign: "middle"}}>
                  <img src="logo_alb2.png" style={{width: "150px"}} /><br />
                  Avem scopul de a ghida tinerii aflați la început de drum spre o carieră de succes!
                  <div id="email-proiect"><img src="e-mail.png" style={{width: "30px"}} /> &nbsp; abc@osut.ro <br />
                  </div>
               </div>
               <div class="col-md-6" style={{textAlign: "center", verticalAlign: "middle"}}>
                  <h4>Un proiect marca OSUT</h4>
                  Organizația Studenților din Universitatea de Vest din Timișoara
                  <ul>
                     <li>
                        <img src="location-icon.png" class="icon-detalii" />
                        <a>bd. Vasile Pârvan nr. 4, etaj 2, cam. 247</a>
                     </li>
                     <li>
                        <img src="phone-icon.png" class="icon-detalii" />
                        <a href="tel:0256 592 181">(+40) 256 592 181 </a>
                     </li>
                     <li>
                        <img src="e-mail.png" class="icon-detalii" />
                        <a href="mailto:office@osut.ro">office@osut.ro </a>
                     </li>
                  </ul>
               </div>
               <div class="col-md-3" style={{textAlign: "center", verticalAlign: "middle",}}>
                  <h4>Contact:</h4>
                  <a href="https://www.facebook.com/abcdarul.carierei"><img class="logo-social" src="fb-icon.png" /></a> &nbsp;
                  <a href="https://www.instagram.com/abecedarulcarierei/"><img class="logo-social" src="insta-icon.png" /></a> &nbsp;
                  <a href="https://abc.osut.ro"><img class="logo-social" src="site-icon.png" style={{width: "36px", marginLeft: "5px", border: "1px solid black", background: "black", borderRadius: "50%"}} /></a>
               </div>
            </div>
         </div>
      </footer>
    </>
  );
}
