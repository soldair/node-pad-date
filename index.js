

module.exports = _formatDate
module.exports.dbDate = formatDBDate;
module.exports.fileDate = formatFileDate;

function formatDBDate(date){
  //year-month-day hour:minutes:seconds
  var o = _formatDate(date);
  return o.year+'-'+o.month+'-'+o.day+' '+o.hours+':'+o.minutes+':'+o.seconds;
}

function formatFileDate(date){
  //year-month-day_hourminutesseconds
  var o = _formatDate(date);
  return o.year+'-'+o.month+'-'+o.day+'_'+o.hours+''+o.minutes+''+o.seconds;
}

function _formatDate(d){
  return {
    day:pad(d.getDate())
  , month:pad(d.getMonth()+1)
  , year:d.getFullYear()
  , hours:pad(d.getHours())
  , minutes:pad(d.getMinutes())
  , seconds:pad(d.getSeconds())
  }
}


function pad(n,t){
  t = t||2;
  n = n+"";
  while(n.length < 2) n = "0"+n;
  return n;
}

