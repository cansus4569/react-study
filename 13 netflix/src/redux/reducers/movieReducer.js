let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upComingMovies: {},
    loading: true,
    genreList: [],
}

function movieReducer(state = initialState, action) {
    let { type, payload } = action;

    switch (type) {
        case "GET_MOVIES_REQUEST":
            return { ...state, loading: true };
        case "GET_MOVIES_SUCCESS":
            return {
                ...state,
                popularMovies: payload.popularMovies,
                topRatedMovies: payload.topRatedMovies,
                upComingMovies: payload.upComingMovies,
                loading: false,
                genreList: payload.genreList,
            };
        case "GET_MOVIES_FAIL":
            return { ...state, loading: false };
        default:
            return { ...state };
    }
}

export default movieReducer;