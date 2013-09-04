var test = require('tape')

var paddate = require('../')


test("can get object",function(t){
  var o = paddate(new Date);

  console.log(o)

  t.ok(o.month,'should have month')

  t.end();
});


test("can get db date",function(t){
  var str = paddate.dbDate(new Date());

  console.log(str)

  t.equals(str.split(':').length,3,'should have formatted db date')

  t.end();
});

test("can get fileDate",function(t){
  var str = paddate.fileDate(new Date);

  console.log(str)

  t.ok(str,'should have file date')

  t.end();
});


