import "./App.css";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Section from "./components/Section";
import Premii from "./components/Premii";
import SectiuneAbc from "./components/SectiuneAbc";
import Eveniment from "./components/Eveniment";
import Team from "./components/Team";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";

function App() {
  return (
    <>
      <Header />
      {/* <Slider /> */}
      {/* <FrontPage /> */}
      <Wrapper>
        <Section
          title="Ce este Abecedarul Carierei?"
          content="Abecedarul Carierei este un proiect realizat de Organizația Studenților din Universitatea de Vest din Timișoara (OSUT), cu scopul de a ghida tinerii aflați la început de drum spre o carieră de succes.
          <br />
          Inițiativa care a luat naștere în 2014, ajunge anul acesta la cea de a VIII-a ediție și aduce cu ea din ce în ce mai multe oportunități de dezvoltare pentru curioși."
        />
        <Premii />

        <Section title="Secțiunile Abecedarului Carierei" />

        {/* ABC-UL ANGAJĂRII */}
        <SectiuneAbc
          title="ABC-ul angajării"
          content="Abordează teme actuale din sfera economică. Astfel, participanții își vor putea crea o idee de ansamblu asupra unor subiecte precum: gestionarea unui buget, educația financiară sau principiile de bază ale TVA-ului"
        />
        <Eveniment
          title="Orice calificare poate deveni o carieră în domeniul spațial"
          om="Daciana Sferle"
          data="15 Aprilie, ora 19:00"
          poza="./img/evenimente/Daciana-Sferle.png"
          descriere="Te-ai întrebat vreodată de ce Social Media pare așa de ușor pentru unele branduri, sau cum de acestea reușesc să strângă un număr impresionant de interacțiuni?
          În acest curs vom prezenta cele mai importante rețele de socializare (Facebook, Instagram, Youtube, Linkedin, Twitter, Google+,, Pinterest) si motede prin care acestea pot fi cucerite."
          link="https://google.com"
        />
        <Eveniment
          title="Branding personal"
          om="Centrul de Consiliere și Orientare în Carieră (CCOC) al UVT"
          data="16 Aprilie, ora 16:10"
          poza="echipa/Adela.png"
          descriere="Te-ai întrebat vreodată de ce Social Media pare așa de ușor pentru unele branduri, sau cum de acestea reușesc să strângă un număr impresionant de interacțiuni?
          În acest curs vom prezenta cele mai importante rețele de socializare (Facebook, Instagram, Youtube, Linkedin, Twitter, Google+,, Pinterest) si motede prin care acestea pot fi cucerite."
          link="https://google.com"
        />
        <Eveniment
          title="Bazele unui influencer în online"
          om="Corina Tamaș"
          data="16 Aprilie, ora 19:00"
          poza="img/evenimente/Corina-Tamas.png"
          descriere="Corina Tamaș este gazda unei emisiuni radio, Joy FM, iar în workshopul său Corina ne va povesti cum a ajuns în acest domeniu, care sunt pașii pe care trebuie să îi urmezi  precum și  tot ceea ce reprezintă „New Media”."
          link="https://google.com"
        />
        <Eveniment
          title="Informații despre piața muncii în orientare pe tot parcursul vieții"
          om="CCOC"
          data="23 Aprilie, ora 14:40"
          poza="echipa/Adela.png"
          descriere="Te-ai întrebat vreodată de ce Social Media pare așa de ușor pentru unele branduri, sau cum de acestea reușesc să strângă un număr impresionant de interacțiuni?
          În acest curs vom prezenta cele mai importante rețele de socializare (Facebook, Instagram, Youtube, Linkedin, Twitter, Google+,, Pinterest) si motede prin care acestea pot fi cucerite."
          link="https://google.com"
        />
        

        {/* ANTREPRENORIATUL DE LA A LA TINE */}
        <SectiuneAbc
          title="Antreprenoriatul de la A la Tine"
          content="Abordează teme actuale din sfera economică. Astfel, participanții își vor putea crea o idee de ansamblu asupra unor subiecte precum: gestionarea unui buget, educația financiară sau principiile de bază ale TVA-ului"
        />
        <Eveniment
          title="Eșecul în antreprenoriat și cum o luam de la capăt"
          om="Growceanu"
          data="14 Aprilie, ora 18:00"
          poza="echipa/Adela.png"
          descriere="Te-ai întrebat vreodată de ce Social Media pare așa de ușor pentru unele branduri, sau cum de acestea reușesc să strângă un număr impresionant de interacțiuni?
          În acest curs vom prezenta cele mai importante rețele de socializare (Facebook, Instagram, Youtube, Linkedin, Twitter, Google+,, Pinterest) si motede prin care acestea pot fi cucerite."
          link="https://google.com"
        />
        <Eveniment
          title="Social media pentru afacerea sau ONG-ul tău/Business în pandemie"
          om="Minds Hub"
          data="20 Aprilie, ora 19:00"
          poza="./img/evenimente/Lipovan-Georgiana-Mihaela.jpg"
          descriere="Te-ai întrebat vreodată de ce Social Media pare așa de ușor pentru unele branduri, sau cum de acestea reușesc să strângă un număr impresionant de interacțiuni?
          În acest curs vom prezenta cele mai importante rețele de socializare (Facebook, Instagram, Youtube, Linkedin, Twitter, Google+,, Pinterest) si motede prin care acestea pot fi cucerite."
          link="https://google.com"
        />

        {/* ECONOMIA DE LA A LA NOI */}
        <SectiuneAbc
          title="Economia de la A la Noi"
          content="Abordează teme actuale din sfera economică. Astfel, participanții își vor putea crea o idee de ansamblu asupra unor subiecte precum: gestionarea unui buget, educația financiară sau principiile de bază ale TVA-ului"
        />
        <Eveniment
          title="Cum să investești la bursă"
          om="Rareș Mihăilă"
          data="21 Aprilie, ora 18:00"
          poza="./img/evenimente/Rares-Mihaila.jpg"
          descriere="Te-ai întrebat vreodată de ce Social Media pare așa de ușor pentru unele branduri, sau cum de acestea reușesc să strângă un număr impresionant de interacțiuni?
          În acest curs vom prezenta cele mai importante rețele de socializare (Facebook, Instagram, Youtube, Linkedin, Twitter, Google+,, Pinterest) si motede prin care acestea pot fi cucerite."
          link="https://google.com"
        />
        <Eveniment
          title="Educație Financiară"
          om="Cristian Chifoi "
          data="22 Aprilie, ora 18:00"
          poza="echipa/Adela.png"
          descriere="Te-ai întrebat vreodată de ce Social Media pare așa de ușor pentru unele branduri, sau cum de acestea reușesc să strângă un număr impresionant de interacțiuni?
          În acest curs vom prezenta cele mai importante rețele de socializare (Facebook, Instagram, Youtube, Linkedin, Twitter, Google+,, Pinterest) si motede prin care acestea pot fi cucerite."
          link="https://google.com"
        />
        <Eveniment
          title="Economia digitală"
          om="Alexandru Roja"
          data="23 Aprilie, ora 18:00"
          poza="echipa/Adela.png"
          descriere="Te-ai întrebat vreodată de ce Social Media pare așa de ușor pentru unele branduri, sau cum de acestea reușesc să strângă un număr impresionant de interacțiuni?
          În acest curs vom prezenta cele mai importante rețele de socializare (Facebook, Instagram, Youtube, Linkedin, Twitter, Google+,, Pinterest) si motede prin care acestea pot fi cucerite."
          link="https://google.com"
        />
        <Team />
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
}

export default App;
