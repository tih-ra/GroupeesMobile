Titanium.UI.setBackgroundColor('#000');

var win = Titanium.UI.createWindow({  
    title:'Groupees Mobile',
    backgroundColor:'#fff'
});

var bundles_button = Titanium.UI.createButton({
	image:'./images/bundles_button.png',
	width:144,
	height:209,
	top:10,
	left:10
});

var inbox_button = Titanium.UI.createButton({
	image:'./images/inbox_button.png',
	width:144,
	height:209,
	top:10,
	right:10
});
var music_button = Titanium.UI.createButton({
	image:'./images/music_button.png',
	width:144,
	height:209,
	bottom:10,
	left:10
});

var profile_button = Titanium.UI.createButton({
	image:'./images/profile_button.png',
	width:144,
	height:209,
	bottom:10,
	right:10
});

//OPEN WINDOWS
function openStandartWin(resource) {
	
	var w = Titanium.UI.createWindow({
		backgroundColor:'#FFF',
		title: resource,
		url:'./controllers/'+resource+'/index.js'
	});
	
	w.open();
}
function openModalWin(resource) {
	
	var w = Titanium.UI.createWindow({
		backgroundColor:'#FFF',
		title: resource,
		barColor:'black',
		url:'./controllers/'+resource+'/index.js'
	});
	var b = Titanium.UI.createButton({
		title:'Close',
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
	w.setLeftNavButton(b);
	b.addEventListener('click',function()
	{
		w.close();
	});
	w.open({modal:true});
}

inbox_button.addEventListener('click', function()
{
	openModalWin('inbox');
});

bundles_button.addEventListener('click', function()
{
	openStandartWin('bundles');
});

music_button.addEventListener('click', function()
{
	openModalWin('music');
});

profile_button.addEventListener('click', function()
{
	openModalWin('profile');
});


win.add(inbox_button);
win.add(bundles_button);
win.add(music_button);
win.add(profile_button);

win.open();