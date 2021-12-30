import React from 'react';
import TableHeader from '../common/tableHeader';
import Like from '../common/like';

class MoviesTable extends React.Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: 'like' },
    { key: 'delete' },
  ];

  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like isLiked={movie.liked} onLikeToggle={() => onLike(movie)} />
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(movie.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
