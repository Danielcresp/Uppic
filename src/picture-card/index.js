var yo = require('yo-yo');
module.exports = function (pic){
    return yo` <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${pic.url}">
    </div>
    <div class="card-content">
      <a href="{/user/${pic.user.username}" class="card-title"">
        <img src="${pic.user.avatar}" class="avatar"></img>
        <span class="username">${pic.user.username}</span>
      </a>
      <small class="right time">Hace 1 dia</small>
      <p>
        <a class="left" href="#"><i class="far fa-heart"></i></a>
        <span class="left likes">${pic.likes} Me gusta</span>
      <p>
    </div>
    </div>`; 
}