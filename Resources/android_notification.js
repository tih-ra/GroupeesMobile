// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group

var Pusher = require('com.pusher');
Pusher.setup({
  key: '19b42ae2dab4161a8223',     // CHANGEME
  appID: '19415',                   // CHANGEME
  secret: '93da06922cef9cb43092',  // CHANGEME
  reconnectAutomaticaly: true
});
//
// create base UI tab and root window
//
var win = Titanium.UI.createWindow({  
    title:'Groupees Mobile',
    backgroundColor:'#fff'
});







var intent = Ti.Android.createIntent({
    flags : Ti.Android.FLAG_ACTIVITY_CLEAR_TOP | Ti.Android.FLAG_ACTIVITY_NEW_TASK,
    // Substitute the correct classname for your application
    className : 'com.groupees.mobile.GroupeesActivity',
});
intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);

// Create a PendingIntent to tie together the Activity and Intent
var pending = Titanium.Android.createPendingIntent({
    intent: intent,
    activity: Ti.Android.currentActivity,
    //flags: Titanium.Android.FLAG_UPDATE_CURRENT
    type: Ti.Android.PENDING_INTENT_FOR_ACTIVITY,  
    flags: Titanium.Android.FLAG_CANCEL_CURRENT 
});

// Create the notification

// Send the notification.



//
// create controls tab and root window
//

var handleConnected = function() {
  Pusher.addEventListener('connected', function(e) {
    Ti.API.warn("PUSHER CONNECTED");

    // Connect to channel
    win.channel = Pusher.subscribeChannel('test');

    // Bind to all events on this channel
    win.channel.addEventListener('alert', handleEvent);

    // Bind to a specific event on this channel
   //window.channel.addEventListener('alert', handleAlertEvent);
  });
  Pusher.connect();
};


var service_intent = Titanium.Android.createServiceIntent( { url: 'android_service.js' } );
// Service should run its code every 2 seconds.
service_intent.putExtra('interval', 5000);
var service = Titanium.Android.createService(service_intent);
// A message that the service should 'echo'


var handleEvent = function(e) {
  //alert(JSON.stringify(e.data));
  Ti.API.warn("MESSAGE IS: "+e.data.title);
  var notification = Titanium.Android.createNotification({
    // icon is passed as an Android resource ID -- see Ti.App.Android.R.
    icon: Titanium.App.Android.R.drawable.icon,
    contentTitle: e.data.title,
    contentText : e.data.message,
    contentIntent: pending,
    defaults:Titanium.Android.NotificationManager.DEFAULT_SOUND
  });
  service_intent.putExtra('message', e.data.message);
  Titanium.Android.NotificationManager.notify(1, notification);
  
}





//
//  add tabs
//
//service.start();   
handleConnected();



// open tab group
win.open();

