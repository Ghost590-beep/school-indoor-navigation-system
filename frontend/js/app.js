// Get all location points (circles) on the SVG map
var locationPoints = document.querySelectorAll(".map-overlay circle");

// Go through each location point one by one
for (var i = 0; i < locationPoints.length; i++) {
  // When a location point is clicked
  locationPoints[i].addEventListener("click", function () {
    // Get the name of the location from the data attribute
    var locationName = this.getAttribute("data-location");

    // Show the selected location
    alert("Location selected: " + locationName);
  });
}
