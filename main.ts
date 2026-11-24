// Validated entry program for make.fun competition w34
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "I dialed my missing son's phone just to hear his voicemail greeting once more in the quiet house. The ringtone started chiming softly from inside the drywall behind my headboard.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`, 'utf8');
