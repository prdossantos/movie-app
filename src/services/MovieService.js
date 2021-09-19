import axios from "axios";

export const getMoviesUpComming = async () => {

    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/movie/upcoming`, {
        params: {
            api_key: process.env.REACT_APP_API_KEY
        }
    });

    return data;

}

export const getMovie = async ( id ) => {

    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/movie/${id}`, {
        params: {
            api_key: process.env.REACT_APP_API_KEY
        }
    });

    return data;

}
