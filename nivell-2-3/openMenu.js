
    function openMenu() {
      var x = document.getElementById("navbar");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
      var y = document.getElementById("top-header");
      if (y.className === "top-header") {
        y.className += " responsive";
      } else {
        y.className = "top-header";
      }
    }
