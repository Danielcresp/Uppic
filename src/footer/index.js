var yo = require('yo-yo');
var traslate = require('../translate');

var el =yo`<footer class="site-footer">
<div class="container">
  <div class="row">
    <div class="col s12 l3 center-align"><a class="dropdown-trigger btn" href="#" data-target="dropdown1">Idioma</a>
      <ul class="dropdown-content" id="dropdown1">
        <li><a href="#" onclick=${lang.bind(null,'es')}>${traslate.message('spanish')}</a></li>
        <li><a href="#" onclick=${lang.bind(null,'en-US')}>${traslate.message('english')}</a></li>
      </ul>
    </div>
    <div class="col s12 l3 push-l6 center-align">© Uppic 2019</div>
  </div>

</div>
</footer>`;
function lang(locate){
  localStorage.locate = locate;
  location.reload();
  return false;
}
document.body.appendChild(el);

