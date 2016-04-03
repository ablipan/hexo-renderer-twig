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

 it('compile', function() {
    var body = [
      'Hello {{ name }}!'
    ].join('\n');

    var render = r.compile({
      text: body
    });

    render({
      name: 'world'
    }).should.eql('Hello world!');
  });
});
