Bluetooth.println("");
Bluetooth.println(JSON.stringify({
  t:"intent", 
  target:"service", 
  action:"com.maxmpz.audioplayer.API_COMMAND",
  extra:"cmd:TOGGLE_PLAY_PAUSE",
  package:"com.maxmpz.audioplayer"
}));

setTimeout(function() {
  Bangle.showClock();
}, 0);
