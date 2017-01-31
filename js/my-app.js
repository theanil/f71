// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

//alert('hhh');

myApp.onPageInit('login', function (page) {
    // run createContentPage func after link was clicked
    //alert('hello');
   $$('#loginbtn').on('click', function()
    {
        username = $$('#username').val();
        password = $$('#password').val();
        //alert('hello ' + username);
        var formData = myApp.formToData('#my-form');
        //alert(JSON.stringify(formData));
        var valid = 1;
        var errmessage = '';

        if(username.length <= 0)
        {
            errmessage += 'Please enter user id <br>';
            //myApp.alert('Please enableter user id');
            //$$('#username').css('border','1px solid red');
            valid = 0;
        }
        if(password.length <= 0)
        {
            errmessage += 'Please enter password';

            //myApp.alert('Please enter password');
            //$$('#password').css('border','1px solid red');
            valid = 0;
        }
        //alert(valid);

        if(valid == 1)
        {
             myApp.alert('Everything is correct',  '');
            //$$.post('path-to-file.php', {username: username}, function (data) {
            //  console.log(data);
            //});            
        }else
        {
            myApp.alert(errmessage,  '');   
            //$$('#username').css('border','1px solid red');
        }


    }); 

});

