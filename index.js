function HideSolvedProblems() {
  let tableRow = document.querySelectorAll(".reactable-data tr");

  for (let key in tableRow) {
      if (Number(key) >= 0) {
          if (tableRow[key].children[0].getAttribute("value") === "ac") {
              tableRow[key].style.display = "none";
          }
      }
  }

}
