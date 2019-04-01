var yo = require('yo-yo');
var landing = require('../landing')
var signupForm = yo`<div class="col s12 m7">
<div class="row">
    <div class="signup-box">
            <h1 class="uppic">Uppic</h1>
            <form action="" class="signup-form">
                <div class="section">
                    <a href="" class="btn btn-fb hide-on-small-only"><i class="fab fa-facebook-square spacef"></i>Inicia Sesión con Facebook</a>
                    <a href="" class="btn btn-go hide-on-small-only"><i class="fab fa-google spaceg"></i>  Inicia Sesión con Google</a>
                    <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="text" name="usename" paceholder="usename" id="username" class="inputs"/>
                    <input type="password" name="password" paceholder="Password" id="password" class="inputs"/>
                    <input type="submit" class="btn btn-signup waves-effect wave-light"  value="Inicia Sesion"/>
                </div>
            </form>
    </div>
    <div class="login-box">
        ¿No tienes una cuenta? <a href="/signin">Registrate</a>
    </div>
</div>         
</div>
</div>`;
module.exports = landing(signupForm);

