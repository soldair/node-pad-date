

module.exports = _formatDate
module.exports.dbDate = formatDBDate;
module.exports.fileDate = formatFileDate;

function formatDBDate(date,utc){
  //year-month-day hour:minutes:seconds
  var o = _formatDate(date,utc);
  return o.year+'-'+o.month+'-'+o.day+' '+o.hours+':'+o.minutes+':'+o.seconds;
}

function formatFileDate(date,utc){
  //year-month-day_hourminutesseconds
  var o = _formatDate(date,utc);
  return o.year+'-'+o.month+'-'+o.day+'_'+o.hours+''+o.minutes+''+o.seconds;
}

function _formatDate(d,utc){
  return {
    day:pad(utc?d.getUTCDate():d.getDate())
  , month:pad(utc?d.getUTCMonth()+1:d.getMonth()+1)
  , year:utc?d.getUTCFullYear():d.getFullYear()
  , hours:pad(utc?d.getUTCHours():d.getHours())
  , minutes:pad(utc?d.getUTCMinutes():d.getMinutes())
  , seconds:pad(utc?d.getUTCSeconds():d.getSeconds())
  }
}


function pad(n,t){
  t = t||2;
  n = n+"";
  while(n.length < 2) n = "0"+n;
  return n;
}

