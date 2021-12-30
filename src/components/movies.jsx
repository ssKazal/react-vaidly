import React from 'react';
import MoviesTable from './moviesTable';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { getMovies } from '../services/FakeMovieServices';
import { getGenres } from '../services/FakeGenreServices';
import { paginate } from '../utils/paginate';
import _ from 'lodash';

class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'title', order: 'asc' },
  };

  componentDidMount() {
    this.setState({ ...this.state, movies: getMovies(), genres: [{ id: '', name: 'allMovies' }, ...getGenres()] });
  }

  handleDelete = (movieId) => {
    const movies = [...this.state.movies.filter((movie) => movie.id !== movieId)];
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ ...this.state, currentPage: page });
  };

  handleGenreSelect = (genre) => {
    console.log(genre);
    this.setState({ ...this.state, selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ ...this.state, sortColumn });
  };

  render() {
    const { movies: allMovies, currentPage, pageSize, genres, selectedGenre, sortColumn } = this.state;

    const filtered = selectedGenre && selectedGenre.id ? allMovies.filter((m) => m.genre.id === selectedGenre.id) : allMovies;
    const moviesCount = filtered.length;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    if (moviesCount === 0) return <p>There are no movies in the database.</p>;

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup items={genres} selectedItem={selectedGenre} onItemSelect={this.handleGenreSelect} />
        </div>
        <div className="col">
          <p>Showing {moviesCount} movies in the database.</p>
          <div id="table-body">
            <MoviesTable movies={movies} onLike={this.handleLike} onDelete={this.handleDelete} sortColumn={sortColumn} onSort={this.handleSort} />
          </div>
          <Pagination itemsCount={moviesCount} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange} />
        </div>
      </div>
    );
  }
}

export default Movies;
