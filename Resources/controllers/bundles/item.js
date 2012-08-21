var bundle_cover = Ti.UI.createView({
  backgroundImage:'http://grpe.es/uploads/bundles/62/cover/44574628_1243886565_DSC02389.jpg',
  top:10,
  left:10,
  width:108,
  height:108

});

var bundle_title = Ti.UI.createLabel({
	color:'#0895cd',
	font:{fontSize:12, fontFamily:'TrebuchetMS'},
	left:128,
	top:10,
	text:'KLYPEX'
});

var bundle_lbl1 = Ti.UI.createLabel({
	color:'#6a6c6d',
	font:{fontSize:11, fontFamily:'TrebuchetMS'},
	left:128,
	top:30,
	text:'MEALS DELIVERED'
});

var bundle_meals = Ti.UI.createView({
  backgroundImage:'../../images/tmp/bundle_meals.png',
  top:50,
  left:128,
  width: 45,
  height: 28

});




var bundle_lbl2 = Ti.UI.createLabel({
	color:'#6a6c6d',
	font:{fontSize:11, fontFamily:'TrebuchetMS'},
	left:128,
	top:80,
	text:'TIME LEFT ON THIS DEAL'
});

var bundle_time_left = Ti.UI.createView({
  backgroundImage:'../../images/tmp/bundle_time_left.png',
  top:100,
  left:128,
  width: 88,
  height: 23

});

var bundle_hr = Ti.UI.createLabel({
	color:'#afafaf',
	font:{fontSize:11, fontFamily:'TrebuchetMS'},
	top:130,
	text:'__________________________________________________________'
});

//FROM TOP 150

win.add(bundle_cover);
win.add(bundle_title);
win.add(bundle_lbl1);
win.add(bundle_meals);
win.add(bundle_lbl2);
win.add(bundle_time_left);
win.add(bundle_hr);
