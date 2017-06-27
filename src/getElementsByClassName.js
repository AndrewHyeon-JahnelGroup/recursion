// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var output = [];
  var nodeCheck = function(node) {
    if (node.classList && node.classList.contains(className)) {
      output.push(node);
    }

    for (var i = 0; i < node.childNodes.length; i++) {
      nodeCheck(node.childNodes[i]);
    }

    return output;
  };

  nodeCheck(document.body);

  return output;
};
