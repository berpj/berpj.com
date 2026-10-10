import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {prepareMap} from '../../src/world/map.mjs';
import {roadMapSignature} from '../../src/world/roadMarkingsSignature.mjs';
import {planRoadMarkings} from './roadMarkingsPlan.mjs';

const source=new URL('../../public/data/bangkok-sukhumvit.json',import.meta.url);
const bytes=fs.readFileSync(source),map=prepareMap(JSON.parse(bytes)),started=performance.now();
const plan=planRoadMarkings(map);
const {paths,...geometry}=plan;
const baked={schemaVersion:1,attribution:'© OpenStreetMap contributors',license:'ODbL-1.0',licenseUrl:'https://opendatacommons.org/licenses/odbl/1-0/',sourceDataset:'public/data/bangkok-sukhumvit.json',sourceSha256:createHash('sha256').update(bytes).digest('hex'),mapSignature:roadMapSignature(map),generator:'node tools/world/build-road-markings.mjs',coordinateUnits:'local metres, Y-up, X east and Z south',geometryPrecisionMetres:.001,...geometry};
const output=new URL('../../src/world/roadMarkings.data.json',import.meta.url);fs.writeFileSync(output,JSON.stringify(baked)+'\n');
console.log(JSON.stringify({output:output.pathname,bytes:fs.statSync(output).size,buildMs:Math.round(performance.now()-started),stats:plan.stats}));
