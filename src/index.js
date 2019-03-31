var page = require('page');
var empty = require('empty-element');
var yo = require('yo-yo');
var main = document.getElementById('main-container');
page('/', function(ctx,next){
    //Home
    main.innerHTML='<a href="/signup">Signup</a>'
})

page('/signup', function(ctx,next){
   //SIgnUp
   var el =yo`<div class="container">
   <div class="row">
       <div class="col s10 push-s1">
           <div class="row">
               <div class="col m5 hide-on-small-only">
                   <img src="phone.png" alt="" class="iphone">
               </div>
               <div class="col s12 m7">
                   <div class="row">
                       <div class="signup-box">
                               <h1 class="uppic">Uppic</h1>
                               <form action="" class="signup-form">
                                   <h2>Registrate para ver fotos de tu red Uppic</h2>
                                   <div class="section">
                                       <a href="" class="btn btn-fb hide-on-small-only">Sesión con Facebook</a>
                                       <a href="" class="btn btn-go hide-on-small-only">Sesión con Google</a>
                                       <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                                   </div>
                                   <div class="divider"></div>
                                   <div class="section">
                                       <input type="email" name="email" paceholder="Email" id="email" class="inputs"/>
                                       <input type="text" name="name" paceholder="Name" id="name" class="inputs"/>
                                       <input type="text" name="usename" paceholder="usename" id="username" class="inputs"/>
                                       <input type="password" name="password" paceholder="Password" id="password" class="inputs"/>
                                       <input type="submit" class="btn btn-signup waves-effect wave-light"  value="Registrate"/>
                                   </div>
                               </form>
                       </div>
                       <div class="login-box">
                           ¿Tienes una cuenta? <a href="http://singin">Entrar</a>
                       </div>
                   </div>         
               </div>
           </div>
       </div>
   </div>
</div>`;
   empty(main).appendChild(el);
})
// page();
page.start()