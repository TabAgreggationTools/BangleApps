Bluetooth.println("");
Bluetooth.println(JSON.stringify({
  t:"intent", 
  target:"BroadcastReceiver", 
  action:"com.banglejs.uart.tx"
}));

setTimeout(function() {
  Bangle.showClock();
}, 0);
