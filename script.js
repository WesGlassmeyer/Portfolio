function toggle(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.flexDirection = "column";
    x.style.justifyContent = "center";
    x.style.alignItems = "center";
  } else {
    x.style.display = "none";
  }
}
