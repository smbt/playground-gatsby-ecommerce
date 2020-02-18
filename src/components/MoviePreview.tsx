// Node modules
import React from 'react'
import { Grid } from '@material-ui/core'

// Types
import { Movie } from '../types/Movie'

const MoviePreview = (props: { movie: Movie }) => {
    const movie = props.movie
    const imdbLink = 'https://www.imdb.com/title/' + movie.imdbID
    return <Grid
        item
        xs={5}
        sm={3}
        key={movie.imdbID}
    >
        <div
            style={{ marginBottom: 20, padding: 10, border: '1px solid #ccc', textAlign: 'center' }}
        >
            {movie.Poster !== 'N/A'
                ? <img src={movie.Poster} alt={movie.Title} width={100} style={{ marginBottom: 10 }}/>
                : null
            }
            <div>{movie.Title} ({movie.Year})</div>
            <div style={{ color: '#aaa', fontSize: 14, marginBottom: 20 }}>{movie.Type}</div>
            <button>
                <a href={imdbLink} target={'_blank'}>Go to IMDB page</a>
            </button>
        </div>
    </Grid>
}

export default MoviePreview