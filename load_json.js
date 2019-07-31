function loadJSON(file, callback) {
  var obj = new XMLHttpRequest();
  obj.overrideMimeType("application/json");
  obj.open("GET", file);
  obj.onreadystatechange = function () {
    if(obj.readyState == 4 && obj.status == 200) {
      callback(obj.responseText);
    }
  };
  obj.send();
}
