// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
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
  routes: routes,
});

// Init/Create views
var newsView = app.views.create('#view-news', {
  url: '/index/'
});
var contactsView = app.views.create('#view-contacts', {
  url: '/contacts/'
});
var findView = app.views.create('#view-find', {
  url: '/find/'
});
var meView = app.views.create('#view-me', {
  url: '/me/'
});
