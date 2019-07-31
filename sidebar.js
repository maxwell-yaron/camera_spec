function openMenu() {
  document.getElementById("menu").style.width = "250px";
  document.getElementById("menu_open").style.marginLeft = "250px";
}

function closeMenu() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("menu_open").style.marginLeft= "0";
}

function clicked() {
  alert('here');
}

var app = new Vue({
  el: "#menu",
  data: {
    list: sensors,
  },
  methods: {
    setCamera: function(mfr, cam) {
      var current = sensors[mfr][cam];
      // Set the width, height and Px size
      document.getElementById("sensor_name").innerHTML = cam;
      document.getElementById("width").value = current.width;
      document.getElementById("height").value = current.height;
      document.getElementById("px_size").value = current.pxsize;
      getFov();
    },
    showInfo: function(mfr, cam) {
      var current = sensors[mfr][cam];
      document.getElementById("camera_sensor").innerHTML = cam;
      document.getElementById("camera_width").innerHTML = current.width;
      document.getElementById("camera_height").innerHTML = current.height;
      document.getElementById("camera_pxsize").innerHTML = current.pxsize;
      document.getElementById("camera_readout").innerHTML = current.readout;
      document.getElementById("camera_dr").innerHTML = current.dynamic_range;
      document.getElementById("camera_datasheet").href = current.datasheet;
    }
  }
})

