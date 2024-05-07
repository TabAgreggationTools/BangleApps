// load settings
var settings = Object.assign({
  enableTap: true
}, require("Storage").readJSON("taskerevents1.json", true) || {});

if (settings.enableTap) {
  Bangle.on("tap", function(e) {
    if (e.dir=="front" && e.double) {
      Bluetooth.println("");
      Bluetooth.println(JSON.stringify({
        t:"intent", 
        target:"broadcast", 
        action:"com.taskerevent.bangle.js"
      }));
    }
  });
}

// clear variable
settings = undefined;
