defaultdict
-----------

Nodejs port of python [defaultdict](http://docs.python.org/2/library/collections.html#collections.defaultdict)

examples
--------

```javascript
var DefaultDict = require('defaultdict')

// create dict
var dict = new DefaultDict('baz');

// works like normal dict
dict.set('foo', 'bar');
dict.get('foo');
//=> 'bar'

// get undefined keys
dict.get('qux');
//=> 'baz'
```
