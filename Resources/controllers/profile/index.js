var win = Titanium.UI.currentWindow;

var bundle_sorry = Ti.UI.createLabel({
	color:'#000000',
	font:{fontSize:12, fontFamily:'TrebuchetMS-Bold'},
	top:150,
	text:'Sorry, you have lost connection to server'
});

win.add(bundle_sorry);