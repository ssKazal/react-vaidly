import * as genresAPI from './FakeGenreServices';

const movies = [
  {
    id: '5b212djccrr4235kdakj643801',
    title: 'Terminator',
    genre: { id: '7bsfu843hkj98fu734601', name: 'Action' },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    liked: true,
  },
  {
    id: '5b212djccrr4235kdakj643802',
    title: 'Dune',
    genre: { id: '7bsfu843hkj98fu734602', name: 'Sci-Fi' },
    numberInStock: 8,
    dailyRentalRate: 3.0,
  },
  {
    id: '5b212djccrr4235kdakj643803',
    title: 'Dark Knight',
    genre: { id: '7bsfu843hkj98fu734604', name: 'Thriller' },
    numberInStock: 7,
    dailyRentalRate: 3.2,
  },
  {
    id: '5b212djccrr4235kdakj643804',
    title: 'Free Guy',
    genre: { id: '7bsfu843hkj98fu734603', name: 'Comedy' },
    numberInStock: 6,
    dailyRentalRate: 2.5,
  },
  {
    id: '5b212djccrr4235kdakj643805',
    title: 'Interstreller',
    genre: { id: '7bsfu843hkj98fu734602', name: 'Sci-Fi' },
    numberInStock: 6,
    dailyRentalRate: 2.9,
  },
  {
    id: '5b212djccrr4235kdakj643806',
    title: 'The Card Counter',
    genre: { id: '7bsfu843hkj98fu734604', name: 'Thriller' },
    numberInStock: 5,
    dailyRentalRate: 2.4,
  },
  {
    id: '5b212djccrr4235kdakj643807',
    title: 'The Matrix',
    genre: { id: '7bsfu843hkj98fu734602', name: 'Sci-Fi' },
    numberInStock: 7,
    dailyRentalRate: 3.3,
  },
  {
    id: '5b212djccrr4235kdakj643808',
    title: 'Tintin',
    genre: { id: '7bsfu843hkj98fu734601', name: 'Action' },
    numberInStock: 4,
    dailyRentalRate: 2.7,
  },
  {
    id: '5b212djccrr4235kdakj643809',
    title: 'Jhon Wick',
    genre: { id: '7bsfu843hkj98fu734601', name: 'Action' },
    numberInStock: 8,
    dailyRentalRate: 3.0,
  },
  {
    id: '5b212djccrr4235kdakj643810',
    title: 'Hangover',
    genre: { id: '7bsfu843hkj98fu734603', name: 'Comedy' },
    numberInStock: 6,
    dailyRentalRate: 2.8,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((movie) => movie.id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m.id === movie.id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find((g) => g.id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb.id) {
    movieInDb.id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}
