node-paded-date
===============

simply create padded date strings


```js

var paddedDate = require('padded-date')

console.log(paddedDate(new Date()))


```
prints

```js

{ day: '04',
  month: '09',
  year: 2013,
  hours: '11',
  minutes: '30',
  seconds: '47' }

```

there are a few helpers i use alot hanging off of the main export,


paddedDate.fileDate

```sh
2013-09-04_113355
```

paddedDate.dbDate

```sh
2013-09-04 11:33:55
```
