// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === "function" || obj === undefined || obj === null) {
      return 'null';
  }

  else if (Array.isArray(obj)){
    var arr = [];

    _.each(obj, function(item, i){
      (typeof obj === "function" || obj === undefined) ? arr.push('null') : arr.push(stringifyJSON(item));
    });

    return '['+ arr + ']';
  }

  else if (typeof obj === "object") {
    var objArr = [];

    _.each(obj, function(value, key){
      if (typeof value !== "function" && value !== undefined) {
        objArr.push(stringifyJSON(key) + ':' + stringifyJSON(value));
      }
    });
    return '{' + objArr + '}';
  }


  else if (typeof obj === "string") {
    return '"' + obj + '"';
  }

  else {
    return _.identity(obj) + "";
  }

};


