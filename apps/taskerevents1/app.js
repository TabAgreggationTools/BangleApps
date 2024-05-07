Bluetooth.println("");
Bluetooth.println(JSON.stringify({
  t:"intent", 
  target:"broadcast receiver", 
  action:"com.taskerevent.bangle.js"
}));

setTimeout(function() {
  Bangle.showClock();
}, 0);
