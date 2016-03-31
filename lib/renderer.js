'use strict';

var Twig = require('twig'),
  twig = Twig.twig;
Twig.cache(false);

function twigRenderer(data, locals) {
  var template = twig({
      data: data.text,
      path: data.path
  });
  return template.render(locals);
}

// twigRenderer.compile = function(data, locals) {
//   console.log('compile', data, locals);
//   return twig(data.text, {
//     filename: data.path
//   });
// };

module.exports = twigRenderer;