Ti.include('../../libs/color_picker.js');
Ti.include('../../libs/p.js');
Ti.include('gradient_builder.js');
var customHexColors = [];
var customRGBColors = [];
var gradientButtons = [];
var tmpRemoveColorButtons = [];
var tmpColorButtons = [];

var tmpColorRemoveState = false;

var custom_view = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'#36acde',
   left: 15,
   right: 15,
   height:370,
});
custom_view.hide();
win.add(custom_view);

var add_color_button = Titanium.UI.createButton({
  backgroundImage: '../../images/plus.png',
  width: 31,
  height: 31,
  top: 65,
  left: 30
});

var remove_color_button = Titanium.UI.createButton({
  backgroundImage: '../../images/minus.png',
  width: 31,
  height: 31,
  top: 65,
  right: 30
});

add_color_button.addEventListener('click', function(e){
	
	var picker_win = createColorPicker({hexColor:"#621A84"});
	
        picker_win.addEventListener("colorselect", function(e){
        	//hexColorWithHash
			var tmp_color_button = Titanium.UI.createButton({
  				backgroundColor: e.hexColorWithHash,
  				top: 10,
  				width:40,
  				height: 40,
  				left: (customHexColors.length * 46) + 11
			});
			
			
			var tmp_remove_color_button = Titanium.UI.createButton({
  				backgroundImage: '../../images/minus.png',
  				top: 15,
  				width:30,
  				height: 30,
  				visible: false,
  				left: (customHexColors.length * 46) + 16
			});
			
			
			tmp_remove_color_button.addEventListener('click', function(e){
				var this_index = tmpRemoveColorButtons.indexOf(tmp_remove_color_button);
				
				CustomViewHelper.removeColorButtons(this_index, tmp_color_button, tmp_remove_color_button);
				
				GradientBuilder.start();
			});
			
			custom_view.add(tmp_color_button);
			custom_view.add(tmp_remove_color_button);
			
			
			
			
			tmpRemoveColorButtons.push(tmp_remove_color_button);
			tmpColorButtons.push(tmp_color_button);
			
			customHexColors.push(e.hexColorWithHash);
			customRGBColors.push(e.rgbColor.r+','+e.rgbColor.g+','+e.rgbColor.b);
			
			GradientBuilder.start();
			
			
			
		});
		
	picker_win.open();
   	
});

remove_color_button.addEventListener('click', function(e){
	CustomViewHelper.showHideRemoveButtons();
	
});

custom_view.add(add_color_button);
custom_view.add(remove_color_button);

//GRADIENT
var gradient_label = Ti.UI.createLabel({
    text: 'SMOOTHNESS',
    font:{fontSize:12, fontFamily:'TrebuchetMS'},
    width: '100%',
    height: 'auto',
    top: 110,
    left: 0,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    color: '#000'
    });

custom_view.add(gradient_label);

for (var i=0;i<=23;i++) {
	var gradient_button = Titanium.UI.createButton({
  				backgroundColor: '#000',
  				top: 130,
  				width:12,
  				height: 30,
  				left: ((i+1)*11)
	});
	
	gradientButtons.push(gradient_button);
	custom_view.add(gradient_button);
}

var gradient_slider = Titanium.UI.createSlider({
    top: 170,
    min: 2,
    max: 24,
    left: 11,
    right: 11,
    value: 10
});

custom_view.add(gradient_slider);

var speed_custom_label = Ti.UI.createLabel({
    text: 'SPEED (NORMAL)',
    font:{fontSize:12, fontFamily:'TrebuchetMS'},
    width: '100%',
    height: 'auto',
    top: 200,
    left: 0,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    color: '#000'
    });
custom_view.add(speed_custom_label);

var speed_custom_slider = Titanium.UI.createSlider({
    top: 220,
    min: 2,
    max: 24,
    left: 11,
    right: 11,
    value: 10
});

custom_view.add(speed_custom_slider);

var custom_save_button = Titanium.UI.createButton({
  title: 'Save',
  bottom: 15,
  left: 7,
  width: '30%'
});

custom_view.add(custom_save_button);

var custom_cancel_button = Titanium.UI.createButton({
  title: 'Cancel',
  bottom: 15,
  right: 7,
  width: '30%'
});

custom_view.add(custom_cancel_button);

Ti.include('custom_view_helper.js');
    
