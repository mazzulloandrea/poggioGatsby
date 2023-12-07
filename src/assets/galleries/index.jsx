import tradizione1 from "./tradizione/foto1.png";
import tradizione2 from "./tradizione/foto2.png";
import tradizione3 from "./tradizione/foto3.png";
import tradizione4 from "./tradizione/foto4.png";
import tradizione5 from "./tradizione/foto5.png";
import tradizione6 from "./tradizione/foto6.jpg";
import tradizione7 from "./tradizione/foto7.png";
// import tradizione1Colored from './tradizione/foto1_colored.png';
import tradizioneGif1 from "./tradizione/tradizione.gif";
// import tradizioneVideo from '../video/tradizione.MP4';
const tradizioneVideo = "https://youtu.be/6_tNfQl8DOc";

import viti1 from "./viti/foto1.png";
import viti2 from "./viti/foto2.png";
import viti3 from "./viti/foto3.png";
import viti4 from "./viti/foto4.png";
import viti5 from "./viti/foto5.png";
import viti6 from "./viti/foto6.png";
// import viti1Colored from './viti/foto1_colored.png';
import vitiGif1 from "./viti/viti.gif";

import cantina1 from "./cantina/foto1.png";
import cantina2 from "./cantina/foto2.png";
import cantina3 from "./cantina/foto3.png";
import cantina4 from "./cantina/foto4.png";
import cantina5 from "./cantina/foto5.png";
import cantina6 from "./cantina/foto6.png";
// import cantina1Colored from './cantina/foto1_colored.png';
import cantinaGif1 from "./cantina/cantina.gif";

import prodotti1 from "./prodotti/foto1.png";
import prodotti2 from "./prodotti/foto2.png";
import prodotti3 from "./prodotti/foto3.png";
import prodottiGif1 from "./prodotti/prodotti.gif";

// import prodotti1Colored from './prodotti/foto1_colored.png';

import arrowSx from "./arrowSx.png";
import arrowDx from "./arrowDx.png";
import resizescreenIcon from "./resizescreen";
import fullscreenIcon from "./fullscreen";

const galleries = {
	tradizione: {
		list: [
			tradizione1,
			tradizione2,
			tradizione3,
			tradizione4,
			tradizione5,
			tradizione6,
			tradizione7,
		],
		// colored: tradizione1Colored,
		gif: tradizioneGif1,
		video: tradizioneVideo,
	},
	viti: {
		list: [viti1, viti2, viti3, viti4, viti5, viti6],
		// colored: viti1Colored,
		gif: vitiGif1,
	},
	cantina: {
		list: [cantina1, cantina2, cantina3, cantina4, cantina5, cantina6],
		// colored: cantina1Colored,
		gif: cantinaGif1,
	},
	prodotti: {
		list: [prodotti1, prodotti2, prodotti3],
		// colored: prodotti1Colored,
		gif: prodottiGif1,
	},
	galleryCustom: {
		arrowSx,
		arrowDx,
		fullscreenIcon,
		resizescreenIcon,
	},
};

export default galleries;
