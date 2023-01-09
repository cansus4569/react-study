import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
    const dispatch = useDispatch();

    const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(movieAction.getMovies())
    }, [])

    // loading == true : spinner on
    // loading == false : spinner off
    if(loading) {
        return <ClipLoader
        color="#ffffff"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    }

    return (
        <div>
            
            <Banner movie={popularMovies.results[0]} />
            <h1 className='title'>Popular Movie</h1>
            <MovieSlide movies={popularMovies} />
            <h1 className='title'>Top Rated Movie</h1>
            <MovieSlide movies={topRatedMovies} />
            <h1 className='title'>Upcoming Movie</h1>
            <MovieSlide movies={upComingMovies} />
        </div>
    )
}

export default Home
