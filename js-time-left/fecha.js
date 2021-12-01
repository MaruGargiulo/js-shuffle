var moment = require('moment');
moment.locale('cs');
console.log(moment.locale()); // cs

moment.locale('es');
console.log(moment.locale()); // cs

moment.locale('es-ES');
console.log(moment.locale()); // cs
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

moment.locale('es-AR');
console.log(moment.locale()); // cs
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

moment.locale('pt-BR');
console.log(moment.locale()); // cs
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))