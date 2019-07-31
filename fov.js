function getFov(known_cam = true) {
  if(!known_cam) {
    document.getElementById("sensor_name").innerHTML = "UNKNOWN";
  }
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  var px_size = document.getElementById("px_size").value;
  var flength = document.getElementById("flength").value;
  var dist = document.getElementById("dist").value * 10000; // Convert to um.
  var obj = document.getElementById("obj").value * 10000; // Convert to um.
  var w_px = width * px_size; // convert to um.
  var h_px = height * px_size; // convert to um.
  var fl_px = flength * 1000; // convert to um.

  var hfov_rad = 2 * Math.atan(w_px/(2*fl_px));
  var vfov_rad = 2 * Math.atan(h_px/(2*fl_px));
  var hfov_deg = hfov_rad * (180.0 / Math.PI);
  var vfov_deg = vfov_rad * (180.0 / Math.PI);

  // Calculate number of pixels across object.
  // Start with size of effective image plane.
  var im_plane = 2 * (dist * Math.tan((hfov_rad/2)));
  // Next get the proportional number of pixels.
  var pix = (obj / px_size) * (width / im_plane);

  document.getElementById("hfov").innerHTML = hfov_deg.toFixed(3);
  document.getElementById("vfov").innerHTML = vfov_deg.toFixed(3);
  document.getElementById("pixels").innerHTML = pix.toFixed(1);
  // Draw FOVs
  var win_hfov = document.getElementById("window_hfov");
  var win_vfov = document.getElementById("window_vfov");
  drawAngle(win_hfov, hfov_rad);
  drawAngle(win_vfov, vfov_rad);
}

function drawAngle(elem, angle) {
  var ctx = elem.getContext('2d');
  var width = ctx.canvas.width;
  var height = ctx.canvas.height;
  var L = width / 1.5;
  var a = (Math.PI / 2) - (angle / 2);
  var x = L * Math.cos(a);
  var y = L * Math.sin(a);
  ctx.clearRect(0,0,width,height);
  ctx.beginPath();
  ctx.moveTo(width/2, height);
  ctx.lineTo(width/2 + x, height - y);
  ctx.moveTo(width/2, height);
  ctx.lineTo(width/2 - x, height - y);
  ctx.moveTo(width/2, height);
  ctx.arc(width/2, height, L/4, Math.PI + a, 2 * Math.PI - a); 
  ctx.font = "12px Courier";
  ctx.textAlign = "center";
  ctx.fillStyle = "#F0ECE2"
  ctx.fillText((angle * (180.0 / Math.PI)).toFixed(2).toString()+"\xB0", width/2, height - L/3);
  ctx.strokeStyle = "#ACDBDF";
  ctx.stroke();
}
