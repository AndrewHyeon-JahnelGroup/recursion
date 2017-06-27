
var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  } else if (obj === undefined || typeof obj === 'function') {
    return '';
  }

  //passed in object is normal object
  var keys = Object.keys(obj);
  if (obj.constructor === Object) {

    var output = '{';

    if (keys.length === 0) {
      return '{}';

    } else if (keys.length === 1) {
      for (var i in obj) {
        output += '"' + i + '":' + stringifyJSON(obj[i]);
      }

    } else {

      for (var i in obj) {

        if (obj[i] === undefined || typeof obj[i] === 'function') {
          output += stringifyJSON(obj[i]);

        } else if (i === keys[keys.length - 1]) {
          output += '"' + i + '":' + stringifyJSON(obj[i]);
        } else {
          output += '"' + i + '":' + stringifyJSON(obj[i]) + ',';
        }
      }
    }
    return output + '}';
    //passed in obj is array
  } else if (Array.isArray(obj)) {

    if (obj.length === 0) {
      return '[]';

    } else if (obj.length === 1) {
      return '[' + stringifyJSON(obj[0]) + ']';

    } else {
      var out2 = '';

      for (var i = 0; i < obj.length; i++) {

        if (i === obj.length - 1) {
          out2 += stringifyJSON(obj[i]);

        } else {
          out2 += stringifyJSON(obj[i]) + ',';
        }
      }
      return '[' + out2 + ']';
    }

  } else {
    if (typeof obj === 'string') {
      return '"' + obj + '"';
    }
    return obj.toString();
  }
  return 'input is not a valid argument for stringifyJSON' + obj;
};
