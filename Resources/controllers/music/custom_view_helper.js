CustomViewHelper = function(){};

CustomViewHelper.removeColorButtons = function(this_index, tmp_color_button, tmp_remove_color_button){
	custom_view.remove(tmp_color_button);
	custom_view.remove(tmp_remove_color_button);
				
	tmpRemoveColorButtons.remove(this_index);
	tmpColorButtons.remove(this_index);
	customHexColors.remove(this_index);
	customRGBColors.remove(this_index);
				
	CustomViewHelper.showHideRemoveButtons();
	CustomViewHelper.resortColorButtons();
	CustomViewHelper.correctGradient();
};

CustomViewHelper.showHideRemoveButtons = function(){
	tmpColorRemoveState = tmpColorRemoveState.toggle();
	
	for (var i=0; i < tmpRemoveColorButtons.length; i++) {
		tmpColorRemoveState ? tmpRemoveColorButtons[i].show() : tmpRemoveColorButtons[i].hide()
	}
};

CustomViewHelper.resortColorButtons = function() {
	Ti.API.log('info', customHexColors.length);
	for (var i=0; i < tmpColorButtons.length; i++) {
		tmpColorButtons[i].left = (i * 46) + 11;
		tmpRemoveColorButtons[i].left = (i * 46) + 16;
	}
};

CustomViewHelper.correctGradient = function() {
	if (customHexColors.length <= 1) {
		for (var i=0; i < gradientButtons.length; i++) {
			gradientButtons[i].backgroundColor = '#000';
		}
	}
};


