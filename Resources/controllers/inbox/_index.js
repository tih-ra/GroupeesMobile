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
for (var c=1;c<8;c++)
{
	var row = Ti.UI.createTableViewRow();
	row.selectedBackgroundColor = '#fff';
	row.height = 80;
	row.className = 'datarow';
	row.clickName = 'row';



	var user = Ti.UI.createLabel({
		color:'#0e7192',
		font:{fontSize:14,fontWeight:'bold', fontFamily:'Arial'},
		left:10,
		top:2,
		height:30,
		width:200,
		clickName:'user',
		text:'Groupees Massage '+c
	});

	row.filter = user.text;
	row.add(user);

	var fontSize = 12;
	
	var comment = Ti.UI.createLabel({
		color:'#222',
		font:{fontSize:fontSize,fontWeight:'normal', fontFamily:'Arial'},
		left:10,
		top:16,
		height:50,
		width:300,
		clickName:'comment',
		text:'Got some fresh fruit, conducted some business, took a nap'
	});
	row.add(comment);



	var date = Ti.UI.createLabel({
		color:'#999',
		font:{fontSize:10,fontWeight:'normal', fontFamily:'Arial'},
		left:10,
		bottom:5,
		height:20,
		width:100,
		clickName:'date',
		text:'posted on 12/05/2012'
	});
	row.add(date);

	data.push(row);
}


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
	Ti.API.info('table view row clicked - source ' + e.source);
	// use rowNum property on object to get row number
	var rowNum = e.index;
	var updateRow = createUpdateRow('You clicked on the '+e.source.clickName);
	tableView.updateRow(rowNum,updateRow,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.LEFT});
});

win.add(tableView);

