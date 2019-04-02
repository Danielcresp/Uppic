var page = require('page');
var empty = require('empty-element');
var template =require('./template');
var title =require('title');

page('/', function(ctx,next){
    title('Uppic');
    var main = document.getElementById('main-container');
    var pictures =[
        {
            user:{
                username: 'lilip',
                avatar: 'https://newsbreak.dk/wp-content/uploads/2016/09/Cow-Andi-Taranczuk-610x475.jpg'
            },
            url: 'puente.jpg',
            likes: 1204,
            liked: false,
            createdAt: new Date()
        },
        {
            user:{
                username: 'Ploes',
                avatar: 'https://newsbreak.dk/wp-content/uploads/2016/09/Cow-Andi-Taranczuk-610x475.jpg'
            },
            url: 'puente.jpg',
            likes: 104,
            liked: true,
            createdAt: new Date().setDate(new Date().getDate()-10)
        },
    ]
    empty(main).appendChild(template(pictures));
})
page();