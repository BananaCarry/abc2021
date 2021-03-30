import "./App.css";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Section from "./components/Section";
import Premii from "./components/Premii";
import SectiuneAbc from "./components/SectiuneAbc";
import Eveniment from "./components/Eveniment";

function App() {
  return (
    <>
      <Header />
      {/* <Slider /> */}
      <Wrapper>
        <Section
          title="Ce este Abecedarul Carierei?"
          content="Abecedarul Carierei este un proiect realizat de Organizația Studenților din Universitatea de Vest din Timișoara (OSUT), cu scopul de a ghida tinerii aflați la început de drum spre o carieră de succes.
          <br />
          Inițiativa care a luat naștere în 2014, ajunge anul acesta la cea de a VIII-a ediție și aduce cu ea din ce în ce mai multe oportunități de dezvoltare pentru curioși."
        />
        <Premii />
        <Section title="Secțiunile Abecedarului Carierei" />
        <SectiuneAbc
          title="Economia de la A la Noi"
          content="Abordează teme actuale din sfera economică. Astfel, participanții își vor putea crea o idee de ansamblu asupra unor subiecte precum: gestionarea unui buget, educația financiară sau principiile de bază ale TVA-ului"
        />
        <Eveniment
          title="Eșecul în antreprenoriat și cum o luam de la capăt"
          om="Growceanu"
          data="14 Aprilie, ora 18:00"
          poza="echipa/Adela.png"
          descriere="Te-ai întrebat vreodată de ce Social Media pare așa de ușor pentru unele branduri, sau cum de acestea reușesc să strângă un număr impresionant de interacțiuni?
          În acest curs vom prezenta cele mai importante rețele de socializare (Facebook, Instagram, Youtube, Linkedin, Twitter, Google+,, Pinterest) si motede prin care acestea pot fi cucerite."
        />
        <Eveniment
          title="Eșecul în antreprenoriat și cum o luam de la capăt"
          om="Growceanu"
          data="14 Aprilie, ora 18:00"
          poza="echipa/Adela.png"
          descriere="Te-ai întrebat vreodată de ce Social Media pare așa de ușor pentru unele branduri, sau cum de acestea reușesc să strângă un număr impresionant de interacțiuni?
          În acest curs vom prezenta cele mai importante rețele de socializare (Facebook, Instagram, Youtube, Linkedin, Twitter, Google+,, Pinterest) si motede prin care acestea pot fi cucerite."
        />
        <Eveniment
          title="Eșecul în antreprenoriat și cum o luam de la capăt"
          om="Growceanu"
          data="14 Aprilie, ora 18:00"
          poza="echipa/Adela.png"
          descriere="Te-ai întrebat vreodată de ce Social Media pare așa de ușor pentru unele branduri, sau cum de acestea reușesc să strângă un număr impresionant de interacțiuni?
          În acest curs vom prezenta cele mai importante rețele de socializare (Facebook, Instagram, Youtube, Linkedin, Twitter, Google+,, Pinterest) si motede prin care acestea pot fi cucerite."
        />
      </Wrapper>
    </>
  );
}

export default App;
