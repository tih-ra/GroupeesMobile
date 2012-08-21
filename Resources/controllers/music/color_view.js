// Button Window
var color_view = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'#FFFFFF',
   left: 15,
   right: 15,
   height:370,
   ext:{vitrine:win}
});
color_view.hide()
win.add(color_view);

var buttons_view = Titanium.UI.createView({
   left: 7,
   right: 7,
   top:10,
   bottom:45
});

color_view.add(buttons_view);
// Buttons
var color_buttons_names = ["party", "rock", "romantic"]

for (var i=0;i<color_buttons_names.length;i++) {
	
  var color_group_label = Ti.UI.createLabel({
	top:(i*90+20)-20,
	left:0,
	font:{fontSize:12, fontFamily:'TrebuchetMS'},
	color: '#36acde',
	text: color_buttons_names[i]
  });
  buttons_view.add(color_group_label);
  
  var color_buttons_colors = ["red", "blue", "green", "bw"]
  
    for (var ic=0;ic<color_buttons_colors.length;ic++) {
    //Titanium.App.Properties.setString("color_button", color_buttons_names[i]+'_'+color_buttons_colors[ic]);
    	
  	 var button = Titanium.UI.createButton({
		image:'../../images/colors/'+color_buttons_names[i]+'_'+color_buttons_colors[ic]+'.png',
		width:65,
		height:65,
		top: i*90+20,
		left: ic*70,
		ext: color_buttons_names[i]+'_'+color_buttons_colors[ic]
  	 });
  	
  	
  	 button.addEventListener('click', function(e){
  	 	
  	 	var butonTimerset;
  	 	function hideColorView() {
  	 		clearInterval(butonTimerset);
  	 		color_view.hide();
  	 	}
  	 	butonTimerset = setInterval(hideColorView, 10);
  	 	colorList = Titanium.App.Properties.getList(e.source.ext);
  	 });

  	 buttons_view.add(button);
  };
  	
 
}

var slider = Titanium.UI.createSlider({
    bottom: 35,
    min: 0,
    max: 2,
    left: 5,
    right: 5,
    value: 1
});

var speed_label = Ti.UI.createLabel({
    text: 'SPEED: Normal',
    width: '100%',
    height: 'auto',
    bottom: 65,
    left: 0,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    font:{fontSize:12, fontFamily:'TrebuchetMS'},
    color: '#FFF'
    });

color_view.add(speed_label) 
color_view.add(slider)

slider.addEventListener('change', function(e) {
	
    clearInterval(intervalTimer);
    soundsampler.stop();
    
    switch(e.value)
		{
			case 0:
  			 speed_label.text = "SPEED: Slow";
  			 intervalTimer = setInterval(showLevels, 500);
  			 soundsampler.start();
  			 break;
  			 
  			case 1:
  			 speed_label.text = "SPEED: Normal";
  			 intervalTimer = setInterval(showLevels, 100);
  			 soundsampler.start();
  			 break;
  		   case 2:
  			 speed_label.text = "SPEED: Fast";
  			 intervalTimer = setInterval(showLevels, 50);
  			 soundsampler.start();
  			 break;
  		}
});    

var add_customization_button = Titanium.UI.createButton({
  title: 'Customization',
  height: 30,
  bottom: 5,
  left: 10,
  right: 10
});
color_view.add(add_customization_button);

add_customization_button.addEventListener('click', function(e){
	color_view.hide();
	custom_view.show();
});

win.addEventListener('click', function(){
	color_view.show();
})

