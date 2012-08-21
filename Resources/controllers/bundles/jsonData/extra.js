function setJSONData(json) {
	bundle_cover.backgroundImage = 'http://grpe.es'+json.bundle.cover;
	bundle_title.text = json.bundle.slug;
	for (var i = 0; i < json.bundle.goals.length; i++) {
		var goal = json.bundle.goals[i];
		
		var lbl1 = Ti.UI.createLabel({
			color:'#36acde',
			font:{fontSize:12,fontWeight:'bold', fontFamily:'TrebuchetMS-Bold'},
			left:10,
			top:10+150,
			height:30,
			width:200,
			text: goal.description 
		});

		win.add(lbl1);

		var scrollView = Titanium.UI.createScrollView({
			contentWidth:500,
			contentHeight:80,
			top:50+150,
			height:81,
			left: 10,
			right: 10,
			borderRadius:5,
			backgroundColor:'#FFFFFF'

		});

		win.add(scrollView);

for (var c=0;c<goal.products.length;c++)
{
	var photo = Ti.UI.createView({
  		backgroundImage:'http://grpe.es'+goal.products[c].cover,
  		left: (c*85),
  		width: 81,
  		height: 81,
  		borderWidth:3,
    	borderColor:'#0895cd'

	});
	scrollView.add(photo)
}

		
	}
}
