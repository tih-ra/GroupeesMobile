var win = Titanium.UI.currentWindow;
win.barColor = '#535759';




var bundle_wyg = Ti.UI.createLabel({
	color:'#000000',
	font:{fontSize:14, fontFamily:'TrebuchetMS-Bold'},
	top:150,
	text:'WHAT YOU GET?'
});

var bundle_gift_it = Ti.UI.createView({
  backgroundImage:'../../images/gift_it.png',
  bottom:10,
  width: 154,
  height: 55

});

Ti.include('item.js');
Ti.include('jsonData/bundle.js');
Ti.include('getJson.js');
Ti.include('paypal.js');
win.add(bundle_wyg);
win.add(bundle_gift_it);

