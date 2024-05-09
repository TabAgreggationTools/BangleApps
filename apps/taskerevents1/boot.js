// load settings
var settings = Object.assign({
  enableTap: true
}, require("Storage").readJSON("poweramp.json", true) || {});

if (settings.enableTap) {
  Bangle.on("tap", function(e) {
    if (e.dir=="front" && e.double) {
      Bluetooth.println("");
      Bluetooth.println(JSON.stringify({
        t:"intent", 
        target:"service", 
        action:"com.maxmpz.audioplayer.API_COMMAND"
      }));
    }
  });
}

// clear variable
settings = undefined;
