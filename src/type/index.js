
import text2d from './text2d.js';
import textApi from './textApi.js';
import p5Font from './p5.Font.js';

export default function(p5){
  p5.registerAddon(text2d);
  p5.registerAddon(textApi);
  p5.registerAddon(p5Font);
}

