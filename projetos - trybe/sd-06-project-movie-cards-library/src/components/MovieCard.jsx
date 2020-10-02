import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <section className="Movie">
        <div className="Movie-body">
          <img src={imagePath} alt="imagem" />
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <Rating rating={rating} />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  // Segui a orientação do professor alberto que estava no slack
  // https://trybecourse.slack.com/archives/C016CCMKN9E/p1599860767298800
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
