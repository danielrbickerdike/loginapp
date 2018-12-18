// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
	url: '/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
	console.log("Clicked");
	
  var user = $$('#my-login-screen [name="username"]').val();
  var pass = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  app.request.post('http://127.0.0.1/demo_file.php', { username: user, password: pass, dataType: 'jsonp' }, function (data) {
		app.dialog.alert(data);
		if(data=="Logged in!"){
			
		}
   });
});

$$('.register-form .signup-button').on('click', function () {
	console.log("Clicked");
	
  var user = $$('.register-form [name="username"]').val();
  var pass = $$('.register-form [name="password"]').val();

  // Close login screen
  app.popup.close('.register-form');

  app.request.post('http://127.0.0.1/register_user.php', { username: user, password: pass, dataType: 'jsonp' }, function (data) {
		app.dialog.alert(data);
		if(data=="Signed up!"){
			
		}
   });
});

$$('form.form-ajax-submit').on('formajax:success', function (e) {
  var xhr = e.detail.xhr; // actual XHR object

  var data = e.detail.data; // Ajax response from action file
  app.dialog.alert(e.detail.data);
});


$$('form.form-ajax-submit').on('formajax:error', function (e) {
	app.dialog.alert("fuck");
});

$$('#login-form .button').on('click', function(){
	
	$$('#details').html(username);
});

var popup = app.popup.create({
  content: '<div class="popup">...</div>',
  on: {
    opened: function () {
      console.log('Popup opened')
    }
  }
})