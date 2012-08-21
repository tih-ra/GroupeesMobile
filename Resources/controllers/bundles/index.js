var win = Titanium.UI.currentWindow;
win.barColor = '#535759';

//
// CREATE SEARCH BAR
//
var search = Titanium.UI.createSearchBar({
	barColor:'#535759',
	showCancel:false
});
search.addEventListener('change', function(e)
{
	e.value; // search string as user types
});
search.addEventListener('return', function(e)
{
	search.blur();
});
search.addEventListener('cancel', function(e)
{
	search.blur();
});

var tableView;
var data = [];





// create update row (used when the user clicks on the row)
function createUpdateRow(text)
{
	var updateRow = Ti.UI.createTableViewRow();
	updateRow.backgroundColor = '#13386c';
	updateRow.selectedBackgroundColor = '#13386c';

	// add custom property to identify this row
	updateRow.isUpdateRow = true;
	var updateRowText = Ti.UI.createLabel({
		color:'#fff',
		font:{fontSize:20, fontWeight:'bold'},
		text:text,
		width:'auto',
		height:'auto'
	});
	updateRow.className = 'updated_row';
	updateRow.add(updateRowText);
	return updateRow;
}
// create a var to track the active row
var currentRow = null;
var currentRowIndex = null;

// create the rest of the rows
	var row = Ti.UI.createTableViewRow();
	row.selectedBackgroundColor = '#fff';
	row.height = 80;
	row.className = 'datarow';
	row.clickName = 'row';

   var photo = Ti.UI.createView({
		backgroundImage:'../../images/tmp/const.jpg',
		top:5,
		left:10,
		width:50,
		height:50,
		clickName:'photo'
	});
	row.add(photo);

	var user = Ti.UI.createLabel({
		color:'#0895cd',
		font:{fontSize:14,fontWeight:'bold', fontFamily:'TrebuchetMS-Bold'},
		left:70,
		top:2,
		height:30,
		width:200,
		clickName:'user',
		text:'Const'
	});

	row.filter = user.text;
	row.add(user);

	var fontSize = 12;
	
	var comment = Ti.UI.createLabel({
		color:'#222',
		font:{fontSize:fontSize,fontWeight:'normal', fontFamily:'TrebuchetMS'},
		left:70,
		top:21,
		height:50,
		width:250,
		clickName:'comment',
		text:'RegrTest short description.'
	});
	row.add(comment);


	data.push(row);
	

//
// create table view (
//
tableView = Titanium.UI.createTableView({
	data:data,
	search:search,
	filterAttribute:'filter',
	backgroundColor:'white'
});

tableView.addEventListener('click', function(e)
{
	var tabGroup = Titanium.UI.createTabGroup({id:'tabGroup1'});



//
// create controls tab and root window
//
var win1 = Titanium.UI.createWindow({
	url:'./bundle.js',
	title:'Bundle',
	backgroundColor:'#FFF',
	barColor:'#0895cd'
});
var tab1 = Titanium.UI.createTab({
	icon:'../../images/tabs/bundle.png',
	title:'Bundle',
	window:win1
});

var b1 = Titanium.UI.createButton({
		title:'Close',
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
	
	b1.addEventListener('click',function()
	{
		win.close();
		tabGroup.close();
	});
	

//
// create phone tab and root window
//
var win2 = Titanium.UI.createWindow({
	url:'./top_donor.js',
	title:'Top donor',
	backgroundColor:'#FFF',
	barColor:'#535759'
});
var tab2 = Titanium.UI.createTab({
	icon:'../../images/tabs/top_donor.png',
	title:'top donor',
	window:win2
});


//
// create platform tab and root window
//
var win3 = Titanium.UI.createWindow({
	url:'./extra.js',
	title:'Extra',
	backgroundColor:'#FFF',
	barColor:'#535759'
});
var tab3 = Titanium.UI.createTab({
	icon:'../../images/tabs/extra.png',
	title:'extra',
//	Commented out as per 1773
//	active:true,
	window:win3
});

//  add tabs
//
win1.setLeftNavButton(b1);
win2.setLeftNavButton(b1);
win3.setLeftNavButton(b1);
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);


tabGroup.addEventListener('open',function()
{
	// set background color back to white after tab group transition
	Titanium.UI.setBackgroundColor('#fff');
});

tabGroup.setActiveTab(0);
// open tab group with a transition animation
tabGroup.open({
	transition: Titanium.UI.iPhone && Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});

	
	////



	///
	
	//w.open({modal:true});
	
});

win.add(tableView);

