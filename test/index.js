var DefaultDict = require('../index.js'),
    should      = require('should');

describe('DefaultDict', function() {
  describe('#get', function() {
    it('should get defined values', function() {
      var dict = new DefaultDict([]);
      dict.set('foo', 'bar');
      dict.get('foo').should.eql('bar');
    });
    it('should get default for undefined values', function() {
      var dict = new DefaultDict([]);
      dict.get('baz').should.have.length(0);
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
