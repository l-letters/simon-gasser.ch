document.addEventListener("DOMContentLoaded", function() {
  var checkbox = document.getElementById("sidebar-checkbox");
  if (checkbox) {
    var saved = localStorage.getItem("sidebar");
    if (saved === "open") {
      checkbox.checked = true;
    }
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        localStorage.setItem("sidebar", "open");
      } else {
        localStorage.setItem("sidebar", "closed");
      }
    });
  }
});