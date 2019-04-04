var yo = require('yo-yo');
var landing = require('../landing')
var translate = require('../translate')
var signupForm = yo`<div class="col s12 m7">
<div class="row">
    <div class="signup-box">
            <h1 class="uppic">Uppic</h1>
            <form action="" class="signup-form">
                <div class="section">
                    <a href="" class="btn btn-fb hide-on-small-only"><i class="fab fa-facebook-square spacef"></i>${translate.message('signup.facebook')}</a>
                    <a href="" class="btn btn-go hide-on-small-only"><i class="fab fa-google spaceg"></i>${translate.message('signup.google')}</a>
                    <a href="" class="btn btn-fb hide-on-med-and-up">${translate.message('signup.text')}</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="text" name="usename" paceholder="${translate.message('username')}" id="username" class="inputs"/>
                    <input type="password" name="password" paceholder="${translate.message('password')}" id="password" class="inputs"/>
                    <input type="submit" class="btn btn-signup waves-effect wave-light"  value="${translate.message('signup.text')}"/>
                </div>
            </form>
    </div>
    <div class="login-box">
        ¿${translate.message('signin.not-have-account')}<a href="/signin">${translate.message('signin')}</a>
    </div>
</div>         
</div>
</div>`;
module.exports = landing(signupForm);

