var yo = require('yo-yo');
var landing = require('../landing')
var signinForm= yo`<div class="col s12 m7">
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
        ¿Tienes una cuenta? <a href="/signup">Entrar</a>
    </div>
</div>         
</div>
</div>`;
module.exports =landing(signinForm);