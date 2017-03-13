(function() {
  var queryInput = document.getElementById('query-input');
  queryInput.addEventListener('focus', function() {
    var overlayDiv = document.getElementById('overlay-div');
    overlayDiv.className += ' overlay';
  });
  queryInput.addEventListener('blur', function() {
    var overlayDiv = document.getElementById('overlay-div');
    overlayDiv.className = 'big-container';
  });
}());
