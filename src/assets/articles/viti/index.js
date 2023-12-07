import title from '../common/title.png';
import subTitle from './subtitle.png';
import img1 from './Le_viti_1.png';
import img2 from './Le_viti_2.png';

const text1 = `“Il vino nasce in vigna e non in cantina”, dice Lorenzo che si definisce vignaiolo. Dei suoi filari conosce assolutamente tutto, compresi le problematiche e l’immenso fascino di cui è fiero.
Scarnacuoia 288 e Poggio alle Forche sono fatte di piccoli appezzamenti che danno caratteristiche diverse alle uve.  Le altitudini disuguali delle colline in cui sono coltivate sfruttano microclimi che non sono gli stessi, come i terreni e le esposizioni che danno al Sangiovese note e sfumature che determinano
la particolarità dei prodotti.`;

const text2 = `Vecchie vigne e giovani piante sono all’origine dei blend che danno al Poggio alle Forche
le sfumature di gusto che lo contraddistinguono.`;

const articleViti = {
  mobile: [
    { type: 'txt', src: text1, title, subTitle },
    { type: 'imgBck', src: img1 },
    { type: 'txt', src: text2 },
    { type: 'imgBck', src: img2 },
  ],
  tablet: [
    { type: 'txt', src: text1, title, subTitle },
    { type: 'imgBck', src: img1 },
    { type: 'txt', src: text2 },
    { type: 'imgBck', src: img2 },
  ],
  desktop: [
    { type: 'txt', src: text1, title, subTitle },
    { type: 'imgBck', src: img1 },
    { type: 'imgBck', src: img2 },
    { type: 'txt', src: text2 },
  ],
};

export default articleViti;
