'use strict';

var Twig = require('twig');
var twig = Twig.twig;
Twig.cache(false);

// pretty the json output, convenient for debugging
Twig.extendFilter('json', function(value) {
  return JSON.stringify(value || '', null, 2);
});

function twigCompile(data) {
  return twig({
      data: data.text,
      path: data.path
    });
}

function twigRenderer(data, locals) {
  return twigCompile(data).render(locals);
}

twigRenderer.compile = function(data) {
  return function(locals) {
    return twigCompile(data).render(locals);
  };
};

twigRenderer.twig = Twig;

module.exports = twigRenderer;
