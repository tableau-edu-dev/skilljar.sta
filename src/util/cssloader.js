function addCSS(linkList) {
  var head = document.getElementsByTagName('HEAD')[0];
  var linkCount = linkList.length;
  for (var i = 0; i < linkCount; i++) {
    var obj = createCSSObject(linkList[i]);
    head.appendChild(obj);
  }
}

function createCSSObject(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  return link;
}
