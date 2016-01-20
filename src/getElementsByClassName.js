
var getElementsByClassName = function(className) {
  var elements = [];

  var recurse = function(obj) {
    if (obj.classList !== undefined && obj.classList.contains(className)) {
      elements.push(obj);
    }

    _.each(obj.childNodes, function(node) {
      recurse(node);
    });
  }

  recurse(document.body);
  return elements;
};
