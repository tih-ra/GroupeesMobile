var GradientBuilder = function(){
	
}
GradientBuilder.start = function() {
	if (customRGBColors.length >= 2) {
		
		for (var i=0; i < (customRGBColors.length-1); i++) {
			
			GradientBuilder.gen(customRGBColors[i], customRGBColors[i+1], i);
			
		}
		
	}
}

GradientBuilder.gen = function(s, e, part) {
	
	var total_steps = parseInt(24 / (customRGBColors.length-1));
	
	var steps = total_steps;
	
	var start = s.split(",");
	var end = e.split(",");
	
	for(i in start) start[i]=parseFloat(start[i]);
	for(i in end) end[i]=parseFloat(end[i]);
	steps=parseFloat(steps); 
	newGradient="";			
	steps--;
	col=[0,1,2];
	
	for(i=0; i<= steps; i++){
		dec = i/steps;
		r = Math.round(start[0]+dec*(end[0]-start[0]));
		g = Math.round(start[1]+dec*(end[1]-start[1]));
		b = Math.round(start[2]+dec*(end[2]-start[2]));
		
		GradientBuilder.setColors('rgba('+r+', '+g+', '+b+', 1)', (total_steps * part) + i);
		//Ti.API.log('info', ((24-total_steps) * part) + i);
		Ti.API.log('info', total_steps);
		
	}
	

}

GradientBuilder.setColors = function(color, i) {
	gradientButtons[i].backgroundColor = GradientBuilder.colorToHex(color)
}

GradientBuilder.colorToHex = function(c) {
	
	var m = /rgba?\((\d+), (\d+), (\d+)/.exec( c );
	
	var hex = ( m[1] << 16 | m[2] << 8 | m[3] ).toString(16)
	
    return (hex.length < 6) ? '#0'+hex : '#'+hex;

};
