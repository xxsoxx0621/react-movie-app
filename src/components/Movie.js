import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id,coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id : ProtoTypes.number.isRequired,
  coverImg: ProtoTypes.string.isRequired,
  title: ProtoTypes.string.isRequired,
  summary: ProtoTypes.string.isRequired,
  genres: ProtoTypes.arrayOf(ProtoTypes.string).isRequired,
};

export default Movie;
