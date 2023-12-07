import title from '../common/title.png';
import subTitle from './subtitle.png';
import img1 from './La_tradizione_1.png';
import img2 from './La_tradizione_2.jpg';

const text1 = `In principio fu Ofelio Cherubini che alla metà del secolo scorso comprò il podere Scarnacuoia 288 nella zona vocata del Brunello di Montalcino. La sua terza figlia Giuliana e il marito Lorenzo Turchi, dopo 40 anni di esperienza di viticoltori per una grande azienda locale decisero, qualche anno fa, di riprendere la terra e le tradizioni familiari per lanciare POGGIO ALLE FORCHE, un brand di Brunello molto speciale.`;
const text2 = `In edizione limitata, elaborato con tecniche artigianali e uve raccolte a mano, il marchio prende il nome dall’omonima tenuta a due passi dalla basilica di Sant’Antimo, a Castelnuovo dell’Abate, dove vengono prodotte una parte delle uve. Scarnacuoia 288, a poche centinaia di metri dalla Fortezza di Montalcino, resta il cuore pulsante della produzione che non ha niente di industriale. Le uve pregiate sono coltivate in filari che arrivano fino al giardino della casa sul poggio dove Ofelio vive ancora e non c’è giorno che Giuliana e Lorenzo non lavorino alla produzione dei loro vini.`;

const articleTradizione = {
  mobile: [
    { type: 'txt', src: text1, title, subTitle },
    { type: 'imgBck', src: img1 },
    { type: 'txt', src: text2 },
    { type: 'imgBck', src: img2 },
  ],
  tablet: [
    { type: 'txt', src: text1, title: title, subTitle },
    { type: 'imgBck', src: img1 },
    { type: 'txt', src: text2 },
    { type: 'imgBck', src: img2 },
  ],
  desktop: [
    { type: 'txt', src: text1, title: title, subTitle },
    { type: 'imgBck', src: img1 },
    { type: 'imgBck', src: img2 },
    { type: 'txt', src: text2 },
  ],
};

export default articleTradizione;
