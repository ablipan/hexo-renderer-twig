/* global hexo */

'use strict';

var renderer = require('./lib/renderer');

hexo.extend.renderer.register('twig', 'html', renderer, true);
