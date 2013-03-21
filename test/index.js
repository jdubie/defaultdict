var DefaultDict = require('../index.js'),
    should      = require('should');

describe('DefaultDict', function() {
  describe('#get', function() {
    it('should get defined values', function() {
      var dict = new DefaultDict(function() { return 'baz'; });
      dict.set('foo', 'bar');
      dict.get('foo').should.eql('bar');
    });
    it('should get default for undefined values', function() {
      var dict = new DefaultDict(function() { return []; });
      dict.get('baz').should.have.length(0);
    });
    it('should not give same object on successive default values', function() {
      var dict = new DefaultDict(function() { return {}; });
      var value = dict.get('foo');
      value.key = 'defined-on-foo';
      dict.get('bar').should.eql({});
    });
    it('should persist changes for same key', function() {
      var dict = new DefaultDict(function() { return {}; });
      var value = dict.get('foo');
      value.key = 'defined-on-foo';
      dict.get('foo').should.have.property('key', 'defined-on-foo');
    });
  });
  describe('#set', function() {
    it('should be able to get previous set value', function() {
      var dict = new DefaultDict('default');
      dict.set('foo', 'bar');
      dict.get('foo').should.eql('bar');
    });
  });
});
