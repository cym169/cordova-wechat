// Dom7
var $$ = Dom7;

// Framework7 App main instance
var myApp  = new Framework7({
  root: '#app', // App root element
  id: 'chenming.app', // App bundle ID
  name: 'APP', // App name
  theme: 'ios', // Automatic theme detection
  statusbar: {
    iosOverlaysWebView: true,
  },
  view: {
    dynamicNavbar: true,
  },
  // App routes
  routes: routes
});

// Init/Create views
var newsView = myApp.views.create('#view-news', {
  url: '/index/'
});
var contactsView = myApp.views.create('#view-contacts', {
  url: '/contacts/'
});
var findView = myApp.views.create('#view-find', {
  url: '/find/'
});
var meView = myApp.views.create('#view-me', {
  url: '/me/'
});

var app = {
  // Application Constructor
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
      this.receivedEvent('app');
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
      

      console.log('Received Event: ' + id);
  }
};

app.initialize();
