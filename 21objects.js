var moviename = "Avengers";
var movieRating = 4.5;
var movielang = "Eng";

var moviename1 = "Jab We Met";
var movieRating1 = 4.8;
var movielang1 = "Hindi";

//literal notation
var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'Eng'
}

typeof(movies)
"object"
movies.name
"Avengers"
movies.rating
4.5
name.ind="Hollywood"
"Hollywood"
movies.ind="Hollywood"
"Hollywood"
movies
{name: "Avengers", rating: 4.5, lang: "Eng", ind: "Hollywood"}
delete movies.rating
true

movies['name']
"Avengers"
movies['rating']
4.5
movies['lang']="Hindi"
"Hindi"
movies
{name: "Avengers", rating: 4.5, lang: "Hindi"}
movies['ind']="Hollywood"
"Hollywood"
delete movies['rating']
true

JSON> JavaScript Object notation

var movies = [
    {
        name:'Avengers',
        rating:4.5,
        lang:'Eng'
    },
    {
        name:'Jab We Met',
        rating:4.2,
        lang:'Hindi'
    }  
]

movies[0].name


var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'Eng'
}
undefined
for(key in movies){console.log(key)}
name
rating
lang

for(key in movies){
    console.log(movies[key])
}

Avengers
4.5
Eng