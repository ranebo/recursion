var stringifyJSON = function(obj) {

  if (typeof obj === "function" || obj === undefined || obj === null) {
      return 'null';
  }

  else if (Array.isArray(obj)) {
    var arr = [];

    _.each(obj, function(item) {
      arr.push(stringifyJSON(item));
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

  else {
    return typeof obj === "string" ? '"' + obj + '"' : obj + "";
  }

};


