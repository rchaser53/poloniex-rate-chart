const chokidar = require('chokidar');
const shell = require('shelljs');

chokidar.watch('./src/ts', {ignored: /(^|[\/\\])\../}).on('change', (event, path) => {
  shell.exec('npm run tsc-src')
});