'use strict';

var should = require('chai').should(); // eslint-disable-line

describe('Twig renderer', function() {
  var r = require('../lib/renderer');

  it('normal', function() {
    var body = [
      'Hello {{ name }}!'
    ].join('\n');

    r({text: body}, {
      name: 'world'
    }).should.eql('Hello world!');
  });

});
