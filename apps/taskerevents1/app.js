Bluetooth.println("");
Bluetooth.println(JSON.stringify({
  t:"intent", 
  target:"broadcast", 
  action:"com.taskerevent.bangle.js"
}));

setTimeout(function() {
  Bangle.showClock();
}, 0);
