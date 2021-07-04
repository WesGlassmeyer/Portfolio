function toggle(id) {
  var main = document.getElementById("main");
  var project = document.getElementById(id);
  if (project.className === "slider close") {
    project.className = "slider";
    main.style.filter = "blur(20px)";
    main.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  } else {
    project.className = "slider close";
    main.style.filter = "blur(0px)";
    main.style.backgroundColor = "#181818";
  }
}
