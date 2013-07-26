var DefaultDict = require('../index.js'),
    should      = require('should');

describe('DefaultDict', function() {
  describe('#get', function() {
    it('should get defined values', function() {
      var dict = new DefaultDict('baz');
      dict.set('foo', 'bar');
      dict.get('foo').should.eql('bar');
    });
    it('should get default for undefined values', function() {
      var dict = new DefaultDict([]);
      dict.get('baz').should.have.length(0);
    });
    it('should not give same object on successive default values', function() {
      var dict = new DefaultDict({});
      var value = dict.get('foo');
      value.key = 'defined-on-foo';
      dict.get('bar').should.eql({});
    });
    it('should persist changes for same key', function() {
      var dict = new DefaultDict({});
      var value = dict.get('foo');
      value.key = 'defined-on-foo';
      dict.get('foo').should.have.property('key', 'defined-on-foo');
    });
    it('should work for numbers', function () {
      var dict = new DefaultDict(0);
      dict.set('apples', dict.get('apples') + 1);
      dict.get('apples').should.eql(1);
    });
    it('should persit changes for same key for objects', function() {
      var dict = new DefaultDict({});
      dict.get('potatoes')['foo'] = 'bar';
      dict.get('potatoes').should.have.property('foo', 'bar');
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
