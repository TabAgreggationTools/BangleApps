Bluetooth.println("");
Bluetooth.println(JSON.stringify({
  t:"intent", 
  target:"broadcast", 
  action:"com.banglejs.uart.tx"
}));

setTimeout(function() {
  Bangle.showClock();
}, 0);
