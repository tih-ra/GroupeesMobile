Titanium.include("colors.js");
var win = Titanium.UI.currentWindow;
win.barColor = '#36acde';
win.backgroundColor = '#FFFFFF';


  	 
var colorList = Titanium.App.Properties.getList("party_bw");

var soundLevelLabel = Ti.UI.createLabel({
	top:10,
	left:10,
	width:200,
	height:Ti.UI.SIZE || 'auto'
});
win.add(soundLevelLabel);

var soundsampler = require('ti.soundsampler');
soundsampler.start();
Ti.API.info("module is => " + soundsampler);

var intervalTimer;
function showLevels()
{
		var amp = soundsampler.soundAmplitude
		//soundLevelLabel.text = amp;
		var bgColor = '#FFF'
		switch(true)
		{
			case (amp == 0):
  				bgColor = colorList[0]//"#ffc300"
  				break;
  			case (amp <= -1 && amp >= -3):
  				bgColor = colorList[1]//"#ffa400"
  				break;
  			case (amp <= -4 && amp >= -7):
  				bgColor = colorList[2]//"#ff8100"
  				break;
  			case (amp <= -8 && amp >= -10):
  				bgColor = colorList[3]//"#ff5c00"
  				break;
  			case (amp <= -11 && amp >= -14):
  				bgColor = colorList[4]//"#f03f00"
  				break;
  			case (amp <= -15 && amp >= -19):
  				bgColor = colorList[5]//"#cc1300"
  				break;
  			case (amp <= -20 && amp >= -24):
  				bgColor = colorList[6]//"#a80000"
  				break;
  			case (amp <= -25 && amp >= -29):
  				bgColor = colorList[7]//"#830000"
  				break;
			case (amp <= -30 && amp >= -34):
			    bgColor = colorList[8]//"#620002"
			    break;
			case (amp <= -35 && amp >= -39):
			    bgColor = colorList[9]//"#520003"
			    break;
			case (amp <= -40 && amp >= -46):
			    bgColor = colorList[10]//"#450005"
			    break;
 
		}
		win.backgroundColor = bgColor;
}

intervalTimer = setInterval(showLevels, 100);
Titanium.include("color_view.js");
Titanium.include("custom_view.js");

