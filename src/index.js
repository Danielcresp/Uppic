var page = require('page');
var main = document.getElementById('main-container');
page('/', function(ctx,next){
    main.innerHTML='Home Page<a href="/signup">Signup</a>';//Home
})

page('/signup', function(ctx,next){
    main.innerHTML='SignUp 2<a href="/">Home Page</a>'; //SIgnUp
})
// page();
page.start()