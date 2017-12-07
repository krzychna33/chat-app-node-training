const moment = require('moment');

// var date = new Date();
//
// var months = date.getMonth();
// console.log(months);

var date = moment();

console.log(date.format('H:mm:ss'))
