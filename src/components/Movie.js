import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background:#eeeeee;
    border-radius:15px;
    padding:5%;
    margin:5%;
    display:flex;
    flex-direction:row;
    box-shadow:1px 3px 4px 2px grey;
`;

const Title = styled(Link)`
    text-decoration:none;
    margin-top:20px;
    &:visited{
        color:blue;
    }
    &:hover{
        color:red;
    }
`
const P = styled.p`

`;
const Div = styled.div`
    padding:5%;    
`;

function Movie({ id, coverImg, title, summary, genres }) {
    return (

        <Container>
        <img src={coverImg} />
        <Div>
        <h2>
           Title <br/>
          <Title to={`/movie/${id}`}>{title}</Title>
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0,235)}...` :summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        </Div>
        </Container>
  );
}

Movie.prototype = {
  id: ProtoTypes.number.isRequired,
  coverImg: ProtoTypes.string.isRequired,
  title: ProtoTypes.string.isRequired,
  summary: ProtoTypes.string.isRequired,
  genres: ProtoTypes.arrayOf(ProtoTypes.string).isRequired,
};

export default Movie;
