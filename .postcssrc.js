// ESM -- browser
// CommonJS -- node.js

// import autoprefixer from 'autoprefixer'와 같음 -- browser
// const autoprefixer = require('autoprefixer')

/* -- browser
export{
  plugin: [
    autoprefixer
  ]
}
*/

module.exports = {
  plugin: [
    require('autoprefixer')
  ]
}