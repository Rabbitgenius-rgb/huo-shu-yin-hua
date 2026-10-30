import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.dirname(fileURLToPath(import.meta.url));
const common={bundle:true,format:'esm',platform:'browser',target:'es2022',loader:{'.jpg':'dataurl','.png':'dataurl'},minify:true,legalComments:'eof',nodePaths:[path.resolve(root,'../node_modules')]};
await build({...common,entryPoints:[path.join(root,'main.js')],outfile:path.join(root,'../assets/fire-tree-cinematic-v2.js')});
console.log('Built fire-tree cinematic v2.');
