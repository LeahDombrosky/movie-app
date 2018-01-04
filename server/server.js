const express = require('express');
const { json } = require('body-parser');
// const mc = require( __dirname + '/controllers/messages_controller');
const app = express();

app.use(json());
// app.use(express.static(__dirname + '/../public/build'));
const port = 3001;

app.get('/api/test', (req, res, next) => {
  res.json('hellllooooo');
});

// const messagesBaseUrl = "/api/movies";
// const messagesBaseUrl =
//   'https://api.themoviedb.org/3/movie/550?api_key=7d486524483397e016dc4087405127ab';

// app.get(movieBaseUrl, mc.read);
// app.post(movieBaseUrl, mc.create);
// app.put( `${movieBaseUrl}/:id`, mc.update );
// app.delete( `${movieBaseUrl}/:id`, mc.delete );

// app.get('/api/movies', (req, res, next) => {
// axios.get('https://api.themoviedb.org/3/movie/550?api_key=7d486524483397e016dc4087405127ab').then
// axios.get('https://api.themoviedb.org/3/search/movie?api_key=7d486524483397e016dc4087405127ab&query=Jack+Reacher').then
//     (response => {
//         console.log(response.data)
//         res.json(response.data);
//     }).catch(console.log);
// });

// app.get('/api/movies/:id', (req, res, next) => {
//     axios.get(`http://swapi.co/api/people/${req.params.id}`).then(response => {
//         res.json(response.data);
//     }).catch(console.log);
// })
// function getAllMovies() {
// axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=d2501696').then;
// (response => {
//   console.log(response.data);
//   res.json(response.data);
// }).catch(console.log);
// }

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
