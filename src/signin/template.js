var yo = require('yo-yo');
var translate = require('../translate');
var landing = require('../landing')
var signinForm= yo`<div class="col s12 m7">
<div class="row">
    <div class="signup-box">
            <h1 class="uppic">Uppic</h1>
            <form action="" class="signup-form">
                <h2>${translate.message('signup.subheading')}</h2>
                <div class="section">
                    <a href="" class="btn btn-fb hide-on-small-only"><i class="fab fa-facebook-square spacef"></i>${translate.message('signup.facebook')}</a>
                    <a href="" class="btn btn-go hide-on-small-only"><i class="fab fa-google spaceg"></i>${translate.message('signup.google')}</a>
                    <a href="" class="btn btn-fb hide-on-med-and-up">${translate.message('signup.text')}</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="email" name="email" paceholder="${translate.message('email')}" id="email" class="inputs"/>
                    <input type="text" name="name" paceholder="${translate.message('fullname')}" id="name" class="inputs"/>
                    <input type="text" name="usename" paceholder="${translate.message('username')}" id="username" class="inputs"/>
                    <input type="password" name="password" paceholder="${translate.message('password')}" id="password" class="inputs"/>
                    <input type="submit" class="btn btn-signup waves-effect wave-light"  value="${translate.message('signup.call-to-action')}"/>
                </div>
            </form>
    </div>
    <div class="login-box">
    ${translate.message('signup.have-account')}
     <a href="/signup">${translate.message('signin')}</a>
    </div>
</div>         
</div>
</div>`;
module.exports =landing(signinForm);