(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
alert('Hola');
var numeros = [400, 200, 1, -23];
var numerosMas1 = numeros.map(function (numeros) {
    return numeros + 1;
});
var numerosMas2 = numeros.map(n => n + 2);
console.log(numerosMas1);
console.log(numerosMas2);

},{}]},{},[1]);