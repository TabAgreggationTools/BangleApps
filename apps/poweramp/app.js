Bluetooth.println("");
Bluetooth.println(JSON.stringify({
  t:"intent", 
  target:"service", 
  action:"com.maxmpz.audioplayer.API_COMMAND",
  flags:["cmd:TOGGLE_PLAY_PAUSE"]
}));

setTimeout(function() {
  Bangle.showClock();
}, 0);
