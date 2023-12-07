import img1 from './foto1.png';
import img2 from './foto2.png';
import img3 from './foto3.png';
import img5 from './foto5.png';
import img6 from './foto6.png';
import { mappa, mappaMobile } from './map';

import mobile1 from './mobile1.png';
import mobile2 from './mobile2.png';
import mobile3 from './mobile3.png';
import mobile4 from './mobile4.png';
import mobile5 from './mobile5.png';
import mobile6 from './mobile6.png';
import mobileMap from './mobile9.png';
import mobile10 from './mobile10.png';
import mobile11 from './mobile11.png';

// const text1 = `In principio fu Ofelio Cherubini che alla metà del secolo scorso comprò il podere Scarnacuoia 288 nella zona vocata del Brunello di Montalcino. La sua terza figlia Giuliana e il marito Lorenzo Turchi, dopo 40 anni di esperienza di viticoltori per una grande azienda locale decisero, qualche anno fa, di riprendere la terra e le tradizioni familiari per lanciare POGGIO ALLE FORCHE, un brand di Brunello molto speciale.`;
// const text2 = `In edizione limitata, elaborato con tecniche artigianali e uve raccolte a mano, il marchio prende il nome dall’omonima tenuta a due passi dalla basilica di Sant’Antimo, a Castelnuovo dell’Abate, dove vengono prodotte una parte delle uve. Scarnacuoia 288, a poche centinaia di metri dal Castello di Montalcino, resta il cuore pulsante della produzione che non ha niente di industriale. Le uve pregiate sono coltivate in filari che arrivano fino al giardino della casa sul poggio dove Ofelio vive ancora e non c’è giorno, comprese le feste comandate, che Giuliana e Lorenzo non lavorino alla produzione dei loro vini.`;

const articleProdotti = {
  mobile: [
    { type: 'img', src: mobile1, spaceTop: true },
    { type: 'img', src: mobile2 },
    { type: 'img', src: mobile3, spaceTop: true },
    { type: 'img', src: mobile4 },
    { type: 'img', src: mobile5, spaceTop: true },
    { type: 'img', src: mobile6 },
    { type: 'img', src: mobileMap, spaceTop: true, id: 'map' },
    { type: 'img', src: mobile10 },
    { type: 'img', src: mobile11 },
  ],
  tablet: [
    { type: 'img', src: img1, full: true },
    { type: 'img', src: img2, full: true },
    { type: 'img', src: img3, full: true },
    { type: 'map', src: img5, id: 'map' }, // mappa },
    { type: 'img', src: img6, full: true, width: 100 },
  ],
  desktop: [
    { type: 'img', src: img1, full: true },
    { type: 'img', src: img2, full: true },
    { type: 'img', src: img3, full: true },
    { type: 'map', src: img5, id: 'map' }, //mappa },
    { type: 'img', src: img6, full: true, width: 100 },
  ],
};

export default articleProdotti;
