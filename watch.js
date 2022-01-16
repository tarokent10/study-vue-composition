const chokidar = require('chokidar');

// One-liner for current directory
chokidar.watch('.').on('all', (event, path) => {
  // test
  console.log(event, path);
});
